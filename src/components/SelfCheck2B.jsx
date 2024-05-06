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

const SelfCheck2B = () => {
  return (
    <div className="mx-auto w-1/2">
      <ol className="list-[upper-roman]">
        <li className="mb-4">
          Header 1
          <Table>
            <TableCaption>
              <p>
                Imperial Measurement of Material List and Cutting Speed <br />
                (Note: Cutting speeds for tools of High Carbon Steel is ½ of CS for HSS) 
              </p>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2 text-center">Material</TableHead>
                <TableHead className="text-center">Cutting Speed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-x-[1px]">mat1</TableCell>
                <TableCell className="border-x-[1px]">cs1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-x-[1px]">mat2</TableCell>
                <TableCell className="border-x-[1px]">cs2</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter className="border-[1px]">
              <TableRow className="text-right">
                <TableCell>Formula:</TableCell>
                <TableCell className="flex justify-start items-center">
                \[RPM =   \]\[cs * 4 \over diamater  \]
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <ol className="ml-4 list-decimal">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
          </ol>
        </li>
        <li className="mb-4">
          Header 2
          <Table>
            <TableCaption>
              Metric Measurements of Material List and Cutting Speed
              (Note: Cutting speeds for tools of High Carbon Steel is ½ of CS for HSS) 
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2 text-center">Material</TableHead>
                <TableHead className="text-center">Cutting Speed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-x-[1px]">mat1</TableCell>
                <TableCell className="border-x-[1px]">cs1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-x-[1px]">mat2</TableCell>
                <TableCell className="border-x-[1px]">cs2</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter className="border-[1px]">
              <TableRow className="text-right">
                <TableCell>Formula:</TableCell>
                <TableCell className="flex justify-start items-center">
                \[RPM =   \]\[cs * 1000 \over \pi * diamater  \]
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <ol className="ml-4 list-decimal">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default SelfCheck2B;
