import { formSchema } from "@/schemas/gradeSchma";
import z from "zod";

export type CalcResult = {
  classification: string;
  grade: number;
  division?: string;
};

export const calculateClassification = (
  data: z.infer<typeof formSchema>
): CalcResult => {
  // Extract grades into level5 and level6 arrays based on their prefix
  let level5Grades: number[] = [];
  let level6Grades: number[] = [];

  for (const key in data) {
    // Assert that the key is a valid key of the data type
    const gradeKey = key as keyof typeof data;

    if (gradeKey.startsWith("lv5")) {
      level5Grades.push(data[gradeKey].grade);
    } else if (gradeKey.startsWith("lv6") || gradeKey === "dissertation") {
      level6Grades.push(data[gradeKey].grade);
    }
  }

  // Sort the arrays in ascending order
  level5Grades = level5Grades.sort((a, b) => a - b);
  level6Grades = level6Grades.sort((a, b) => a - b);

  const mainComponent =
    (level6Grades[0] * 20 +
      level6Grades[1] * 20 +
      level6Grades[2] * 20 +
      data.dissertation.grade * 40) /
    100;

  const secondaryComponent =
    (level6Grades[3] * 20 +
      level5Grades[0] * 20 +
      level5Grades[1] * 20 +
      level5Grades[2] * 20) /
    80;

  const finalGrade = (mainComponent * 80 + secondaryComponent * 20) / 100;

  if (finalGrade >= 70) {
    return {
      classification: "First Class Honours (1:1)",
      grade: Math.round(finalGrade),
    };
  } else if (finalGrade >= 60) {
    return {
      classification: "Second Class Honours",
      grade: Math.round(finalGrade),
      division: "First Division (2:1)",
    };
  } else if (finalGrade >= 50) {
    return {
      classification: "Second Class Honours",
      grade: Math.round(finalGrade),
      division: "Second Division (2:2)",
    };
  } else if (finalGrade >= 40) {
    return {
      classification: "Third Class Honours",
      grade: Math.round(finalGrade),
    };
  } else {
    return { classification: "FAILED", grade: Math.round(finalGrade) };
  }
};
