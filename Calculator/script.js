function populateDiv() {
  const a = document.getElementById("firstNum").value;
  const b = document.getElementById("secondNum").value;
  const operator = document.getElementById("operator").value;
  const element = document.getElementById("finalSum");

  var res;
  switch(operator){
    case '+':
        res = parseInt(a) + parseInt(b);
        break;
        case '-':
        res = parseInt(a) - parseInt(b);
        break;
        case '*':
        res = parseInt(a) * parseInt(b);
        break;
        case '/':
        res = parseInt(b) !==0 ? parseInt(a) / parseInt(b): "Error cannot divide by 0"
        break;
        default:
            res= "Invalid operation";
  }
 
  element.innerHTML = `${a} ${operator} ${b} = ${res}`;
  // real world scenrios where BE is handled elsewhere (Abstraction)
  //fetch / axios

  // fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
  // .then(function(response){
  // response.text()
  // .then(function(ans){
  // document.getElementById("finalSum").innerHTML = ans;
  // })
  // })
  // }
}
