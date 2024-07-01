interface EnergyUnit {
  unit: string;
  conversionFactor: number;
}

export const energy: EnergyUnit[] = [
  {
    unit: "kJ",
    conversionFactor: 0.001,
  },
  {
    unit: "cal",
    conversionFactor: 0.239006,
  },
  {
    unit: "kcal",
    conversionFactor: 0.000239006,
  },
  {
    unit: "Wh",
    conversionFactor: 0.000277778,
  },
  {
    unit: "kWh",
    conversionFactor: 2.77778e-7,
  },
  {
    unit: "eV",
    conversionFactor: 6.242e18,
  },
  {
    unit: "BTU",
    conversionFactor: 0.000947817,
  },
];
