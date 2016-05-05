import {Injectable} from 'angular2/core';
import {File} from '../classes/file';
import {Http, Headers, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileService {
    private files: File[] = [];
    constructor(private _http: Http) { }

    public getFiles(folderId: number): Observable<File[]> {

        if (window.location.href.indexOf('localhost') > -1) {
            // use mockup data if in local dev mode
            console.log('using mockup data');
            return this._http.get('./app/data/mock-id-' + folderId + '.json').map(res => res.json());
        }
        else {
            // production api may be handled here

        }
    }
}