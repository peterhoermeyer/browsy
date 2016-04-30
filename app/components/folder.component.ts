import {Component, Output, EventEmitter, OnInit} from 'angular2/core';
import {File} from '../classes/file'; // interface
import {FileComponent} from './file.component'; // directive
import {FileService} from '../services/file.service'; // provider
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'folder',
    templateUrl: './templates/folder.html',
    styleUrls: ['./css/folder.css'],
    directives: [FileComponent, FolderComponent],
    properties: ['folder'],
    providers: [FileService, HTTP_PROVIDERS],
    viewProviders: []
})
export class FolderComponent {
    public id: number = 1;
    public folder: File; // holds own File-Object
    public children: File[] = [];
    
    @Output() fileClicked: EventEmitter<File> = new EventEmitter(); // inform browsy on folder open
    @Output() folderClosed: EventEmitter<File> = new EventEmitter(); // inform browsy on folder close
    
    public onFileClicked(file: File) {
        this.fileClicked.emit(file);
    }
    
    /**
     * Close a folder view
     */
    public onClose(folder: File) {
        this.folderClosed.emit(folder);
        this.folder.isOpen = false;
    }
    
    constructor(private _fileService: FileService) {}

    /**
     * Get All Files from FileService.
     * folderId will be set for filtering in View.
     */
    public getFiles(folderId: number) {
        this._fileService.getFiles(folderId)
            .subscribe(
            data => this.children = data,
            error => console.log('this error', error),
            () => console.log('finished!', this.children)
            );
    }

    public ngOnInit() {
        // get files for the root folder (id == 1)
        if (typeof this.folder !== 'undefined') {
            this.id = this.folder.id;
            if (this.id === 1) {
                // TODO: set styling attrs for desktop folder
            }
        }       
        this.getFiles(this.id);
    }

}