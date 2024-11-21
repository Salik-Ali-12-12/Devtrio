var checkUser = prompt("You have membership:?", "NO or YES");
var purchaseAmount = +prompt("Enter purchase amount:", 40);

if (checkUser === "YES") {
    alert("You are member😊");
    if (purchaseAmount >= 100) {
        alert("You are eligible for 20% discount😊")
    } else if (purchaseAmount >= 50 && purchaseAmount <= 99) {
        alert("You are eligible for 10% discount😊")
    } else {
        alert("You are eligible for 5% discount😔")
    }
} else {
    alert("You are guest");
    if (purchaseAmount >= 100) {
        alert("You are eligible for 10% discount😊")
    } else if (purchaseAmount >= 50 && purchaseAmount <= 99) {
        alert("You are eligible for 5% discount😊")
    } else {
        alert("You are not eligible for any discount😔")
    }
}