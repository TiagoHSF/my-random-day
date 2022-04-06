import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-day-randomized';

  carregando: any;
  itens: string[] = [];
  randomizedNumber: any;
  itemSelecionado: any;
  substringRedirect: any;

  constructor() {
    this.randomizar();
  }

  ngOnInit(): void {
    this.itemSelecionado = '...';
    this.carregando = true;
  }

  randomizar() {
    this.itens = [
      'STUDY 30 MINUTES',
      'STUDY 1 HOUR',
      'STUDY 2 HOURS',
      'READ A BOOK OF TERROR',
      'READ A ROMANCE BOOK',
      'READ 15 PAGES OF ANY BOOK',
      'FOR A WALK',
      'FOR A SWIM',
      'TO THE GYM',
      'TO RUN',
      'START A DIET',
      'LEARN A NEW LANGUAGE',
      'STUDY A NEW COURSE',
      'WATCH A ROMANCE MOVIE',
      'WATCH A HORROR MOVIE',
      'WATCH A SUSPENSE MOVIE',
      'WATCH AN ACTION MOVIE',
      'WATCH A HERO MOVIE',
      'TO A PARTY',
      'DRINK MORE WATER',
      'DRINK ALCOHOLIC DRINKS',
      'READ THE BIBLE',
      'LISTENING TO ELECTRONIC MUSIC',
      'LISTEN TO SAD MUSIC',
      'LISTEN TO COUNTRY MUSIC',
    ];
    this.randomizedNumber = Math.floor(Math.random() * 25);
    this.itemSelecionado = this.itens[this.randomizedNumber];
    this.carregando = false;
  }

  redirectTo() {
    this.substringRedirect = this.itemSelecionado.substring(0, 5);
    if (this.substringRedirect === 'STUDY') {
      console.log('Achei study');
      // window.open('www.encurtador.com.br/dxHP1');
    }
    if (this.substringRedirect === 'LISTE') {
      console.log('Achei listen');
    }
    if (this.substringRedirect === 'WATCH') {
      console.log('Achei WATCH');
    }
  }
}
