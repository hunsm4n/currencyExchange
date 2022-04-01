const currencyRatio = {
    USD: {
        KRW: 1184.36,
        USD: 1,
        VND: 22839.03,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00082,
        VND: 18.73,
        unit: "원"
    },
    VND: {
        KRW: 0.053,
        USD: 0.000044,
        VND: 1,
        unit: "동"
    }
}

// 값을 재할당 하기 위해서 let으로 선언
let fromCurrency = 'USD';


// console.log(currencyRatio.VND.unit);

// console.log(currencyRatio["VND"]["unit"])

document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click", function (item) {
    item.addEventListener("click", function () {
        toCurrency = this.id;
        toButton.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
        convert("from");
    })

})
);

document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
})
);

// 1. 키를 입력하는 순간 
// 2. 환전이 되어서 
// 3. 환전된 값이 보인다

function convert() {
    console.log("here");
}
