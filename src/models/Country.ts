import CountryStats from './CountryStats';

export default class Country {
    name: string;
    countryCode: string;
    slug: string;
    stats: CountryStats;
    currentText: string;

    constructor(countryResponse: any) {
        this.name = countryResponse.Country;
        this.countryCode = countryResponse.CountryCode;
        this.slug = countryResponse.Slug;
        this.stats = new CountryStats(countryResponse);
        this.currentText = 'Select'
    }
}
