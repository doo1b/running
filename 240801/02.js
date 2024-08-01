// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// a 함수 내부에서 name을 찾기 위해 한 단계 위의 스코프에서 name값을 가져옴 myName 함수에서 name = yono2라고 선언, 할당했기 때문에 yuno2 출력

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// var는 재선언, 재할당이 가능하고 if문을 뚫고 나가기때문에 var x = 1 이 지워지고 2로 덮어씌워짐. 2 출력

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 메소드 안의 화살표 함수는 상위 스코프의 this(name: "yuno")를 출력한다. 단순 함수에서의 this는 전역객체를 호출하기 때문에 name을 찾을 수 없어서 undefined를 출력한다.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
