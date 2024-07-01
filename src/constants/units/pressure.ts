interface PressureUnit {
  unit: string;
  conversionFactor: number;
}

export const pressure: PressureUnit[] = [
  {
    unit: "kPa",
    conversionFactor: 0.001,
  },
  {
    unit: "MPa",
    conversionFactor: 1e-6,
  },
  {
    unit: "bar",
    conversionFactor: 1e-5,
  },
  {
    unit: "mbar",
    conversionFactor: 0.01,
  },
  {
    unit: "psi",
    conversionFactor: 0.000145038,
  },
  {
    unit: "atm",
    conversionFactor: 9.86923e-6,
  },
  {
    unit: "Torr",
    conversionFactor: 0.00750062,
  },
];
