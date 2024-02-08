import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ["Antonio Recio", "Amador Rivas", "La Cuqui", "Enrique Pastor",
                                 "Fermín Trujillo", "La bichopalo", "Chusa", "Doña Fina"];
  
  public heroeBorrado?: string = '';
  borrarUltimoHeroe(): void {
    if (this.heroeNames.length > 0) {
      this.heroeBorrado = this.heroeNames.pop();
    }
    else {
      this.heroeBorrado = '';
    }
  }
                
}
