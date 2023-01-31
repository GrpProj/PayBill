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
    var num1 = $('#volt').val();
    var num2 = $('#amp').val();
    var num3 = $('#quantity').val();
    var num4 = $('#usage').val();

    // Convert the input string to numbers and multiply them
    var result1 = mul(num1,num2);
    var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

    // Display the result in the result input box
    $('#watts').val(result1);
    $('#units').val(result2);
    unit();
}

function calculate2() {
    // Get the input values
    var num1 = $('#volt2').val();
    var num2 = $('#amp2').val();
    var num3 = $('#quantity2').val();
    var num4 = $('#usage2').val();

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    $('#watts2').val(result3);
    $('#units2').val(result4);
    unit();
}

function calculate3() {
    // Get the input values
    var num1 = $('#volt3').val();
    var num2 = $('#amp3').val();
    var num3 = $('#quantity3').val();
    var num4 = $('#usage3').val();

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    $('#watts3').val(result3);
    $('#units3').val(result4);
    unit();
}

function calculate4() {
    // Get the input values
    var num1 = $('#volt4').val();
    var num2 = $('#amp4').val();
    var num3 = $('#quantity4').val();
    var num4 = $('#usage4').val();

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    $('#watts4').val(result3);
    $('#units4').val(result4);
    unit();
}

function calculate5() {
    // Get the input values
    var num1 = $('#volt5').val();
    var num2 = $('#amp5').val();
    var num3 = $('#quantity5').val();
    var num4 = $('#usage5').val();

    // Convert the input string to numbers and multiply them
    var result3 = mul(num1,num2);
    var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

    // Display the result in the result input box
    $('#watts5').val(result3);
    $('#units5').val(result4);
    unit();
}

function unit() {
   
    var num5 = Number($('#units').val());
    var num6 = Number($('#units2').val());
    var num7 = Number($('#units3').val());
    var num8 = Number($('#units4').val());
    var num9 = Number($('#units5').val());

    var day = $('#days-home').val();
    if (day === "Days") {
      day = 1;
      $('#days-home').val(1)
    }
    day = Number(day);
    var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

    Total = parseFloat(Total).toFixed(4);
    // Display the result in the result input box
    $('#total').val(Total);
}

//kitchen
function kitchen() {
  // Get the input values
  var num1 = $('#volt-kitchen').val();
  var num2 = $('#amp-kitchen').val();
  var num3 = $('#quantity-kitchen').val();
  var num4 = $('#usage-kitchen').val();

  // Convert the input string to numbers and multiply them
  var result1 = mul(num1,num2);
  var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-kitchen').val(result1);
  $('#units-kitchen').val(result2);
  unitkitchen();
}

function kitchen2() {
  // Get the input values
  var num1 = $('#volt-kitchen-2').val();
  var num2 = $('#amp-kitchen-2').val();
  var num3 = $('#quantity-kitchen-2').val();
  var num4 = $('#usage-kitchen-2').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-kitchen-2').val(result3);
  $('#units-kitchen-2').val(result4);
  unitkitchen();
}

function kitchen3() {
  // Get the input values
  var num1 = $('#volt-kitchen-3').val();
  var num2 = $('#amp-kitchen-3').val();
  var num3 = $('#quantity-kitchen-3').val();
  var num4 = $('#usage-kitchen-3').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-kitchen-3').val(result3);
  $('#units-kitchen-3').val(result4);
  unitkitchen();
}

function kitchen4() {
  // Get the input values
  var num1 = $('#volt-kitchen-4').val();
  var num2 = $('#amp-kitchen-4').val();
  var num3 = $('#quantity-kitchen-4').val();
  var num4 = $('#usage-kitchen-4').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-kitchen-4').val(result3);
  $('#units-kitchen-4').val(result4);
  unitkitchen();
}

function kitchen5() {
  // Get the input values
  var num1 = $('#volt-kitchen-5').val();
  var num2 = $('#amp-kitchen-5').val();
  var num3 = $('#quantity-kitchen-5').val();
  var num4 = $('#usage-kitchen-5').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-kitchen-5').val(result3);
  $('#units-kitchen-5').val(result4);
  unitkitchen();
}

function unitkitchen() {
   
  var num5 = Number($('#units-kitchen').val());
  var num6 = Number($('#units-kitchen-2').val());
  var num7 = Number($('#units-kitchen-3').val());
  var num8 = Number($('#units-kitchen-4').val());
  var num9 = Number($('#units-kitchen-5').val());

  var day = $('#days-kitchen').val();
  if (day === "Days") {
    day = 1;
  }
  day = Number(day);
  var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

  Total = parseFloat(Total).toFixed(4);
  // Display the result in the result input box
  $('#total-kitchen').val(Total);
}

//Light

