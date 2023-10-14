import GradeField from "@/components/GradeField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema, gradeDefaultValues } from "@/schemas/gradeSchma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FcDiploma1 } from "react-icons/fc";
// import { FiUnlock } from "react-icons/fi";
// import { Toggle } from "@/components/ui/toggle";
import InfoAccordion from "@/components/InfoAcordion";
import {
  CalcResult,
  calculateClassification,
} from "@/lib/calculateClassification";
import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState<CalcResult | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: gradeDefaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setResult(calculateClassification(values));
  }
  return (
    <div className="flex items-center justify-center h-auto w-full overflow-y-auto ">
      <div className="flex-1 w-3/4 h-3/4 mx-0 my-0 lg:my-20 lg:mx-5 xl:mx-[10%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100 via-white to-teal-100  min-w-[320px] md:rounded-lg shadow-lg ">
        <div className="flex-1 space-y-4 p-2 md:p-8 pt-6">
          <Card>
            <CardHeader className="flex  sm:flex-row items-stretch justify-between space-y-2">
              <div className="ml-2">
                <h2 className="text-2xl md:text-3xl text-neutral-800 font-bold tracking-tight ">
                  Classification Calculator
                </h2>
                <p className="text-neutral-600 text-sm ">
                  This calculator is based on the University of East London's
                  classification scheme.
                </p>
              </div>
              {/* // TODO: Create a credit control system */}
              {/* <Toggle
                variant="outline"
                className="mr-2 flex-shrink  md:mr-5 space-x-2"
              >
                <FiUnlock />
                <span>Unlock Credits</span>
              </Toggle> */}
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-2">
              <InfoAccordion />
            </CardContent>
          </Card>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full h-full"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <span className="font-semibold text-neutral-600">
                      Grades at level 5
                    </span>
                  </CardHeader>
                  <CardContent className="text-neutral-700 space-y-2">
                    <GradeField
                      control={form.control}
                      gradeName="lv5Grade1"
                      label="Module 1"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv5Grade2"
                      label="Module 2"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv5Grade3"
                      label="Module 3"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv5Grade4"
                      label="Module 4"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv5Grade5"
                      label="Module 5"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv5Grade6"
                      label="Module 6"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <span className="font-semibold text-neutral-600">
                      Grades at level 6
                    </span>
                  </CardHeader>
                  <CardContent className="space-y-2 text-neutral-700 ">
                    <GradeField
                      control={form.control}
                      gradeName="lv6Grade1"
                      label="Module 1"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv6Grade2"
                      label="Module 2"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv6Grade3"
                      label="Module 3"
                    />
                    <GradeField
                      control={form.control}
                      gradeName="lv6Grade4"
                      label="Module 4"
                    />
                  </CardContent>
                  <Card className="m-2 md:m-4">
                    <CardHeader className="grid grid-cols-4 gap-10 pb-2">
                      <span className="col-span-3">
                        <span className="font-semibold text-neutral-600">
                          Dissertation Grade{" "}
                        </span>
                      </span>
                      <span className="col-span-1">Credits</span>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-4 gap-10">
                        <FormField
                          control={form.control}
                          name="dissertation.grade"
                          render={({ field }) => (
                            <FormItem className="col-span-3">
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
                          control={form.control}
                          name="dissertation.credit"
                          render={({ field }) => (
                            <FormItem className="col-span-1">
                              <FormControl>
                                <Input
                                  disabled={true}
                                  type="number"
                                  min="20"
                                  max="180"
                                  onChange={(e) => {
                                    field.onChange(
                                      parseInt(e.target.value, 10)
                                    ); // Ensure react-hook-form's onChange is called
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
                    </CardContent>
                  </Card>
                </Card>
              </div>
              <Card className={`${result ? "card-visible" : "card-hidden"}`}>
                <CardContent className=" flex transition justify-center items-center align-middle flex-col  w-full pt-6">
                  <div className="flex flex-col sm:flex-row space-x-3 justify-center items-center">
                    <FcDiploma1 size={60} />
                    <span className="text-xl md:text-2xl font-bold text-neutral-900">
                      {result?.classification}
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-neutral-900">
                      {result?.division ? result.division : null}
                    </span>
                  </div>
                  <div className="flex flex-row space-x-3 text-neutral-900">
                    <span className="text-xl md:text-2xl font-bold">
                      Final Mark:
                    </span>
                    <span className="text-xl md:text-2xl font-bold">
                      {result?.grade}%
                    </span>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center w-full">
                <Button
                  className="w-full h-16 text-lg"
                  type="submit"
                  onClick={() => {
                    console.log(form.getValues());
                  }}
                >
                  What's my classification ?
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
