const validateGrades = (grades) => {
  let errros = {
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
  };

  if (grades.l5grade1 < 0 || grades.l5grade1 > 100 || grades.l5grade1 === 0) {
    errros.l5grade1 = false;
  }
  if (grades.l5grade2 < 0 || grades.l5grade2 > 100 || grades.l5grade2 === 0) {
    errros.l5grade2 = false;
  }
  if (grades.l5grade3 < 0 || grades.l5grade3 > 100 || grades.l5grade3 === 0) {
    errros.l5grade3 = false;
  }
  if (grades.l5grade4 < 0 || grades.l5grade4 > 100 || grades.l5grade4 === 0) {
    errros.l5grade4 = false;
  }
  if (grades.l5grade5 < 0 || grades.l5grade5 > 100 || grades.l5grade5 === 0) {
    errros.l5grade5 = false;
  }
  if (grades.l5grade6 < 0 || grades.l5grade6 > 100 || grades.l5grade6 === 0) {
    errros.l5grade6 = false;
  }
  if (grades.l6grade1 < 0 || grades.l6grade1 > 100 || grades.l6grade1 === 0) {
    errros.l6grade1 = false;
  }
  if (grades.l6grade2 < 0 || grades.l6grade2 > 100 || grades.l6grade2 === 0) {
    errros.l6grade2 = false;
  }
  if (grades.l6grade3 < 0 || grades.l6grade3 > 100 || grades.l6grade3 === 0) {
    errros.l6grade3 = false;
  }
  if (grades.l6grade4 < 0 || grades.l6grade4 > 100 || grades.l6grade4 === 0) {
    errros.l6grade4 = false;
  }
  if (
    grades.dissertation < 0 ||
    grades.dissertation > 100 ||
    grades.dissertation === 0
  ) {
    errros.dissertation = false;
  }
  return errros;
};

export default validateGrades;
