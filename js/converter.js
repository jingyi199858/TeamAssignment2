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