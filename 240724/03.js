function addeven(a) {
    if ( a % 2 == 0 ) {
        answer = '짝수';
    }
    else answer = '홀수';
   
    return answer;
}

console.log(addeven(10)); // 결과값 "짝수";
console.log(addeven(7)); // 결과값 "홀수";