# Challenge
Build A Logistic System where you need to calculate different freigth prices based on volume, size and type of transportation i.e boat, truck, rail, prices are dynamic they keep changing.

### Patterns Candidates
- Builder: can have constant value objects for each type of "option", then choosing one by one, summing with the last summed value
- Chain of responsability: can create middlewares that each will have the responsability to calculate it part of the sum (e.g sizeMiddleware calculates by size, volumeMiddleware by volume and so on)
- (Picked) Strategy: can have different objects each with its logic of calculation

## poc-logistics-bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
