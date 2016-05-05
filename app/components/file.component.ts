import {Component} from 'angular2/core';
import {File} from '../classes/file';

@Component({
    selector: 'file',
    templateUrl: './templates/file.html',
    styleUrls: ['./css/file.css'],
    properties: ['file']
})
export class FileComponent {
    public file: File;
    public isRenaming = false;

    onClick() {
        this.file.isOpen = true;
    }

    onLabelClick() {

    }
}