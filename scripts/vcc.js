var meet = [
    'https://meet.google.com/ogp-urbq-hzc',
    'https://meet.google.com/ogp-urbq-hzc',
    'https://meet.google.com/ogp-urbq-hzc',
    'https://meet.google.com/ogp-urbq-hzc',
    'https://meet.google.com/ogp-urbq-hzc'
];

var m = Math.floor(Math.random()*5);
               
    var meet_link = meet[m];

document.getElementById("mybtn").onclick = function() 
{
    var a = document.forms["details"]["contact"].value.length;
    if( a <= 9){
        alert("Enter the details")
    }
    else{
        document.getElementsByName('link')[0].value = meet_link;
    }
}


