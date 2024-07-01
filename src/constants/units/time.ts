interface TimeUnit {
  unit: string;
  conversionFactor: number;
}

export const time: TimeUnit[] = [
  {
    unit: "ms",
    conversionFactor: 1000,
  },
  {
    unit: "µs",
    conversionFactor: 1000000,
  },
  {
    unit: "ns",
    conversionFactor: 1000000000,
  },
  {
    unit: "min",
    conversionFactor: 0.0166667,
  },
  {
    unit: "hr",
    conversionFactor: 0.000277778,
  },
  {
    unit: "d",
    conversionFactor: 1.15741e-5,
  },
];
