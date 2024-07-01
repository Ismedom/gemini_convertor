"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/other/Heading";
import SelectOption from "@/components/SelectOption";
import SelectUnit from "@/components/SelectUnit";
import { area } from "@/constants/units/area";
import { FaArrowCircleRight } from "react-icons/fa";
import { mass } from "@/constants/units/mass";
import { lengthUnit } from "@/constants/units/length";
import { energy } from "@/constants/units/energy";
import { cubic } from "@/constants/units/cubic";
import { time } from "@/constants/units/time";
import { force } from "@/constants/units/force";
import { pressure } from "@/constants/units/pressure";
import { Select, SelectItem } from "@nextui-org/select";
import Testing from "@/components/testing";

interface UnitType {
  unit: string;
  conversionFactor: number;
}

export default function Home() {
  const [unit, setUnit] = useState({ option_input: 0, option_output: 0 });
  const [PeriodUnit, setPeriodUnit] = useState<string>("length");
  const [PeriodArray, setPeriodArray] = useState<UnitType[]>([]);

  useEffect(() => {
    function loading(): void {
      PeriodUnit.toLowerCase() === "length"
        ? setPeriodArray(lengthUnit)
        : PeriodUnit.toLowerCase() === "mass"
        ? setPeriodArray(mass)
        : PeriodUnit.toLowerCase() === "area"
        ? setPeriodArray(area)
        : PeriodUnit.toLowerCase() === "energy"
        ? setPeriodArray(energy)
        : PeriodUnit.toLowerCase() === "time"
        ? setPeriodArray(time)
        : PeriodUnit.toLowerCase() === "force"
        ? setPeriodArray(force)
        : PeriodUnit.toLowerCase() === "pressure"
        ? setPeriodArray(pressure)
        : PeriodUnit.toLowerCase() === "cubic"
        ? setPeriodArray(cubic)
        : setPeriodArray([]);
    }
    loading();
  }, [PeriodUnit]);

  return (
    <div className="h-[100vh] w-full p-2 mx-auto max-w-[1200px]">
      <Heading />
      <div className="sm:mx-5 md:mx-10 flex items-center gap-2">
        <h3 className="text-lg uppercase text-gray-300 font-bold">Select unit for Convert</h3>
        <SelectOption setPeriodUnit={setPeriodUnit} PeriodUnit={PeriodUnit} />
      </div>
      <div className="flex gap-3 py-4 sm:mx-5 md:mx-10 items-center">
        <SelectUnit array={PeriodArray} />
        <FaArrowCircleRight className="text-white" />
        <SelectUnit array={PeriodArray} />
      </div>
      {/* <Testing /> */}
    </div>
  );
}
