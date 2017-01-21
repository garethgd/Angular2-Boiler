import { Component, OnInit } from '@angular/core';
import { WHISKEY_CAT } from '../whiskey-catalogue';
import { Whiskey } from '../../shared/whiskey/Whiskey';
import { RestAPIService } from '../../shared/restapi.service';
@Component({
  selector: 'app-whiskey-list',
  templateUrl: './whiskey-list.component.html',
  styleUrls: ['./whiskey-list.component.css']
})
export class WhiskeyListComponent implements OnInit {
  whiskeyCat: Whiskey[];

  constructor(private apiService: RestAPIService) { }
  ngOnInit() {
    this.whiskeyCat = this.apiService.getWhiskeyCat();
  }

}
