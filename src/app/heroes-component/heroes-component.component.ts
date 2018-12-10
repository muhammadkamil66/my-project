import { Component , OnInit} from '@angular/core';


import { HeroService } from '../hero-service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../Hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.css'],
  providers: [HeroService]

})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService){

  }

  ngOnInit(): void{
    this.heroService.getHeroes().then(res =>
      this.heroes = res
      )
    //this.heroes = this.heroService.getHeroes();
  }

  title = 'Tour Of Heroes';

  // heroes = HEROES;

  // hero : Hero ={
  //   id: 1,
  //   name : "Windstrom",
  // }
  heroes: Hero[];
  selectedHero : Hero


  onSelect(hero: Hero): void{
    this.selectedHero = hero
    // console.log(hero);
  }
}
