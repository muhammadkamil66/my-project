import { Component , OnInit} from '@angular/core';
import {HeroesComponent} from './heroes-component/heroes-component.component'


// import { HeroService } from './hero-service';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { Hero } from './Hero';


// import { HEROES } from '../mocks/mock';


@Component({  
  selector: 'my-app', 
  // template: `
  //   <h1>{{title}} </h1>
  //   <h2>My Heroes</h2>
  //     <ul class="heroes">
  //       <li *ngFor="let hero of heroes" 
  //       [class.selected]="hero === selectedHero"
  //       (click)="onSelect(hero)">
  //         <span class="badge">{{hero.id}}</span> {{hero.name}}
  //       </li>
  //     </ul>
    
  //   `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [HeroService]
})
export class AppComponent implements OnInit{
  // constructor(private heroService: HeroService){

  // }

  ngOnInit(): void{
    // this.heroService.getHeroes().then(res =>
    //   this.heroes = res
    //   )
    //this.heroes = this.heroService.getHeroes();
  }

  title = 'Tour Of Heroes';

  // heroes = HEROES;

  // hero : Hero ={
  //   id: 1,
  //   name : "Windstrom",
  // }
  // heroes: Hero[];
  // selectedHero : Hero


  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero
  //   // console.log(hero);
  // }
}

// export const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];