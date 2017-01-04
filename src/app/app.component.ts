import { Component  } from '@angular/core';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
  title = 'Show me!';
  whiskeyName: string = "Jameson"

  setWhiskeyName(newName: string) {
    this.whiskeyName = newName
  }
}
