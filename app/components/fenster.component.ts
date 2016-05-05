import {Component, Output, EventEmitter} from 'angular2/core';
import {File} from '../classes/file'; // interface

@Component({
    selector: 'fenster',
    templateUrl: './templates/fenster.html',
    styleUrls: ['./css/fenster.css'],
    properties: ['fenster']
})
export class FensterComponent {
    public fenster: File;
    
    @Output() fensterClosed: EventEmitter<File> = new EventEmitter();
    
    public onClose(fenster: File) {
        this.fensterClosed.emit(fenster);
        this.fenster.isOpen = false;
    }
}