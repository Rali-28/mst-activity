import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const MultipleChoices = () => {
  return (
    <div className="mx-auto w-1/2">
      <div>
        <span>Text</span>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" disabled />
            <Label htmlFor="option-one">Option 1</Label>
          </div>

          <div className="flex space-x-2">
            <RadioGroupItem value="option-two" id="option-two" checked />
            <Label htmlFor="option-two">Option 2</Label>
          </div>

          <div className="flex space-x-2">
            <RadioGroupItem value="option-three" id="option-three" disabled />
            <Label htmlFor="option-three">
              Payag ka non, option ka langa sdsd sda das s asd asd sdasdaasd asd
              das das?
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four" disabled />
            <Label htmlFor="option-four">Payag ka non, option ka lang?</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default MultipleChoices;
