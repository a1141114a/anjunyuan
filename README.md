# anjunyuan
# 나만의 캠퍼스 핫스팟

가톨릭대학교 성심교정에서 추천하고 싶은 세 곳을 소개하는 웹사이트입니다.

## Week 2 - HTML

### 소개 장소

1. 베리타스관 (중앙도서관)
2. 하늘동산
3. 예수성심성당

각 장소의 특징, 추천 이유, 사진, 위치 정보를 HTML 페이지로 구성했습니다.

### GitHub Pages

https://a1141114a.github.io/anjunyuan/campus-museum2-main/

### 작성자

안준원


## Week 3 - CSS와 반응형 UI

Week 2에서 만든 캠퍼스 핫스팟 웹사이트에 CSS 스타일과 반응형 디자인을 추가했습니다.

### 페이지별 디자인

- 메인 페이지: 밝은 색상과 카드 형태를 사용하여 깔끔하고 친근한 분위기로 구성했습니다.
- 베리타스관: 베이지와 갈색 계열의 색상, serif 글꼴을 사용하여 조용한 서재 느낌으로 디자인했습니다.
- 하늘동산: 초록색 계열과 둥근 모서리를 사용하여 자연스럽고 편안한 분위기로 디자인했습니다.
- 예수성심성당: 어두운 배경과 차분한 색상을 사용하여 조용하고 안정적인 분위기로 디자인했습니다.

### CSS

모든 페이지는 하나의 외부 CSS 파일인 `styles.css`를 사용합니다.

각 페이지의 `<body>`에 서로 다른 class를 지정하여 페이지마다 다른 색상, 글꼴, 테두리, 간격, 둥근 모서리 스타일을 적용했습니다.

### 반응형 디자인

모바일 화면을 위해 다음 media query를 사용했습니다.

```css
@media (max-width: 600px)
모바일에서는 제목 크기, 여백, section과 header의 padding을 줄이고 이미지가 화면 너비에 맞게 표시되도록 설정했습니다.

모바일 테스트

스마트폰에서 메인 페이지와 세 개의 장소 페이지를 직접 확인했습니다.

모든 페이지가 모바일 화면에서 정상적으로 표시되었고, 이미지와 링크도 정상적으로 작동하는 것을 확인했습니다.
## Week 4 - JavaScript & Data Visualization

### 1. Interactive Campus Hotspots

JavaScript와 DOM을 사용하여 세 개의 캠퍼스 장소를 하나의 페이지에서 선택하여 볼 수 있도록 구현하였다.

장소:
- 베리타스관 (중앙도서관)
- 하늘동산
- 예수성심성당

각 버튼을 클릭하면 선택한 장소의 사진, 설명, 추천 활동과 Google Maps 지도가 표시된다.

페이지:
https://a1141114a.github.io/anjunyuan/week4/


### 2. Data Visualization

World Bank의 Population, total 데이터를 CSV 형식으로 불러와 Chart.js를 이용하여 시각화하였다.

분석 내용:
- 2000년 이후 한국, 중국, 일본의 인구 변화
- 2024년 한국, 중국, 일본의 인구 규모 비교

CSV 파일은 Papa Parse를 이용하여 읽었으며, 선 그래프와 막대그래프를 사용하였다.

데이터 출처:
World Bank - Population, total
https://data.worldbank.org/indicator/SP.POP.TOTL

페이지:
https://a1141114a.github.io/anjunyuan/week4/statistics.html


### 3. Canvas Mini Game - 공 피하기

HTML Canvas와 JavaScript를 이용하여 떨어지는 공을 피하는 미니게임을 제작하였다.

게임 방법:
- 키보드의 왼쪽/오른쪽 방향키로 플레이어를 움직인다.
- 모바일에서는 화면의 왼쪽/오른쪽 버튼을 사용한다.
- 떨어지는 공과 충돌하면 게임이 종료된다.
- 살아남는 동안 점수가 증가한다.
- 다시 시작 버튼으로 게임을 다시 시작할 수 있다.

페이지:
https://a1141114a.github.io/anjunyuan/week4/game.html


### Playtest & Improvement

처음 테스트했을 때 게임이 진행되어도 난이도가 크게 변하지 않는 점을 확인하였다.

게임의 진행에 따라 난이도가 증가하도록 점수가 높아질수록 새로 생성되는 공의 속도가 빨라지도록 수정하였다.

또한 PC에서는 키보드 방향키를 사용할 수 있고, 모바일에서는 터치 버튼을 사용할 수 있도록 구현하였다.
