import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-day-randomized';

  itens: string[] = [];
  randomizedNumber: any;
  itemSelecionado: any;
  substringRedirect: any;

constructor() {
  this.randomizar()
}

ngOnInit(): void {
  this.itemSelecionado = '...'
}

  randomizar(){
    this.itens = ['STUDY 30 MINUTES',
      'STUDY 1 HOUR',
      'STUDY 2 HOURS',
      'READ A BOOK OF TERROR',
      'READ A ROMANCE BOOK',
      'READ 15 PAGES OF ANY BOOK',
      'FOR A WALK',
      'FOR A SWIM',
      'TO THE GYM',
      'TO RUN']
  this.randomizedNumber = (Math.floor(Math.random() * 10))
  this.itemSelecionado = this.itens[this.randomizedNumber]
  }

  redirectTo(){
    this.substringRedirect = this.itemSelecionado.substring(0, 5)
    if(this.substringRedirect === 'STUDY'){
      window.open("encurtador.com.br/dxHP1")
    }
  }
}


