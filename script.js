// 시작 금액 입력창 가져오기
const initialMoneyInput = document.getElementById("initialMoney");

// 저장 버튼 가져오기
const saveMoneyBtn = document.getElementById("saveMoneyBtn");

// 시작 금액 저장 변수
let initialMoney = 0;

// 저장 버튼 클릭 이벤트
saveMoneyBtn.addEventListener("click", function () {

  // 입력한 값을 숫자로 변환
  initialMoney = Number(initialMoneyInput.value);

  // 시작 금액이 0 이하인지 확인
  if (initialMoney <= 0) {

    // 경고창 표시
    alert("시작 금액을 입력하세요.");

    // 함수 실행 종료
    return;
  }

  // 지출 목록 다시 표시
  displayExpenses();

  // 저장 완료 알림
  alert("시작 금액이 저장되었습니다.");
});


// 날짜 입력창 가져오기
const dateInput = document.getElementById("date");

// 지출 내용 입력창 가져오기
const contentInput = document.getElementById("content");

// 사용 금액 입력창 가져오기
const amountInput = document.getElementById("amount");

// 추가 버튼 가져오기
const addBtn = document.getElementById("addBtn");

// 지출 내역 저장 배열
let expenses = [];


// 추가 버튼 클릭 이벤트
addBtn.addEventListener("click", function () {

  // 입력한 날짜 가져오기
  const date = dateInput.value;

  // 입력한 내용 가져오기
  const content = contentInput.value;

  // 입력한 금액을 숫자로 변환
  const amount = Number(amountInput.value);

  // 입력값이 올바른지 확인
  if (date === "" || content === "" || amount <= 0) {

    // 경고창 표시
    alert("모든 내용을 올바르게 입력하세요.");

    // 함수 실행 종료
    return;
  }

  // 지출 정보를 객체로 만들기
  const expense = {

    // 날짜 저장
    date: date,

    // 내용 저장
    content: content,

    // 금액 저장
    amount: amount
  };

  // 지출 객체를 배열에 추가
  expenses.push(expense);

  // 지출 목록 다시 표시
  displayExpenses();

  // 배열 내용을 콘솔에서 확인
  console.log(expenses);

  // 날짜 입력창 비우기
  dateInput.value = "";

  // 내용 입력창 비우기
  contentInput.value = "";

  // 금액 입력창 비우기
  amountInput.value = "";
});


// 지출 목록 영역 가져오기
const expenseList = document.getElementById("expenseList");


// 지출 목록 표시 함수
function displayExpenses() {

  // 기존 목록 비우기
  expenseList.innerHTML = "";

  // 남은 돈을 시작 금액으로 설정
  let remainingMoney = initialMoney;

  // 지출 내역 반복
  expenses.forEach(function (expense) {

    // 사용한 금액만큼 빼기
    remainingMoney = remainingMoney - expense.amount;

    // 새로운 표 행 만들기
    const row = document.createElement("tr");

    // 행 안에 데이터 넣기
    row.innerHTML = `
      <td>${expense.date}</td>
      <td>${expense.content}</td>
      <td>${expense.amount}</td>
      <td>${remainingMoney}</td>
    `;

    // 만든 행을 표에 추가
    expenseList.appendChild(row);
  });
}