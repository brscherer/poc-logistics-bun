interface Handler {
  setNext(handler: Handler): Handler
  handle(volume: number, size: number): number
}

abstract class AbstractHandler implements Handler {
  private nextHandler?: Handler

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }

  public handle(volume: number, size: number): number {
    if (this.nextHandler) {
      return this.nextHandler.handle(volume, size)
    }

    return 0
  }
}

class BoatPricingHandler extends AbstractHandler {
  VOLUME_MULTIPLIER = 0.1
  SIZE_MULTIPLER = 0.2
  price = 100

  public handle(volume: number, size: number): number {
    const price = this.price + volume * this.VOLUME_MULTIPLIER + size * this.SIZE_MULTIPLER
    console.log(`Boat Price: ${price}`);
    return super.handle(volume, size)
  }
}

class TruckPricingHandler extends AbstractHandler {
  VOLUME_MULTIPLIER = 0.15
  SIZE_MULTIPLER = 0.25
  price = 80

  public handle(volume: number, size: number): number {
    const price = this.price + volume * this.VOLUME_MULTIPLIER + size * this.SIZE_MULTIPLER
    console.log(`Truck Price: ${price}`);
    return super.handle(volume, size)
  }
}

class RailPricingHandler extends AbstractHandler {
  VOLUME_MULTIPLIER = 0.51
  SIZE_MULTIPLER = 0.52
  price = 60

  public handle(volume: number, size: number): number {
    const price = this.price + volume * this.VOLUME_MULTIPLIER + size * this.SIZE_MULTIPLER
    console.log(`Rail Price: ${price}`);
    return super.handle(volume, size)
  }
}

const volume = 1000;
const size = 50;

const boatHandler = new BoatPricingHandler()
const truckHandler = new TruckPricingHandler()
const railHandler = new RailPricingHandler()

boatHandler.setNext(truckHandler).setNext(railHandler)

boatHandler.handle(volume, size)

