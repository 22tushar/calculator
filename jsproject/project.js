
//  function fn1(){

//     var num1= document.getElementById("n1").value;
//     var num2= document.getElementById("n2").value;
//     var ans=(num1*num2);
//      document.getElementById("answer").value=ans;

//   }

function add() {
    var a, b, c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a + b;
    document.getElementById("answer").value = c;
}
function sub() {
    var a, b, c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a - b;
    document.getElementById("answer").value = c;
}
function mul() {
    var a, b, c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a * b;
    document.getElementById("answer").value = c;
}
function div() {
    var a, b, c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a / b;
    document.getElementById("answer").value = c;
}


        // function fn2(){
        //   answer.innerText="";
        // }





