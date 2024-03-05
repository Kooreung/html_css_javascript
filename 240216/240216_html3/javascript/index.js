let btn1;

window.onload = function () {
    btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", func1);
};

function func1() {
    let many = document.getElementById("many");
    let v = parseInt(many.value);
    let kum = v * 320;
    let total, point;
    total = document.getElementById("total");
    sale = document.getElementById("sale");
    if (kum >= 30000) {
        sale.innerHTML = kum - (kum * 0.03);
        total.innerHTML = "총 금액 : " + kum - sale.innerHTML;
        console.log(sale);
    } else {
        total.innerHTML = "총 금액 : " + kum;
        sale.innerHTML = sale;
    }
}
