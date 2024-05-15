import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { activity2b } from "./constants/";

const SelfCheck2B = () => {
  return (
    <div className="w-3/4 mx-auto md:w-1/2">
      <ol className="list-[upper-roman]">
        {activity2b.map((activity) => (
          <li key={activity.index} className="mb-4">
            {activity.instruction}
            <Table className="my-4">
              <TableCaption>
                <p>
                  {activity.measurementUnit} of Material List and Cutting Speed{" "}
                  <br />
                  (Note: Cutting speeds for tools of High Carbon Steel is ½ of
                  CS for HSS)
                </p>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2 text-center">Material</TableHead>
                  <TableHead className="text-center">Cutting Speed</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Object.values(activity.tableData).map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="border-x-[1px]">
                      {data.material}
                    </TableCell>
                    <TableCell className="border-x-[1px]">{data.cs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className="border-[1px]">
                <TableRow className="text-right">
                  <TableCell>Formula:</TableCell>
                  <TableCell className="flex items-center justify-start">
                    {activity.formula}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>

            <ol className="ml-4 list-decimal">
              {Object.values(activity.problem).map((problem, index) => (
                <li key={index}>
                  <p>{problem.material}</p>
                  <p className="flex items-center justify-start gap-1 text-sm">
                  <span className="text-base">Answer:</span> {problem.ans}
                  </p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SelfCheck2B;
