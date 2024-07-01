interface ForceUnit {
  unit: string;
  conversionFactor: number;
}

export const force: ForceUnit[] = [
  {
    unit: "kN",
    conversionFactor: 0.001,
  },
  {
    unit: "dyn",
    conversionFactor: 100000,
  },
  {
    unit: "lbf",
    conversionFactor: 0.224809,
  },
  {
    unit: "kgf",
    conversionFactor: 0.101972,
  },
];
