/* eslint-disable guard-for-in */
import z from "zod";
import { formSchema } from "@/schemas/gradeSchma";

export type CalcResult = {
  classification: string;
  grade: number;
  division?: string;
};

export const calculateClassification = (
  data: z.infer<typeof formSchema>,
): CalcResult => {
  // Extract grades into level5 and level6 arrays based on their prefix
  const level5Grades: number[] = [];
  let level6Grades: number[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key in data) {
    const gradeKey = key as keyof typeof data;

    if (gradeKey.startsWith("lv5")) {
      level5Grades.push(data[gradeKey].grade);
    } else if (gradeKey.startsWith("lv6") || gradeKey === "dissertation") {
      level6Grades.push(data[gradeKey].grade);
    }
  }

  // Sort the arrays in descending order
  level6Grades = level6Grades.sort((a, b) => b - a);

  // Calculate components
  const mainComponent =
    (level6Grades[0] * 20 +
      level6Grades[1] * 20 +
      level6Grades[2] * 20 +
      data.dissertation.grade * 40) /
    100;

  let secondaryComponentGrades = level5Grades;

  secondaryComponentGrades.push(level6Grades[3]);

  secondaryComponentGrades = secondaryComponentGrades.sort((a, b) => b - a);

  const secondaryComponent =
    (secondaryComponentGrades[0] * 20 +
      secondaryComponentGrades[1] * 20 +
      secondaryComponentGrades[2] * 20 +
      secondaryComponentGrades[3] * 20) /
    80;

  let finalGrade = (mainComponent * 80 + secondaryComponent * 20) / 100;

  finalGrade = Math.round(finalGrade);

  if (finalGrade >= 70) {
    return {
      classification: "First Class Honours (1:1)",
      grade: finalGrade,
    };
  }
  if (finalGrade >= 60) {
    return {
      classification: "Second Class Honours,",
      grade: Math.round(finalGrade),
      division: "First Division (2:1)",
    };
  }
  if (finalGrade >= 50) {
    return {
      classification: "Second Class Honours,",
      grade: finalGrade,
      division: "Second Division (2:2)",
    };
  }
  if (finalGrade >= 40) {
    return {
      classification: "Third Class Honours",
      grade: finalGrade,
    };
  }
  return { classification: "FAILED", grade: Math.round(finalGrade) };
};
