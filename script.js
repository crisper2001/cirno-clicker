cirnos = 0;
autoBuyers = 0;
autoBuyersPrice = 50;
intervalId = 1000;

function buyCirno() {
    cirnos++;
    document.getElementById("cirnos").innerHTML = cirnos;
}

function buyAutoBuyer() {
    if (cirnos >= autoBuyersPrice) {
        cirnos -= autoBuyersPrice;
        autoBuyers++;
        autoBuyersPrice = Math.round(autoBuyersPrice * 1.5);
        setInterval(function() {
            buyCirno();
        }, 1000 / autoBuyers);
        document.getElementById("autobuyers").innerHTML = autoBuyers;
        document.getElementById("autobuyersprice").innerHTML = autoBuyersPrice;
    }
}

function buyAutoBuyerStatus() {
    if (cirnos >= autoBuyersPrice) {
        document.getElementById("autobuyer").disabled = false;
    } else {
        document.getElementById("autobuyer").disabled = true;
    }
}

setInterval(function() {
    buyAutoBuyerStatus();
}, 0);