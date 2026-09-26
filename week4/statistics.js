// CSV 파일 불러오기
Papa.parse("data/population.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,

    complete: function (results) {
        const data = results.data;

        // 비교할 국가
        const countries = {
            "Korea, Rep.": "한국",
            "China": "중국",
            "Japan": "일본"
        };

        // 2000년 이후 데이터만 사용
        const filteredData = data.filter(function (row) {
            return (
                countries[row["Country Name"]] &&
                row["Year"] >= 2000
            );
        });

        // 연도 목록
        const years = [
            ...new Set(
                filteredData.map(function (row) {
                    return row["Year"];
                })
            )
        ].sort(function (a, b) {
            return a - b;
        });

        // 국가별 인구 데이터 만들기
        function getPopulation(countryName) {
            return years.map(function (year) {
                const row = filteredData.find(function (item) {
                    return (
                        item["Country Name"] === countryName &&
                        item["Year"] === year
                    );
                });

                return row ? row["Value"] : null;
            });
        }

        // -------------------------
        // 그래프 1 : 인구 변화
        // -------------------------

        const trendContext =
            document.getElementById("populationTrendChart");

        new Chart(trendContext, {
            type: "line",

            data: {
                labels: years,

                datasets: [
                    {
                        label: "한국",
                        data: getPopulation("Korea, Rep."),
                        borderWidth: 2,
                        tension: 0.2
                    },
                    {
                        label: "중국",
                        data: getPopulation("China"),
                        borderWidth: 2,
                        tension: 0.2
                    },
                    {
                        label: "일본",
                        data: getPopulation("Japan"),
                        borderWidth: 2,
                        tension: 0.2
                    }
                ]
            },

            options: {
                responsive: true,

                plugins: {
                    title: {
                        display: true,
                        text: "2000년 이후 한국·중국·일본 인구 변화"
                    }
                },

                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "연도"
                        }
                    },

                    y: {
                        title: {
                            display: true,
                            text: "인구 (명)"
                        }
                    }
                }
            }
        });


        // -------------------------
        // 그래프 2 : 2024년 비교
        // -------------------------

        const compareYear = 2024;

        function getPopulationByYear(countryName, year) {
            const row = data.find(function (item) {
                return (
                    item["Country Name"] === countryName &&
                    item["Year"] === year
                );
            });

            return row ? row["Value"] : null;
        }

        const compareContext =
            document.getElementById("populationCompareChart");

        new Chart(compareContext, {
            type: "bar",

            data: {
                labels: ["한국", "중국", "일본"],

                datasets: [
                    {
                        label: "인구 (명)",

                        data: [
                            getPopulationByYear(
                                "Korea, Rep.",
                                compareYear
                            ),
                            getPopulationByYear(
                                "China",
                                compareYear
                            ),
                            getPopulationByYear(
                                "Japan",
                                compareYear
                            )
                        ],

                        borderWidth: 1
                    }
                ]
            },

            options: {
                responsive: true,

                plugins: {
                    title: {
                        display: true,
                        text: "2024년 한국·중국·일본 인구 비교"
                    }
                },

                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "국가"
                        }
                    },

                    y: {
                        beginAtZero: true,

                        title: {
                            display: true,
                            text: "인구 (명)"
                        }
                    }
                }
            }
        });
    },

    error: function (error) {
        console.error("CSV 파일을 불러오는 중 오류가 발생했습니다.", error);
    }
});
