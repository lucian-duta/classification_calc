import z from "zod";

const gradeWithCreditSchema = z.object({
  grade: z
    .number()
    .min(1, { message: "Grade is required." })
    .min(40, { message: "Module must be passed" })
    .max(100, { message: "Grade cannot be more than 100" })
    .refine((value) => !Number.isNaN(value), {
      message: "Grade is required",
    }),

  credit: z
    .number()
    .min(1, { message: "Grade is required." })

    .min(2, { message: "Credits should be more than 20." })
    .max(180, { message: "Credits should be less than 180." }),
});

export const formSchema = z.object({
  lv5Grade1: gradeWithCreditSchema,
  lv5Grade2: gradeWithCreditSchema,
  lv5Grade3: gradeWithCreditSchema,
  lv5Grade4: gradeWithCreditSchema,
  lv5Grade5: gradeWithCreditSchema,
  lv5Grade6: gradeWithCreditSchema,
  lv6Grade1: gradeWithCreditSchema,
  lv6Grade2: gradeWithCreditSchema,
  lv6Grade3: gradeWithCreditSchema,
  lv6Grade4: gradeWithCreditSchema,
  dissertation: gradeWithCreditSchema,
});

export const gradeDefaultValues = {
  lv5Grade1: { grade: 0, credit: 20 },
  lv5Grade2: { grade: 0, credit: 20 },
  lv5Grade3: { grade: 0, credit: 20 },
  lv5Grade4: { grade: 0, credit: 20 },
  lv5Grade5: { grade: 0, credit: 20 },
  lv5Grade6: { grade: 0, credit: 20 },
  lv6Grade1: { grade: 0, credit: 20 },
  lv6Grade2: { grade: 0, credit: 20 },
  lv6Grade3: { grade: 0, credit: 20 },
  lv6Grade4: { grade: 0, credit: 20 },
  dissertation: { grade: 0, credit: 40 },
};
