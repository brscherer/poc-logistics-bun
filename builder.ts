interface Builder {
  withVolume(volume: number): this
  withSize(size: number): this
}

class BoatPricingBuilder implements Builder {
  VOLUME_MULTIPLIER = 0.1
  SIZE_MULTIPLIER = 0.2
  price = 100

  constructor() {
    this.reset()
  }

  reset() {
    this.price = 100
  }

  withVolume(volume: number) {
    this.price += volume * this.VOLUME_MULTIPLIER
    return this
  }
  withSize(size: number) {
    this.price += size * this.SIZE_MULTIPLIER
    return this
  }
  build() {
    return this.price
  }
}

class TruckPricingBuilder implements Builder {
  VOLUME_MULTIPLIER = 0.15
  SIZE_MULTIPLIER = 0.25
  price = 80

  constructor() {
    this.reset()
  }

  reset() {
    this.price = 80
  }

  withVolume(volume: number) {
    this.price += volume * this.VOLUME_MULTIPLIER
    return this
  }
  withSize(size: number) {
    this.price += size * this.SIZE_MULTIPLIER
    return this
  }
  build() {
    return this.price
  }
}

class RailPricingBuilder implements Builder {
  VOLUME_MULTIPLIER = 0.51
  SIZE_MULTIPLIER = 0.52
  price = 60

  constructor() {
    this.reset()
  }

  reset() {
    this.price = 60
  }

  withVolume(volume: number) {
    this.price += volume * this.VOLUME_MULTIPLIER
    return this
  }
  withSize(size: number) {
    this.price += size * this.SIZE_MULTIPLIER
    return this
  }
  build() {
    return this.price
  }
}

const volume = 1000;
const size = 50;

const boatBuilder = new BoatPricingBuilder()
const truckBuilder = new TruckPricingBuilder()
const railBuilder = new RailPricingBuilder()

const boatPrice = boatBuilder.withVolume(volume).withSize(size).build()
const truckPrice = truckBuilder.withVolume(volume).withSize(size).build()
const railPrice = railBuilder.withVolume(volume).withSize(size).build()

console.log(`Boat Price: ${boatPrice}`);
console.log(`Truck Price: ${truckPrice}`);
console.log(`Rail Price: ${railPrice}`);