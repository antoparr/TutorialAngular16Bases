import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Componente AppComponent</h1>
    <h2>Nuestra aplicación se llama {{ title }}</h2>

    <h3>{{ counter }}</h3>
    <input type="button" value="-1" (click)="decrementar()">
    <input type="button" value="Reset" (click)="reset()">
    <input type="button" value="+1" (click)="incrementar()">
  `,
  styles: ``
})
export class CounterComponent {
  private _title = 'Angular16Clase';
  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }
  private _counter: number = 10;
  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }

  incrementar(): void {
    this.counter++;
  }

  decrementar(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 10;
  }

  
}
