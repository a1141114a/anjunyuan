# 나만의 캠퍼스 박물관

가톨릭대학교 캠퍼스에서 직접 선택한 세 장소를 소개하는 웹 프로젝트입니다.

선정한 장소는 베리타스관(중앙도서관), 하늘동산, 예수성심성당입니다.

---

## Week 2 - HTML

Week 2에서는 HTML을 사용하여 캠퍼스 장소를 소개하는 웹사이트를 제작하였습니다.

### 선정 장소

1. 베리타스관 (중앙도서관)
2. 하늘동산
3. 예수성심성당

메인 페이지와 각 장소의 상세 페이지를 제작하였으며, 각 페이지에는 장소에 대한 설명, 사진, 추천 활동, 지도 링크 등을 추가하였습니다.

### 파일 구성

campus-museum2-main 폴더 안에 메인 페이지와 세 개의 장소 페이지, 이미지 폴더를 구성하였습니다.

### Week 2 웹사이트

https://a1141114a.github.io/anjunyuan/campus-museum2-main/

---

## Week 3 - CSS & Responsive Design

Week 3에서는 Week 2에서 만든 웹사이트에 CSS를 적용하여 디자인을 개선하였습니다.

하나의 외부 CSS 파일인 styles.css를 사용하였으며, 네 개의 HTML 페이지에서 같은 CSS 파일을 연결하여 사용하였습니다.

### 페이지별 디자인

각 페이지에 서로 다른 class를 지정하여 페이지마다 다른 분위기를 표현하였습니다.

- 메인 페이지: 밝고 깔끔한 카드 스타일
- 베리타스관(중앙도서관): 차분하고 책을 연상시키는 분위기
- 하늘동산: 자연을 표현한 초록색 중심의 디자인
- 예수성심성당: 어두운 색상과 금색을 활용한 차분한 디자인

### 반응형 디자인

모바일 화면을 위해 max-width: 600px 기준의 media query를 사용하였습니다.

모바일에서는 제목, 글자, 여백, 이미지 등이 화면 크기에 맞게 표시되도록 조정하였습니다.

스마트폰에서 메인 페이지와 세 개의 장소 페이지를 직접 확인하였으며, 이미지와 링크가 정상적으로 작동하는 것을 확인하였습니다.

### Week 3 웹사이트

https://a1141114a.github.io/anjunyuan/campus-museum2-main/

---

## Week 4 - JavaScript & Data Visualization

Week 4에서는 JavaScript와 DOM, CSV 데이터 시각화, HTML Canvas를 활용하여 세 가지 기능을 구현하였습니다.

### 1. Interactive Campus Hotspots

JavaScript와 DOM을 사용하여 세 개의 캠퍼스 장소를 하나의 페이지에서 선택하여 볼 수 있도록 구현하였습니다.

사용자가 버튼을 클릭하면 선택한 장소의 내용만 화면에 표시됩니다.

장소:
- 베리타스관 (중앙도서관)
- 하늘동산
- 예수성심성당

각 장소에는 사진, 장소 설명, 추천 활동과 Google Maps 지도를 추가하였습니다.

페이지:

https://a1141114a.github.io/anjunyuan/week4/

---

### 2. Data Visualization

World Bank의 Population, total 데이터를 CSV 형식으로 불러와 Chart.js를 이용하여 시각화하였습니다.

Papa Parse를 이용하여 population.csv 파일을 읽고 두 개의 서로 다른 그래프를 제작하였습니다.

### 분석 내용

1. 2000년 이후 한국, 중국, 일본의 인구는 어떻게 변화했을까?
2. 2024년 한국, 중국, 일본의 인구 규모는 어떻게 다를까?

첫 번째 그래프는 선 그래프를 이용하여 연도별 인구 변화를 보여주고, 두 번째 그래프는 막대그래프를 이용하여 2024년 세 국가의 인구를 비교합니다.

중국의 인구는 한국과 일본에 비해 매우 많은 것을 확인할 수 있다. 한국의 인구 변화는 비교적 크지 않은 반면, 일본은 인구가 감소하는 추세를 보이고 있다.

또한 한국과 일본은 인구 고령화가 점점 심화되고 있다. 따라서 총인구 데이터만으로는 사회 전체의 연령 구조를 정확하게 파악하기 어렵다는 한계가 있다.

### 데이터 정보

- 데이터: Population, total
- 분석 기간: 2000년 이후
- 비교 대상: 대한민국, 중국, 일본
- 단위: 명 (people)
- 출처: World Bank

데이터 출처:

https://data.worldbank.org/indicator/SP.POP.TOTL

페이지:

https://a1141114a.github.io/anjunyuan/week4/statistics.html

---

### 3. Canvas Mini Game - 공 피하기

HTML Canvas와 JavaScript를 이용하여 떨어지는 공을 피하는 미니게임을 제작하였습니다.

### 게임 방법

- 키보드의 왼쪽/오른쪽 방향키로 플레이어를 움직입니다.
- 모바일에서는 화면의 왼쪽/오른쪽 버튼을 사용합니다.
- 위에서 떨어지는 공과 충돌하면 게임이 종료됩니다.
- 살아남는 동안 점수가 증가합니다.
- 다시 시작 버튼을 누르면 게임을 다시 시작할 수 있습니다.

### Playtest & Improvement

처음 게임을 테스트했을 때 게임이 진행되어도 난이도가 크게 변하지 않는 점을 확인하였습니다.

이를 개선하기 위해 점수가 높아질수록 새로 생성되는 공의 속도가 빨라지도록 수정하였습니다. 따라서 플레이 시간이 길어질수록 게임의 난이도가 점차 증가합니다.

또한 PC에서는 키보드 방향키를 사용할 수 있고, 모바일에서는 터치 버튼을 사용할 수 있도록 구현하였습니다.

페이지:

https://a1141114a.github.io/anjunyuan/week4/game.html

---

## GitHub Pages

Week 2 / Week 3:

https://a1141114a.github.io/anjunyuan/campus-museum2-main/

Week 4 - Interactive Campus Hotspots:

https://a1141114a.github.io/anjunyuan/week4/

Week 4 - Data Visualization:

https://a1141114a.github.io/anjunyuan/week4/statistics.html

Week 4 - Canvas Mini Game:

https://a1141114a.github.io/anjunyuan/week4/game.html
