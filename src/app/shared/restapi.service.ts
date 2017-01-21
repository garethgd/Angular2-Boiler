import { Injectable } from '@angular/core';
import { Whiskey } from './whiskey/Whiskey';
import { WHISKEY_CAT } from './whiskey/whiskey-catalogue';

@Injectable()

export class RestAPIService {
    whiskeyCat : Whiskey[];

    getWhiskeyCat() : Whiskey[] {
        return WHISKEY_CAT;
    }

} 