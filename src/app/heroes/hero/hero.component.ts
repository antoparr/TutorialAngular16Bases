import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _nombre: string = "ironman";
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get nombreEnMayusculas(): string {
    return this._nombre.toUpperCase();
  }
  public edad: number = 45;

  dimeDescripcion (): string {
    return this.nombre + "-" + this.edad;
  }

  cambiarNombre (): void {
    let nuevoNombre: string | null = String(prompt("Dime un nombre"))
    console.log(nuevoNombre);
    this._nombre = nuevoNombre;
  }

  cambiarEdad (): void {
    let nuevaEdad: number | null = Number(prompt("Dime una edad"))
    console.log(nuevaEdad);
    this.edad = nuevaEdad;
  }

  reset(): void{
    this._nombre = "ironman";
    this.edad = 45;
  }

}
