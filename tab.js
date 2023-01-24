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

    var day = document.getElementById('days-home').value;
    if (day === "Days") {
      day = 1;
    }
    day = Number(day);
    var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

    Total = parseFloat(Total).toFixed(4);
    // Display the result in the result input box
    document.getElementById('total').value = Total;
}

//kitchen
function kitchen() {
  // Get the input values
  var num1 = document.getElementById('volt-kitchen').value;
  var num2 = document.getElementById('amp-kitchen').value;
  var num3 = document.getElementById('quantity-kitchen').value;
  var num4 = document.getElementById('usage-kitchen').value;

  // Convert the input string to numbers and multiply them
  var result1 = mul(num1,num2);
  var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-kitchen').value = result1;
  document.getElementById('units-kitchen').value = result2;
  unitkitchen();
}

function kitchen2() {
  // Get the input values
  var num1 = document.getElementById('volt-kitchen-2').value;
  var num2 = document.getElementById('amp-kitchen-2').value;
  var num3 = document.getElementById('quantity-kitchen-2').value;
  var num4 = document.getElementById('usage-kitchen-2').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-kitchen-2').value = result3;
  document.getElementById('units-kitchen-2').value = result4;
  unitkitchen();
}

function kitchen3() {
  // Get the input values
  var num1 = document.getElementById('volt-kitchen-3').value;
  var num2 = document.getElementById('amp-kitchen-3').value;
  var num3 = document.getElementById('quantity-kitchen-3').value;
  var num4 = document.getElementById('usage-kitchen-3').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-kitchen-3').value = result3;
  document.getElementById('units-kitchen-3').value = result4;
  unitkitchen();
}

function kitchen4() {
  // Get the input values
  var num1 = document.getElementById('volt-kitchen-4').value;
  var num2 = document.getElementById('amp-kitchen-4').value;
  var num3 = document.getElementById('quantity-kitchen-4').value;
  var num4 = document.getElementById('usage-kitchen-4').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-kitchen-4').value = result3;
  document.getElementById('units-kitchen-4').value = result4;
  unitkitchen();
}

function kitchen5() {
  // Get the input values
  var num1 = document.getElementById('volt-kitchen-5').value;
  var num2 = document.getElementById('amp-kitchen-5').value;
  var num3 = document.getElementById('quantity-kitchen-5').value;
  var num4 = document.getElementById('usage-kitchen-5').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-kitchen-5').value = result3;
  document.getElementById('units-kitchen-5').value = result4;
  unitkitchen();
}

function unitkitchen() {
   
  var num5 = Number(document.getElementById('units-kitchen').value);
  var num6 = Number(document.getElementById('units-kitchen-2').value);
  var num7 = Number(document.getElementById('units-kitchen-3').value);
  var num8 = Number(document.getElementById('units-kitchen-4').value);
  var num9 = Number(document.getElementById('units-kitchen-5').value);

  var day = document.getElementById('days-kitchen').value;
  if (day === "Days") {
    day = 1;
  }
  day = Number(day);
  var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

  Total = parseFloat(Total).toFixed(4);
  // Display the result in the result input box
  document.getElementById('total-kitchen').value = Total;
}

//Light

function light() {
  // Get the input values
  var num1 = document.getElementById('volt-light').value;
  var num2 = document.getElementById('amp-light').value;
  var num3 = document.getElementById('quantity-light').value;
  var num4 = document.getElementById('usage-light').value;

  // Convert the input string to numbers and multiply them
  var result1 = mul(num1,num2);
  var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-light').value = result1;
  document.getElementById('units-light').value = result2;
  unitlight();
}

function light2() {
  // Get the input values
  var num1 = document.getElementById('volt-light-2').value;
  var num2 = document.getElementById('amp-light-2').value;
  var num3 = document.getElementById('quantity-light-2').value;
  var num4 = document.getElementById('usage-light-2').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-light-2').value = result3;
  document.getElementById('units-light-2').value = result4;
  unitlight();
}

function light3() {
  // Get the input values
  var num1 = document.getElementById('volt-light-3').value;
  var num2 = document.getElementById('amp-light-3').value;
  var num3 = document.getElementById('quantity-light-3').value;
  var num4 = document.getElementById('usage-light-3').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-light-3').value = result3;
  document.getElementById('units-light-3').value = result4;
  unitlight();
}

