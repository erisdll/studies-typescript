class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('driving');
  }

  protected honk(): void {
    console.log('honking');
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }

  public drive(): void {
    console.log('vroom');
  }

  private break(): void {
    console.log('Breaking Car');
  }

  public startBrakeProcss(): void {
    this.break();
  }
}

const car = new Car(4, 'orange');
car.startBrakeProcss();
