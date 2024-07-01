interface FrequencyUnit {
  unit: string;
  conversionFactor: number;
}

export const frequency: FrequencyUnit[] = [
  {
    unit: "kHz",
    conversionFactor: 0.001,
  },
  {
    unit: "MHz",
    conversionFactor: 1e-6,
  },
  {
    unit: "GHz",
    conversionFactor: 1e-9,
  },
  {
    unit: "RPM",
    conversionFactor: 60,
  },
];
