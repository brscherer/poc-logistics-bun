interface PricingStrategy {
  calculate(volume: number, size: number): number;
}

class BoatPricingStrategy implements PricingStrategy {
  calculate(volume: number, size: number): number {
    const basePrice = 100;
    const volumeMultiplier = 0.1;
    const sizeMultiplier = 0.2;
    return basePrice + volume * volumeMultiplier + size * sizeMultiplier
  }
}

class TruckPricingStrategy implements PricingStrategy {
  calculate(volume: number, size: number): number {
    const basePrice = 80;
    const volumeMultiplier = 0.15;
    const sizeMultiplier = 0.25;
    return basePrice + volume * volumeMultiplier + size * sizeMultiplier
  }
}

class RailPricingStrategy implements PricingStrategy {
  calculate(volume: number, size: number): number {
    const basePrice = 60;
    const volumeMultiplier = 0.51;
    const sizeMultiplier = 0.52;
    return basePrice + volume * volumeMultiplier + size * sizeMultiplier
  }
}

class Logistics {
  private pricingStrategy: PricingStrategy;

  constructor(pricingStrategy: PricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  setPricingStrategy(pricingStrategy: PricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  calculateFreightPrice(volume: number, size: number): number {
    return this.pricingStrategy.calculate(volume, size);
  }
}

const boatLogistics = new Logistics(new BoatPricingStrategy());
const truckLogistics = new Logistics(new TruckPricingStrategy());
const railLogistics = new Logistics(new RailPricingStrategy());

const volume = 1000;
const size = 50;

const boatPrice = boatLogistics.calculateFreightPrice(volume, size);
const truckPrice = truckLogistics.calculateFreightPrice(volume, size);
const railPrice = railLogistics.calculateFreightPrice(volume, size);

console.log(`Boat Price: ${boatPrice}`);
console.log(`Truck Price: ${truckPrice}`);
console.log(`Rail Price: ${railPrice}`);