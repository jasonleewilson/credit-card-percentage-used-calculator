function sectionOne() {
    num1 = document.getElementById("sectionOneFirstNumber").value;
    num2 = document.getElementById("sectionOneSecondNumber").value;
  
    result1 = (num1 / num2) * 100;
    //result1 = Math.round(result1 / 12);
  
    result2 = Math.round(num1 / num2);

    document.getElementById("sectionOneResult1").innerHTML = result1 + "%" ;
    document.getElementById("sectionOneResult2").innerHTML = "$" + result2;
  }
  