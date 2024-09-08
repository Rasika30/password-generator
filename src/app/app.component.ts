import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  length: number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  password: string = '';

  generatePassword() {
    this.password = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '*&^%$()#@!~';
    let allowedChars = letters + numbers + symbols;

    for(let i = 0; i < this.length; i++) {
      this.password += allowedChars[Math.floor(Math.random()*allowedChars.length)];
    }
  }

  useLettersToggled() {
    this.useLetters = !this.useLetters
  }

  useNumbersToggled() {
    this.useNumbers = !this.useNumbers;
  }

  useSymbolsToggled() {
    this.useSymbols = !this.useSymbols;
  }

  setLength(event: any) {
    this.length = event.target instanceof HTMLInputElement ? event.target.value : undefined;
  }
}
