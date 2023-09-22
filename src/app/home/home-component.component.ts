import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  @Output() finished = new EventEmitter<void>();

  outputText: any = {
    titleText: '',
    loadingText: '',
    dotsText: '',
    doneText: '',
    availableCommands: ''
  };

  titleText = 'Welcome to J.M.B. industries(TM) terminal';
  loadingText = 'Loading........................';
  dotsText = '.....';
  doneText = '..... Done'
  availableCommands = 'home, help, about, experience, skills';

  constructor() { }

  ngOnInit(): void {
    this.initialBootUp();
  }

  private async initialBootUp() {
    await this.typeText(this.titleText, 100, 'titleText');
    await this.typeText(this.loadingText, 100, 'loadingText');
    await this.typeText(this.dotsText, 100, 'dotsText');
    await this.typeText(this.doneText, 100, 'doneText');
    this.finished.emit();
  }

  private typeText(text: string, time: number, objectKey: string): Promise<void> {
    return new Promise<void>((resolve) => {
      let index = 0;
      const interval = setInterval(() => {
        this.outputText[objectKey] += text[index];
        index++;
        if (index === text.length) {
          clearInterval(interval);
          resolve();
        }
      }, time);
    });
  }
}
