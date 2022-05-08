import React, { useState, useEffect } from "react";
import "./CalcForm.css";
import { RiHonourFill } from "react-icons/ri";
import validateGrades from "./validateGrades";

const CalcForm = () => {
  const [grades, setGrades] = useState({
    l5grade1: 0,
    l5grade2: 0,
    l5grade3: 0,
    l5grade4: 0,
    l5grade5: 0,
    l5grade6: 0,
    l6grade1: 0,
    l6grade2: 0,
    l6grade3: 0,
    l6grade4: 0,
    dissertation: 0,
  });

  const [total, setTotal] = useState(0);

  const [classification, setClassification] = useState("");

  const [errors, setErrors] = useState({
    l5grade1: true,
    l5grade2: true,
    l5grade3: true,
    l5grade4: true,
    l5grade5: true,
    l5grade6: true,
    l6grade1: true,
    l6grade2: true,
    l6grade3: true,
    l6grade4: true,
    dissertation: true,
  });

  const calculateFinalGrade = () => {
    let isValid = true;
    const err = validateGrades(grades);
    setErrors(err);

    for (const [key, value] of Object.entries(err)) {
      console.log(value);
      if (!value) isValid = false;
      setTotal(0);
    }

    if (isValid) {
      let level5 = [
        grades.l5grade1,
        grades.l5grade2,
        grades.l5grade3,
        grades.l5grade4,
        grades.l5grade5,
        grades.l5grade6,
      ];
      let level6 = [
        grades.l6grade1,
        grades.l6grade2,
        grades.l6grade3,
        grades.l6grade4,
      ];

      level5 = level5.sort((a, b) => {
        return a - b;
      });
      level6 = level6.sort((a, b) => {
        return a - b;
      });
      console.log(level5);
      console.log(level6);

      let mainComponent =
        (level6[0] * 20 +
          level6[1] * 20 +
          level6[2] * 20 +
          grades.dissertation * 40) /
        100;
      let secondComponent =
        (level6[3] * 20 + level5[0] * 20 + level5[1] * 20 + level5[2] * 20) /
        80;
      let finalGrade = (mainComponent * 80 + secondComponent * 20) / 100;
      console.log(finalGrade);
      setTotal(finalGrade.toFixed(0));
      if (finalGrade >= 70) {
        setClassification("First Class Honours");
      } else if (finalGrade >= 60) {
        setClassification("Second Class Honours, First Division");
      } else if (finalGrade >= 50) {
        setClassification("Second Class Honours, Second Division");
      } else if (finalGrade >= 40) {
        setClassification("Third Class Honours");
      } else {
        setClassification("FAILED");
      }
    }
  };

  return (
    <>
      <div className="calc-form">
        <div className="calc-form-title">
          <h1>Classification calculator</h1>
        </div>
        <div className="calc-form-content">
          <div className="grades-container">
            <div className="grades-form">
              <p>Level 5 Grades</p>

              <input
                className={errors.l5grade1 ? "" : "error"}
                type="text"
                placeholder="Grade 1"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l5grade1: e.target.value });
                }}
              />
              <input
                className={errors.l5grade2 ? "" : "error"}
                type="text"
                placeholder="Grade 2"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l5grade2: e.target.value });
                }}
              />
              <input
                className={errors.l5grade3 ? "" : "error"}
                type="text"
                placeholder="Grade 3"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l5grade3: e.target.value });
                }}
              />
              <input
                className={errors.l5grade4 ? "" : "error"}
                type="text"
                placeholder="Grade 4"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l5grade4: e.target.value });
                }}
              />
              <input
                className={errors.l5grade5 ? "" : "error"}
                type="text"
                placeholder="Grade 5"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l5grade5: e.target.value });
                }}
              />
              <input
                className={errors.l5grade6 ? "" : "error"}
                type="text"
                placeholder="Grade 6"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l5grade6: e.target.value });
                }}
              />
            </div>
            <div className="grades-form">
              <p>Level 6 Grades</p>

              <input
                className={errors.l6grade1 ? "" : "error"}
                type="text"
                placeholder="Grade 1"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l6grade1: e.target.value });
                }}
              />
              <input
                className={errors.l6grade2 ? "" : "error"}
                type="text"
                placeholder="Grade 2"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l6grade2: e.target.value });
                }}
              />
              <input
                className={errors.l6grade3 ? "" : "error"}
                type="text"
                placeholder="Grade 3"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l6grade3: e.target.value });
                }}
              />
              <input
                className={errors.l6grade4 ? "" : "error"}
                type="text"
                placeholder="Grade 4"
                maxlength="3"
                onChange={(e) => {
                  setGrades({ ...grades, l6grade4: e.target.value });
                }}
              />
            </div>
          </div>
          <div
            className="grades-form dissertation"
            maxlength="3"
            onChange={(e) => {
              setGrades({ ...grades, dissertation: e.target.value });
            }}
          >
            <p>Dissertation grade</p>

            <input
              maxlength="3"
              className={errors.dissertation ? "" : "error"}
              type="text"
              placeholder="Grade"
              onChange={(e) => {
                setGrades({ ...grades, dissertation: e.target.value });
              }}
            />
          </div>
          <button
            className="button-64"
            role="button"
            onClick={() => {
              console.log(grades);
              calculateFinalGrade();
            }}
          >
            <span className="text">What's my classification?</span>
          </button>
        </div>
        {total && (
          <div className="calc-form-result">
            <div className="calc-form-result-class">
              <RiHonourFill size={"30px"} color={"#FFF"} /> {classification}
            </div>
            <div className="calc-form-result-grade">
              <p>Grade:</p> {total}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CalcForm;
