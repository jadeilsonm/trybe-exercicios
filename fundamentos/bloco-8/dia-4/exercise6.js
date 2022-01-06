const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.reduce((acc, curr, index) => {
      const obj = {
          name: curr,
          average: grades[index].reduce((acc, curr) => acc + curr,0) / grades[index].length
      };
      acc.push(obj)
      return acc
  },[]);
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];