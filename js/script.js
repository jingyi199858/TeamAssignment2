function getMyRates(jData) {
    if (jData == null) {
        alert("There was a problem parsing search results.");
        return;
    }
    var myval = jData.ResultSet;
    var mydiv = jData.xxMyDiv;
    document.getElementById(mydiv).innerHTML =  myval;
}

function myPrivateConverterMany() {
    var xxv = document.getElementById('xxvalue').value;
    var xxf = document.getElementById('xxfrom').value;
    var xxt = document.getElementById('xxto').value;
    if (xxv > 0) {
        getExchangeRatesDiv('xxrates',xxv,xxf,xxt,'true');
    }
}

$(function() {
    $('#profiletabs ul li a').on('click', function(e) {
        e.preventDefault();
        var newcontent = $(this).attr('href');
        $('#profiletabs ul li a').removeClass('sel');
        $(this).addClass('sel');
        $('#content section').each(function() {
            if (!$(this).hasClass('hidden')) {
                $(this).addClass('hidden');
            }
        });
        $(newcontent).removeClass('hidden');
    });
});

function submitFeedback() {
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var country = document.getElementById('country').value;
  var subject = document.getElementById('subject').value;

  console.log(`FROM: ${firstName} ${lastName} (${country})`)
  console.log(`SUBJECT: ${subject}`)
}
