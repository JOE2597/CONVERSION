let FVal = document.querySelector("#FVal");
let fromDis = document.querySelector("#fromDistance");
let toDis = document.querySelector("#toDistance");
let answer1 = document.querySelector("#answer1");


function convert () {
    let frmDT = fromDis.value;
    let toDT = toDis.value;

    if (FVal.value == ''){
      answer1.innerHTML = "Please Enter a Value";
      console.log ("no value");
    }
    //FT
    else if (frmDT == "ft" && toDT == "ft"){
        answer1.innerHTML = "Please select different distance"
        console.log ("ft")
    }
    else if (frmDT == "ft" && toDT == "mt"){
      answer1.innerHTML = FVal.value * 0.3048 + " M";
      console.log ("ft to mt");
    }
    else if (frmDT == "ft" && toDT == "km"){
      answer1.innerHTML = FVal.value * 0.0003048 + " KM";
      console.log ("ft to km");
    }
    else if (frmDT == "ft" && toDT == "ml"){
      answer1.innerHTML = FVal.value * 0.000189394 + " MILE";
      console.log ("ft to ml");
    }
    //MT
    else if (frmDT == "mt" && toDT == "mt"){
      answer1.innerHTML = "Please select different distance"
      console.log ("mt")
    }
    else if (frmDT == "mt" && toDT == "ft"){
      answer1.innerHTML = FVal.value * 3.28084 + " FT";
      console.log ("mt to ft");
    }
    else if (frmDT == "mt" && toDT == "km"){
      answer1.innerHTML = FVal.value * 0.001 + " KM";
      console.log ("mt to km");
    }
    else if (frmDT == "mt" && toDT == "ml"){
      answer1.innerHTML = FVal.value * 0.00062 + " MILE";
      console.log ("mt to ml");
    }
    //KM
    else if (frmDT == "km" && toDT == "km"){
      answer1.innerHTML = "Please select different distance"
      console.log ("km")
    }
    else if (frmDT == "km" && toDT == "ft"){
      answer1.innerHTML = FVal.value * 3280.84 + " FT";
      console.log ("km to ft");
    }
    else if (frmDT == "km" && toDT == "mt"){
      answer1.innerHTML = FVal.value * 1000 + " M";
      console.log ("km to mt");
    }
    else if (frmDT == "km" && toDT == "ml"){
      answer1.innerHTML = FVal.value * 0.621371 + " MILE";
      console.log ("km to ml");
    }
    //ML
    else if (frmDT == "ml" && toDT == "ml"){
      answer1.innerHTML = "Please select different distance"
      console.log ("ml")
    }
    else if (frmDT == "ml" && toDT == "ft"){
      answer1.innerHTML = FVal.value * 5280 + " FT";
      console.log ("ml to ft");
    }
    else if (frmDT == "ml" && toDT == "mt"){
      answer1.innerHTML = FVal.value * 1609.34 + " M";
      console.log ("ml to mt");
    }
    else if (frmDT == "ml" && toDT == "km"){
      answer1.innerHTML = FVal.value * 1.60934+ " KM";
      console.log ("ml to km");
    }
    else {
      answer1.innerHTML = "not correct"
    }  
}
function eraseData (){
    FVal.value = "";
    fromDis.value = "ft";
    toDis.value = "ft";
    answer1.innerHTML = "LET'S CONVERT"
}

// 1 f is = to 0.3048 m
//function meter () {
  //  let ans = parseInt(FVal.value) * 0.3048;

 //   console.log(ans);
 //   answer1.innerHTML= ans + " M";
//}

// 1 f is = to 0.0003048 km
//function kilometer () {
    //let ans = parseInt(FVal.value) * 0.0003048;

    //console.log(ans);
   // answer1.innerHTML= ans + " KM";
//}

// 1 f is = to 0.000189394 mile
//function mile () {
  //  let ans = parseInt(FVal.value) * 0.000189394;

    //console.log(ans);
   // answer1.innerHTML= ans + " MILE";
//}
