// async await 를 사용한 코드로 변경해보기
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function promise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) {
        resolve("성공");
      } else reject("실패");
    }, 3000);
  });
}

async function getData(url) {
  try {
    const answer = await promise(url);
    console.log(answer);
  } catch (error) {
    console.error(error);
  }
}

getData(API_URL);
getData(WRONG_URL);
