
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

     var button = document.getElementById("start");
        cnt = 0;
      while(1){  
      button.onclick = function() {
        cnt+= 1;
        document.getElementById("count").value =  cnt;
      }
      };
       // }
       var btn = document.getElementById("end");
    
     btn.onclick = function() {
       cnt--;
       document.getElementById("count").value =  cnt;
       
     };
        // function fn2(){
        //   answer.innerText="";
        // }





