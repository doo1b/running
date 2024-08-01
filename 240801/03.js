// 1. <빈칸>을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    return this.value;
  },
};
console.log(obj1.getValue()); //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
//
const obj2 = {
  method: function () {
    // 객체 메소드 안에서의 this는 해당 객체를 호출함. obj2 출력됨.
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        // setTimeout 안의 this는 항상 전역객체를 호출함 window를 불러옴
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
