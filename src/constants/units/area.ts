interface AreaUnit {
  unit: string;
  conversionFactor: number;
}

export const area: AreaUnit[] = [
  {
    unit: "km²",
    conversionFactor: 1e-6,
  },
  {
    unit: "cm²",
    conversionFactor: 10000,
  },
  {
    unit: "mm²",
    conversionFactor: 1000000,
  },
  {
    unit: "in²",
    conversionFactor: 1550.0031,
  },
  {
    unit: "ft²",
    conversionFactor: 10.7639,
  },
  {
    unit: "yd²",
    conversionFactor: 1.19599,
  },
  {
    unit: "ac",
    conversionFactor: 0.000247105,
  },
  {
    unit: "ha",
    conversionFactor: 0.0001,
  },
];
