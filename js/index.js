var rolex = document.getElementById("rolex-div");
var autodromo = document.getElementById("autodromo-div");
var swatch = document.getElementById("swatch-div");
var ripcurl = document.getElementById("ripcurl-div");
var cartier = document.getElementById("cartier-div");
var gShock = document.getElementById("g-shock-div");



$(document).ready(function() {

    console.log("Document Ready");
});



//This is for adding a style for each client 
//Mouseover and Mouseout events
//rolex
rolex.addEventListener('mouseover', function() {
    rolex.style.background = "lightgray";
});

rolex.addEventListener('mouseout', function() {
    rolex.style.background = "none";
});

//autodromo
autodromo.addEventListener('mouseover', function() {
    autodromo.style.background = "lightgray";
});

autodromo.addEventListener('mouseout', function() {
    autodromo.style.background = "none";
});


//swatch
swatch.addEventListener('mouseover', function() {
    swatch.style.background = "lightgray";
});

swatch.addEventListener('mouseout', function() {
    swatch.style.background = "none";
});

//ripcurl
ripcurl.addEventListener('mouseover', function() {
    ripcurl.style.background = "lightgray";
});

ripcurl.addEventListener('mouseout', function() {
    ripcurl.style.background = "none";
});

//g-shock
gShock.addEventListener('mouseover', function() {
    gShock.style.background = "lightgray";
});

gShock.addEventListener('mouseout', function() {
    gShock.style.background = "none";
});


//cartier
cartier.addEventListener('mouseover', function() {
    cartier.style.background = "lightgray";
});

cartier.addEventListener('mouseout', function() {
    cartier.style.background = "none";
});


//enable on click to href to the client web site
//Clients click events 

//Rolex
rolex.addEventListener("click", function() {

    var modal = $('#rolexModal').modal('show');
    rolexLinkBtn = document.getElementById('rolexLink');
    rolexLinkBtn.addEventListener('click', function() {
        location.href = "https://www.rolex.com/en";
    });
    console.log("Rolex");

});

//Autodromo
autodromo.addEventListener("click", function() {
    var modal = $('#autodromoModal').modal('show');
    var autodromoLinkBtn = document.getElementById('autodromoLink');
    autodromoLinkBtn.addEventListener('click', function() {
        location.href = "https://www.autodromo.com/watches/";
    })
    console.log('Autodromo');
});

//Ripcurl
ripcurl.addEventListener("click", function() {
    // calling the modal using Jquery
    $('#ripcurlModal').modal('show');
    //Define the modal button
    var ripcurlLinkBtn = document.getElementById('ripcurlLink');
    //create Event listener for the button to move for the website.
    ripcurlLinkBtn.addEventListener('click', function() {
        // code for moving for the website
        location.href = "https://www.ripcurl.com/us/";
    });
    console.log("Ripcurl");
});

//G-SHOCK
gShock.addEventListener("click", function() {
    //calling the modal using Jquery
    $('#gShockModal').modal('show');
    //Define the modal button
    var gShockBtnLink = document.getElementById('gShockLink');
    //create Event listener for the button to move for the website.
    gShockBtnLink.addEventListener('click', function() {
        // code for moving for the website
        location.href = "https://www.gshock.com/";
    });
    console.log("G-SHOCK");
});


//Swatch

swatch.addEventListener('click', function() {
        //calling the modal using Jquery
        $('#swatchModal').modal('show');
        //Define the modal button
        var swatchBtnLink = document.getElementById('swatchLink');
        //create Event listener for the button to move for the website.
        swatchBtnLink.addEventListener('click', function() {
            // code for moving for the website
            location.href = "https://www.swatch.com/en_us/";
        })
        console.log("Swatch");
    })
    // swatch.addEventListener("click", function() {

// });

//Cartier
cartier.addEventListener("click", function() {
    //calling the modal using Jquery
    $('#cartierModal').modal('show');
    //Define the modal button
    var cartierBtnLink = document.getElementById('cartierLink');
    //create Event listener for the button to move for the website.
    cartierBtnLink.addEventListener('click', function() {
        // code for moving for the website
        location.href = "https://www.cartier.com/";
    });
    console.log("Cartier");
});