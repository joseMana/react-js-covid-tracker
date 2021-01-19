import GlobalSummary from './GlobalSummary';
import Country from './Country';

export default class CovidSummary {
    global: GlobalSummary;
    countries: Country[];
    date: string;

    constructor(covidResponse: any) {
        this.global = new GlobalSummary(covidResponse.Global);
        this.countries = covidResponse.Countries.map((item: any) => new Country(item));

        this.date = covidResponse.Date;
    }
}