export class Town {
  constructor(name) {
    this.name = name;
    this.population = 1000;
    this.diseased = 10;
    this.curfew = false;
    this.vaccinated = false;
  }

  spreadDisease() {
    setInterval(() => {
      this.population = this.population - Math.ceil(this.diseased / 10);
      this.diseased = this.diseased - Math.ceil(this.diseased / 10);
      if (this.vaccinated) {
        this.diseased = Math.min (Math.floor(this.diseased * 1.01), this.population);
      } else if (this.curfew) {
        this.diseased = Math.min(Math.floor(this.diseased * 1.5), this.population);
      } else {
        this.diseased = Math.min(Math.floor(this.diseased * 2), this.population);
      }
    }, 1000);
  }

  callTheCDC() {
    this.diseased = 0;
  }

  curfew2() {
    this.curfew = !this.curfew;
  }

  vaccinate() {
    this.vaccinated = true;
  }

  treatment() {
    this.diseased = Math.max (this.diseased - 10,0);
  }

}
