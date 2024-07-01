import React from "react";
import { unit_name } from "@/data/unit";
import { Select, SelectItem } from "@nextui-org/select";

interface UnitOption {
  unit: string;
  conversionFactor: number;
}

interface SelectOptionProps {
  array: UnitOption[];
}

const SelectUnit: React.FC<SelectOptionProps> = ({ array }) => {
  return (
    <div>
      <Select
        required
        placeholder="Select one"
        className="w-[140px] font-bold text-black"
        defaultSelectedKeys={[array[0]?.unit]}
        radius="full"
        scrollShadowProps={{
          isEnabled: false,
        }}
        size="md"
        labelPlacement="outside">
        {array.map(({ unit }) => (
          <SelectItem key={unit} className="text-black">
            {unit}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectUnit;
