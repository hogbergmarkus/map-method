/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map()
const multiplyByTwo = function (num) {
  return num * 2;
};

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) {
  return num * 2;
});

console.log(simplified);

// Simplfied w/ map() + arrow function
const simplifiedArrow = nums.map((num) => num * 2);
console.log(simplifiedArrow);

// With objects:
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript",
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
  },
];

// Students with IDs
const studentsWithIds = students.map((student) => [student.name, student.id]);
console.log(studentsWithIds);

//Students with IDs as Objects
const studentsWithIds2 = students.map((student) => ({
  id: student.id,
  name: student.name,
}));
console.log(studentsWithIds2);

// Students with ages
const ages = [25, 28, 22];
const studentsWithAges = students.map((student, index) => ({
  id: student.id,
  name: student.name,
  profession: student.profession,
  skill: student.skill,
  age: ages[index],
}));

console.log(studentsWithAges);
