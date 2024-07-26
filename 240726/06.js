

// 주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후,
// 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요.
// 가능하다면 메소드 체이닝으로 풀어주세요
1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] }
 
];


// 여기에 코드를 작성해주세요

var answer =

students
    .map( e => {
        e.average = e.scores.reduce((a, b) => a + b) / e.scores.length;
        return e;
    })
    .filter( e => e.average >= 80)
    .map( e => e.name);

console.log(answer);


// var average = [];
// var answer = [];
// students.forEach(e => {
//     average.push(
//     e.scores
//     .reduce((a, b) => a + b) / e.scores.length
//     )
// });

// for (let i = 0; i <= average.length; i++){
//     if ( average[i] >= 80){
//         answer.push(students[i].name);
//     }
// }

// console.log(answer);

// 예상 출력: ["이재상", "김준현"]

2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
console.log(
numbers
.map(e => e * 2)
.filter(e => e <= 30)
)
// 출력값 : [10, 20, 30]
