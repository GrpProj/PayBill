const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.content li');

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })

    content.classList.add('active');
    this.classList.add('active');
  })
})


function mul(a,b) {
    return a*b;
}


  function calculate() {
    // Get the input values
    var num1 = document.getElementById('volt').value;
    var num2 = document.getElementById('amp').value;
    var num3 = document.getElementById('quantity').value;
    var num4 = document.getElementById('usage').value;

    // Convert the input string to numbers and multiply them
    var result1 = mul(num1,num2);
    var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

    // Display the result in the result input box
    document.getElementById('watts').value = result1;
    document.getElementById('units').value = result2;
    unit();
}

function calculate2() {
    // Get the input values
    var num1 = document.getElementById('volt2').value;
    var num2 = document.getElementById('amp2').value;
    var num3 = document.getElementById('quantity2').value;
    var num4 = document.getElementById('usage2').value;

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    document.getElementById('watts2').value = result3;
    document.getElementById('units2').value = result4;
    unit();
}

function calculate3() {
    // Get the input values
    var num1 = document.getElementById('volt3').value;
    var num2 = document.getElementById('amp3').value;
    var num3 = document.getElementById('quantity3').value;
    var num4 = document.getElementById('usage3').value;

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    document.getElementById('watts3').value = result3;
    document.getElementById('units3').value = result4;
    unit();
}

function calculate4() {
    // Get the input values
    var num1 = document.getElementById('volt4').value;
    var num2 = document.getElementById('amp4').value;
    var num3 = document.getElementById('quantity4').value;
    var num4 = document.getElementById('usage4').value;

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    document.getElementById('watts4').value = result3;
    document.getElementById('units4').value = result4;
    unit();
}

function calculate5() {
    // Get the input values
    var num1 = document.getElementById('volt5').value;
    var num2 = document.getElementById('amp5').value;
    var num3 = document.getElementById('quantity5').value;
    var num4 = document.getElementById('usage5').value;

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    document.getElementById('watts5').value = result3;
    document.getElementById('units5').value = result4;
    unit();
}

function unit() {
   
    var num5 = Number(document.getElementById('units').value);
    var num6 = Number(document.getElementById('units2').value);
    var num7 = Number(document.getElementById('units3').value);
    var num8 = Number(document.getElementById('units4').value);
    var num9 = Number(document.getElementById('units5').value);

    var day = document.getElementById('days').value;
    if (day === "Days") {
      day = 1;
    }
    day = Number(day);
    var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

    Total = parseFloat(Total).toFixed(4);
    // Display the result in the result input box
    document.getElementById('total').value = Total;
}




