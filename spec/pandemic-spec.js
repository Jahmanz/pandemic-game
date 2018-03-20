import { Town } from './../js/pandemic.js';

describe('Town', function() {
  let smallville = new Town("Smallville");

  beforeEach(function() {
    jasmine.clock().install();
    smallville.spreadDisease();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name, a population of 1000, and disease level of 10 when it is created', function() {
    expect(smallville.name).toEqual("Smallville");
    expect(smallville.population).toEqual(1000);
    expect(smallville.diseased).toEqual(10);
  });


  it('should have a disease level of 18 after 1001 milliseconds', function() {
    jasmine.clock().tick(1001);
    expect(smallville.population).toEqual(999);
    expect(smallville.diseased).toEqual(18);
  });
});
