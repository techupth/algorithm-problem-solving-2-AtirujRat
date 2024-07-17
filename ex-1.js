const students_1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

const student_2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];

function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length;
  let index = -1;

  for (let i = 0; i < students.length; i++) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      index = mid;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return index;
}

const result_1 = findStudentIndex(students_1, "John");
const result_2 = findStudentIndex(student_2, "Andrew");
console.log(result_1);
console.log(result_2);

// ตอบคำถามตรงนี้จ้า
// O(log n)