function light4() {
  // Get the input values
  var num1 = document.getElementById('volt-light-4').value;
  var num2 = document.getElementById('amp-light-4').value;
  var num3 = document.getElementById('quantity-light-4').value;
  var num4 = document.getElementById('usage-light-4').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-light-4').value = result3;
  document.getElementById('units-light-4').value = result4;
  unitlight();
}

function light5() {
  // Get the input values
  var num1 = document.getElementById('volt-light-5').value;
  var num2 = document.getElementById('amp-light-5').value;
  var num3 = document.getElementById('quantity-light-5').value;
  var num4 = document.getElementById('usage-light-5').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-light-5').value = result3;
  document.getElementById('units-light-5').value = result4;
  unitlight();
}

function unitlight() {
   
  var num5 = Number(document.getElementById('units-light').value);
  var num6 = Number(document.getElementById('units-light-2').value);
  var num7 = Number(document.getElementById('units-light-3').value);
  var num8 = Number(document.getElementById('units-light-4').value);
  var num9 = Number(document.getElementById('units-light-5').value);

  var day = document.getElementById('days-light').value;
  if (day === "Days") {
    day = 1;
  }
  day = Number(day);
  var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

  Total = parseFloat(Total).toFixed(4);
  // Display the result in the result input box
  document.getElementById('total-light').value = Total;
}


// HC

function hc() {
  // Get the input values
  var num1 = document.getElementById('volt-hc').value;
  var num2 = document.getElementById('amp-hc').value;
  var num3 = document.getElementById('quantity-hc').value;
  var num4 = document.getElementById('usage-hc').value;

  // Convert the input string to numbers and multiply them
  var result1 = mul(num1,num2);
  var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-hc').value = result1;
  document.getElementById('units-hc').value = result2;
  unithc();
}

function hc2() {
  // Get the input values
  var num1 = document.getElementById('volt-hc-2').value;
  var num2 = document.getElementById('amp-hc-2').value;
  var num3 = document.getElementById('quantity-hc-2').value;
  var num4 = document.getElementById('usage-hc-2').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result inpuhc
  document.getElementById('watts-hc-2').value = result3;
  document.getElementById('units-hc-2').value = result4;
  unithc();
}

function hc3() {
  // Get the input values
  var num1 = document.getElementById('volt-hc-3').value;
  var num2 = document.getElementById('amp-hc-3').value;
  var num3 = document.getElementById('quantity-hc-3').value;
  var num4 = document.getElementById('usage-hc-3').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-hc-3').value = result3;
  document.getElementById('units-hc-3').value = result4;
  unithc();
}

function hc4() {
  // Get the input values
  var num1 = document.getElementById('volt-hc-4').value;
  var num2 = document.getElementById('amp-hc-4').value;
  var num3 = document.getElementById('quantity-hc-4').value;
  var num4 = document.getElementById('usage-hc-4').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-hc-4').value = result3;
  document.getElementById('units-hc-4').value = result4;
  unithc();
}

function hc5() {
  // Get the input values
  var num1 = document.getElementById('volt-hc-5').value;
  var num2 = document.getElementById('amp-hc-5').value;
  var num3 = document.getElementById('quantity-hc-5').value;
  var num4 = document.getElementById('usage-hc-5').value;

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  document.getElementById('watts-hc-5').value = result3;
  document.getElementById('units-hc-5').value = result4;
  unithc();
}

function unithc() {
   
  var num5 = Number(document.getElementById('units-hc').value);
  var num6 = Number(document.getElementById('units-hc-2').value);
  var num7 = Number(document.getElementById('units-hc-3').value);
  var num8 = Number(document.getElementById('units-hc-4').value);
  var num9 = Number(document.getElementById('units-hc-5').value);

  var day = document.getElementById('days-hc').value;
  if (day === "Days") {
    day = 1;
  }
  day = Number(day);
  var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

  Total = parseFloat(Total).toFixed(4);
  // Display the result in the result input box
  document.getElementById('total-hc').value = Total;
}


