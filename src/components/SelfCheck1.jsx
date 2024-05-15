import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator"
import { activity1 } from "./constants";

const MultipleChoices = () => {
  return (
    <div className="w-3/4 mx-auto md:w-1/2">
      <ol className="list-decimal">
        {activity1.map((activity) => (
          <li key={activity.index} className="my-4">
            <div>
              <span>{activity.question}</span>
              <RadioGroup className="grid grid-flow-col grid-cols-2 grid-rows-2 pt-3">
                
                {Object.keys(activity.choices).map((key, index) => (
                  <div key={index} className="flex space-x-2">
                    <RadioGroupItem
                      value={`option-${index + 1}`}
                      id={`option-${index + 1}`}
                      disabled={activity.choices[key].state === "disabled"}
                      checked={activity.choices[key].state === "checked"}
                    />
                    <Label htmlFor={`option-${index + 1}`}>
                      {key}.{" "}
                      <span className="capitalize">
                        {activity.choices[key].choice}
                      </span>
                    </Label>
                  </div>
                ))}
                
              </RadioGroup>
            </div>
            <Separator className="my-4" />
          </li>
        ))}

      </ol>
    </div>
  );
};

export default MultipleChoices;
