import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/common.module';
import { WhiskeysRoutingModule } from './whiskeys.routing';
import { WhiskeyListComponent } from './whiskey-list/whiskey-list.component';
import { WhiskeyFeaturesComponent } from './whiskey-features/whiskey-features.component';

@NgModule({
        imports: [BrowserModule, FormsModule, SharedModule, WhiskeysRoutingModule],
        declarations: [WhiskeyListComponent, WhiskeyListComponent, WhiskeyListComponent, WhiskeyFeaturesComponent],
        exports: [WhiskeyListComponent, WhiskeyListComponent,WhiskeyListComponent, WhiskeyFeaturesComponent]
    }
)

export class WhiskeysModule {}
