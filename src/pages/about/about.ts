import { Component } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public link = "https://github.com/juanfec?tab=repositories";
  constructor() {

  }

  juan(){
    window.open("https://github.com/juanfec?tab=repositories",'_system', 'location=yes');
  }
}