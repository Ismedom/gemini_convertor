interface AngularRadian {
  unit: string;
  conversionFactor: number;
}

export const mass: AngularRadian[] = [
  {
    unit: "g",
    conversionFactor: 1000,
  },
  {
    unit: "mg",
    conversionFactor: 1000000,
  },
  {
    unit: "µg",
    conversionFactor: 1000000000,
  },
  {
    unit: "t",
    conversionFactor: 0.001,
  },
  {
    unit: "lb",
    conversionFactor: 2.20462,
  },
  {
    unit: "oz",
    conversionFactor: 35.274,
  },
  {
    unit: "st",
    conversionFactor: 0.157473,
  },
];
