import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WhiskeyListComponent } from './whiskey-list/whiskey-list.component';
import { WhiskeyFeaturesComponent } from './whiskey-features/whiskey-features.component';

@NgModule({
        imports: [BrowserModule, FormsModule],
        declarations: [WhiskeyListComponent, WhiskeyListComponent]
    }
)

export class WhiskeysModule {}
