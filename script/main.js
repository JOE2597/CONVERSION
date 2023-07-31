let FVal = document.getElementById("FVal");
let answer1 = document.getElementById("answer1")

// 1 f is = to 0.3048 m
function meter () {
    let ans = parseInt(FVal.value) * 0.3048;

    console.log(ans);
    answer1.innerHTML= ans + " M";
}

// 1 f is = to 0.0003048 km
function kilometer () {
    let ans = parseInt(FVal.value) * 0.0003048;

    console.log(ans);
    answer1.innerHTML= ans + " KM";
}

// 1 f is = to 0.000189394 mile
function mile () {
    let ans = parseInt(FVal.value) * 0.000189394;

    console.log(ans);
    answer1.innerHTML= ans + " MILE";
}
