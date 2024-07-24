1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수를 선언만 하고 할당을 하지 않았기 때문에 출력할 값이 없음


2.
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// 재할당에 대한 오류이기 때문에 재할당이 불가능한 const 사용


3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열은 0부터 시작, 3이라면 4번째에 있는 19가 출력


4. 
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < 빈칸 >
// 빈 문자열은 false, 논리합 연산자는 피연산자 모두 false인 경우 false 반환
// !false = true, !!false = !true, !!false = false