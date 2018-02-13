import { Injectable } from '@angular/core';
import { Citizen } from '../../citizens/citizen.model';

@Injectable()
export class FilterService {
    constructor() { }

    filter(query: string, citizens: Citizen[]): Citizen[] {
        return null;
    }
}
