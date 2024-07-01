interface VolumeUnit {
  unit: string;
  conversionFactor: number;
}

export const cubic: VolumeUnit[] = [
  {
    unit: "cm³",
    conversionFactor: 1000000,
  },
  {
    unit: "mm³",
    conversionFactor: 1000000000,
  },
  {
    unit: "L",
    conversionFactor: 1000,
  },
  {
    unit: "mL",
    conversionFactor: 1000000,
  },
  {
    unit: "in³",
    conversionFactor: 61023.7441,
  },
  {
    unit: "ft³",
    conversionFactor: 35.3147,
  },
  {
    unit: "yd³",
    conversionFactor: 1.30795,
  },
  {
    unit: "gal",
    conversionFactor: 264.172,
  },
];
