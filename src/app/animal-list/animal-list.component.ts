import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

    animals: Array<Object>;
    animal;
    species;
    name;
    date_of_birth;

    constructor() {

        this.animals = [
            new Animal('Mrk', 'Dalibor', '06-06-1989'),
            new Animal('Horse', 'Sima', '06-06-2006'),
            new Animal('Dog', 'Joca', ''),
            new Animal('Cat', 'Mile', '01-03-1989')
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
        this.animals.push(new Animal(this.name, this.species, this.date_of_birth));
    }

    ngOnInit() {
    }

}
