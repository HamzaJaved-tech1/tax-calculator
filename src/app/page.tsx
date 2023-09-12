"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Table from "@/components/Table";
import taxData from "../../data/data.json";
import { useState } from "react";

const headerDataList = ["", "Monthly", "Annual"];

const payableMonthlySalary = (
  monthlySalary: number,
  annualTax: number
): number => {
  return monthlySalary - annualTax / 12;
};

const payableAnnualSalary = (
  monthlySalary: number,
  annualTax: number
): number => {
  return monthlySalary * 12 - annualTax;
};
export default function Home() {
  const [monthlySalary, setMonthlySalary] = useState<number>(0);
  const [annualSalary, setAnnualSalary] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);
  const [isTableVisible, setIsTableVisible] = useState<boolean>(false);

  const calculateTax = () => {
    let amount = 0;
    for (const slab of taxData) {
      if (
        annualSalary >= slab.minimum_income &&
        annualSalary <= slab.maximum_income
      ) {
        amount =
          ((annualSalary - slab.minimum_income) * slab.percentage) / 100 +
          slab.additional_amount;
        break;
      }
    }
    setTaxAmount(amount);
    setIsTableVisible(true);
  };

  const handleMonthlySalaryChange = (value: number) => {
    setMonthlySalary(value);
    setAnnualSalary(value * 12);
    setIsTableVisible(false);
  };

  const handleClear = () => {
    setMonthlySalary(0);
    setAnnualSalary(0);
    setTaxAmount(0);
    setIsTableVisible(false);
  };

  return (
    <>
      <div className="m-auto max-w-md mb-8">
        <h2 className="text-2xl font-semibold mb-2 mt-4 text-center">
          Tax Calculator
        </h2>
        <InputField
          label="Monthly Salary"
          value={monthlySalary}
          setValue={handleMonthlySalaryChange}
        />
        <InputField
          isDisabled={true}
          label="Annual Salary"
          value={annualSalary}
          setValue={setAnnualSalary}
        />

        <div className="flex justify-end">
          <Button
            text="Clear"
            onClick={handleClear}
            style={"bg-gray-500 mr-4 hover:bg-gray-400"}
          />
          <Button
            text="Calculate"
            isDisabled={monthlySalary === 0}
            onClick={calculateTax}
          />
        </div>
        {isTableVisible && (
          <Table
            headerList={headerDataList}
            bodyList={[
              {
                name: "Payable Salary",
                monthly: payableMonthlySalary(monthlySalary, taxAmount),
                yearly: payableAnnualSalary(monthlySalary, taxAmount),
              },
              { name: "Tax", monthly: taxAmount / 12, yearly: taxAmount },
            ]}
          />
        )}
      </div>
    </>
  );
}
