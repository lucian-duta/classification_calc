import React from "react";
import { Control } from "node_modules/react-hook-form/dist/types/form";
import z from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { formSchema } from "@/schemas/gradeSchma";

type GradeFieldProps = {
  control: Control<z.infer<typeof formSchema>>;
  gradeName: GradeNames;
  label: string;
  editCredit?: boolean;
};

export type GradeNames =
  | "lv5Grade1"
  | "lv5Grade2"
  | "lv5Grade3"
  | "lv5Grade4"
  | "lv5Grade5"
  | "lv5Grade6"
  | "lv6Grade1"
  | "lv6Grade2"
  | "lv6Grade3"
  | "lv6Grade4";

const GradeField: React.FC<GradeFieldProps> = ({
  control,
  gradeName,
  label,
  editCredit,
}) => {
  return (
    <div className="grid grid-cols-4 gap-10">
      <FormField
        control={control}
        name={`${gradeName}.grade`}
        render={({ field }) => (
          <FormItem className="col-span-3">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                className="text-xl font-medium text-neutral-900 placeholder:text-neutral-300 placeholder:text-sm"
                type="number"
                min="40"
                max="100"
                step="1"
                placeholder="Your grade"
                onChange={(e) => {
                  let value = parseInt(e.target.value, 10);
                  if (value > 100) value = 100;
                  field.onChange(value);
                }}
                onBlur={field.onBlur}
                value={field.value || ""}
                name={field.name}
                ref={field.ref}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`${gradeName}.credit`}
        render={({ field }) => (
          <FormItem className="col-span-1">
            <FormLabel>Credits</FormLabel>
            <FormControl>
              <Input
                disabled={editCredit}
                className="min-w-[55px] px-2"
                type="number"
                min="20"
                max="180"
                onChange={(e) => {
                  let value = parseInt(e.target.value, 10);
                  if (value < 20 || Number.isNaN(value)) value = 1;
                  if (value > 180) value = 180;
                  field.onChange(value);
                }}
                onBlur={field.onBlur}
                value={field.value}
                name={field.name}
                ref={field.ref}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default GradeField;
