interface LengthUnit {
  unit: string;
  conversionFactor: number;
}

export const lengthUnit: LengthUnit[] = [
  {
    unit: "km",
    conversionFactor: 0.001,
  },
  {
    unit: "cm",
    conversionFactor: 100,
  },
  {
    unit: "mm",
    conversionFactor: 1000,
  },
  {
    unit: "µm",
    conversionFactor: 1000000,
  },
  {
    unit: "nm",
    conversionFactor: 1000000000,
  },
  {
    unit: "in",
    conversionFactor: 39.3701,
  },
  {
    unit: "ft",
    conversionFactor: 3.28084,
  },
  {
    unit: "yd",
    conversionFactor: 1.09361,
  },
  {
    unit: "mi",
    conversionFactor: 0.000621371,
  },
];
