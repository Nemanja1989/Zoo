import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal';
import {Sector} from '../sector';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

    animals: Array<Object>;
    species;
    name;
    date_of_birth;
    sector;
    sectors;

    constructor() {

        this.sectors = [
            new Sector('sector 1', 'surface 1'),
            new Sector('sector 2', 'surface 2'),
            new Sector('sector 3', 'surface 3')
        ];

        this.animals = [
            new Animal('Mrk', 'Dalibor', '06-06-1989', this.sectors[0]),
            new Animal('Horse', 'Sima', '06-06-2006', this.sectors[2]),
            new Animal('Dog', 'Joca', '', this.sectors[0]),
            new Animal('Cat', 'Mile', '01-03-1989', this.sectors[1])
        ];

    }

    removeAnimal(animal) {
        const index = this.animals.indexOf(animal);
    }

    moveOnTop(animal) {
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
        this.animals.unshift(animal);
    }

    addAnimal() {
        this.animals.push(new Animal(this.name, this.species, this.date_of_birth, this.sector));
    }

    showAnimalsFromSector(sector) {
        const animals = [];

        for ( let i = 0; i < this.animals.length; i++) {
            if (this.animals[i]['sector'] === sector) {
                animals.push(this.animals[i]['name']);
            }
        }

        alert(animals.join('\n'));
    }

    ngOnInit() {
    }

}
