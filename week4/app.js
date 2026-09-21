// 세 개의 장소 버튼과 장소 내용을 가져옵니다.
const buttons = document.querySelectorAll(".place-buttons button");
const places = document.querySelectorAll(".place-content");


// 선택한 장소를 화면에 표시하는 함수
function showPlace(placeId) {

// 모든 장소를 먼저 숨깁니다.
places.forEach(function (place) {
place.classList.remove("active");
});

// 모든 버튼의 선택 상태를 해제합니다.
buttons.forEach(function (button) {
button.classList.remove("active");
});

// 선택한 장소를 표시합니다.
const selectedPlace = document.getElementById(placeId);

if (selectedPlace) {
selectedPlace.classList.add("active");
}

// 선택한 버튼의 색상을 변경합니다.
buttons.forEach(function (button) {
if (button.dataset.target === placeId) {
button.classList.add("active");
}
});
}


// 각 버튼에 클릭 이벤트를 추가합니다.
buttons.forEach(function (button) {

button.addEventListener("click", function () {

const placeId = button.dataset.target;

showPlace(placeId);
});

});


// 페이지를 처음 열었을 때
// 첫 번째 장소인 중앙도서관을 기본으로 표시합니다.
showPlace("library");
