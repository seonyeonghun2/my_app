// 나: 로그인 버튼 누른다를 알고 있으나
// 브라우저 : 몰라요!! <-- 스크립트 문법으로 알려줌

const h1 = document.querySelector("h1");
h1.style.color = "red"; // css 조작
// 1. 로그인 폼 찾기
const loginForm = document.querySelector("#login_f");

// 2. 로그인 폼에 submit 이벤트시 할일 등록
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 폼이 새로고침 하지 않게 강제
  // 3. id, pw 문자열을 지정된 로그인 요청을 보냄
  let user_id = document.querySelector("#user_id").value;
  let user_pw = document.querySelector("#user_pw").value;
  if (user_id == "") {
    alert("아이디를 입력하세요!");
    document.querySelector("#user_id").focus(); // 입력칸을 활성화
  } else if (user_pw == "") {
    alert("비밀번호를 입력하세요!");
    document.querySelector("#user_pw").focus();
  } else {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        user_pw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isLogin) {
          alert("홈으로 이동합니다.");
          location.href = "contact.html";
        } else {
          alert("로그인 실패! 아이디 또는 비밀번호를 확인하세요!");
          location.reload();
        }
      });
  }
  // 4. 응답을 받아서 HTML을 조작합니다 (로그인/로그아웃)
});
