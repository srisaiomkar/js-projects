/*
=========
map
=========
*/
const newStudentsArray = students.map((student) => {
  student.role = "student";
  return student;
});
console.log(newStudentsArray);

/*
=========
filter
=========
*/
const highScores = students.filter((student) => {
  return student.score >= 80;
});
console.log(highScores);

/*
=========
find
=========
*/
const student2 = students.find((student) => {
  return student.id === 2;
});
console.log(student2);

/*
=========
reduce
=========
*/
const studentsScore = students.reduce((acc, cur) => {
  acc += cur.score;
  return acc;
}, 0);
const avgScore = studentsScore / students.length;
console.log(avgScore);

const favSubjects = students.reduce((acc, cur) => {
  if (!acc[cur.favouriteSubject]) {
    acc[cur.favouriteSubject] = 0;
  }
  acc[cur.favouriteSubject] += 1;
  return acc;
}, {});

console.log(favSubjects);
