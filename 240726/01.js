1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);  



2.
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = obj1

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj2.d = 4;

/* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log(obj1);
console.log(obj2);
console.log(obj2 === obj1);
