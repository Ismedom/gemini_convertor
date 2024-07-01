import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

const Testing: React.FC = () => {
  const area = [{ unit: "cat" }, { unit: "dog" }, { unit: "rabbit" }];

  return (
    <Select
      isRequired
      label="Favorite Animal"
      placeholder="Select an animal"
      defaultSelectedKeys={["cat"]}
      className="max-w-xs">
      {area.map(({ unit }) => (
        <SelectItem key={unit} value={unit}>
          {unit}
        </SelectItem>
      ))}
    </Select>
  );
};

export default Testing;