function light() {
  // Get the input values
  var num1 = $('#volt-light').val();
  var num2 = $('#amp-light').val();
  var num3 = $('#quantity-light').val();
  var num4 = $('#usage-light').val();

  // Convert the input string to numbers and multiply them
  var result1 = mul(num1,num2);
  var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-light').val(result1);
  $('#units-light').val(result2);
  unitlight();
}

function light2() {
  // Get the input values
  var num1 = $('#volt-light-2').val();
  var num2 = $('#amp-light-2').val();
  var num3 = $('#quantity-light-2').val();
  var num4 = $('#usage-light-2').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-light-2').val(result3);
  $('#units-light-2').val(result4);
  unitlight();
}

function light3() {
  // Get the input values
  var num1 = $('#volt-light-3').val();
  var num2 = $('#amp-light-3').val();
  var num3 = $('#quantity-light-3').val();
  var num4 = $('#usage-light-3').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-light-3').val(result3);
  $('#units-light-3').val(result4);
  unitlight();
}

function light4() {
  // Get the input values
  var num1 = $('#volt-light-4').val();
  var num2 = $('#amp-light-4').val();
  var num3 = $('#quantity-light-4').val();
  var num4 = $('#usage-light-4').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-light-4').val(result3);
  $('#units-light-4').val(result4);
  unitlight();
}

function light5() {
  // Get the input values
  var num1 = $('#volt-light-5').val();
  var num2 = $('#amp-light-5').val();
  var num3 = $('#quantity-light-5').val();
  var num4 = $('#usage-light-5').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-light-5').val(result3);
  $('#units-light-5').val(result4);
  unitlight();
}

function unitlight() {
   
  var num5 = Number($('#units-light').val());
  var num6 = Number($('#units-light-2').val());
  var num7 = Number($('#units-light-3').val());
  var num8 = Number($('#units-light-4').val());
  var num9 = Number($('#units-light-5').val());

  var day = $('#days-light').val();
  if (day === "Days") {
    day = 1;
  }
  day = Number(day);
  var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

  Total = parseFloat(Total).toFixed(4);
  // Display the result in the result input box
  $('#total-light').val(Total);
}


// HC

function hc() {
  // Get the input values
  var num1 = $('#volt-hc').val();
  var num2 = $('#amp-hc').val();
  var num3 = $('#quantity-hc').val();
  var num4 = $('#usage-hc').val();

  // Convert the input string to numbers and multiply them
  var result1 = mul(num1,num2);
  var result2 = (parseFloat(result1)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-hc').val(result1);
  $('#units-hc').val(result2);
  unithc();
}

function hc2() {
  // Get the input values
  var num1 = $('#volt-hc-2').val();
  var num2 = $('#amp-hc-2').val();
  var num3 = $('#quantity-hc-2').val();
  var num4 = $('#usage-hc-2').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result inpuhc
  $('#watts-hc-2').val(result3);
  $('#units-hc-2').val(result4);
  unithc();
}

function hc3() {
  // Get the input values
  var num1 = $('#volt-hc-3').val();
  var num2 = $('#amp-hc-3').val();
  var num3 = $('#quantity-hc-3').val();
  var num4 = $('#usage-hc-3').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-hc-3').val(result3);
  $('#units-hc-3').val(result4);
  unithc();
}

function hc4() {
  // Get the input values
  var num1 = $('#volt-hc-4').val();
  var num2 = $('#amp-hc-4').val();
  var num3 = $('#quantity-hc-4').val();
  var num4 = $('#usage-hc-4').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-hc-4').val(result3);
  $('#units-hc-4').val(result4);
  unithc();
}

function hc5() {
  // Get the input values
  var num1 = $('#volt-hc-5').val();
  var num2 = $('#amp-hc-5').val();
  var num3 = $('#quantity-hc-5').val();
  var num4 = $('#usage-hc-5').val();

  // Convert the input string to numbers and multiply them
  var result3 = mul(num1,num2);
  var result4 = (parseFloat(result3)/1000) * mul(num3,num4);

  // Display the result in the result input box
  $('#watts-hc-5').val(result3);
  $('#units-hc-5').val(result4);
  unithc();
}

function unithc() {
   
  var num5 = Number($('#units-hc').val());
  var num6 = Number($('#units-hc-2').val());
  var num7 = Number($('#units-hc-3').val());
  var num8 = Number($('#units-hc-4').val());
  var num9 = Number($('#units-hc-5').val());

  var day = $('#days-hc').val();
  if (day === "Days") {
    day = 1;
  }
  day = Number(day);
  var Total = (parseFloat(num5) + parseFloat(num6) + parseFloat(num7) +  parseFloat(num8) +  parseFloat(num9)) * parseFloat(day) ;

  Total = parseFloat(Total).toFixed(4);
  // Display the result in the result input box
  $('#total-hc').val(Total);
}


