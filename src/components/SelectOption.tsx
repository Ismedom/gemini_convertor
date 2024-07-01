import React, { Dispatch, SetStateAction } from "react";
import { unit_name } from "@/data/unit";
import { Select, SelectItem } from "@nextui-org/select";

interface SelectOptionProps {
  PeriodUnit: string;
  setPeriodUnit: Dispatch<SetStateAction<string>>;
}

const SelectOption: React.FC<SelectOptionProps> = ({ PeriodUnit, setPeriodUnit }) => {
  return (
    <div>
      <Select
        required
        placeholder="Select one"
        className="w-[140px] font-bold text-black"
        defaultSelectedKeys={["area"]}
        radius="full"
        scrollShadowProps={{
          isEnabled: false,
        }}
        size={"md"}
        labelPlacement="outside"
        onChange={(e) => setPeriodUnit(e.target.value)}>
        {unit_name.map((unit) => (
          <SelectItem key={unit} className="text-black">
            {unit}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectOption;
