import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class OxumWallpaperService {
    private api = 'https://source.unsplash.com/';
    public loading = true;

    getRandomPhoto(): Observable<string> {
        return this.getPhotoByKeyword('1600x900', [
            'mountain',
            'switzerland',
        ]);
    }

    getPhotoByKeyword(size: '1600x900' = '1600x900', keywords: string[]): Observable<string> {
        const words = keywords.join(',');
        this.loading = true;
        return of(`${this.api}${size}/?${words}`).pipe(tap(() => {
            this.loading = false;
        }));
    }

}
