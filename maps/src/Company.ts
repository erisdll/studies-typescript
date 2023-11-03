import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrse: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrse = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.color = faker.color.human();
  }
  markerContent(): string {
    return `
    <div>
    <h1>Company name ${this.companyName}
    <h3>Catchphrase: ${this.catchPhrse}
    </div>
    `;
  }
}
