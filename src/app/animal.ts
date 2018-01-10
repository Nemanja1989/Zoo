import { Sector } from './sector';

export class Animal {

    species;
    name;
    date_of_birth;
    sector: Sector;

    constructor(sort: string, name: string, date: string, sector: Sector) {
        this.species        = sort;
        this.name           = name;
        this.date_of_birth  = date;
        this.sector         = sector;

    }

}

