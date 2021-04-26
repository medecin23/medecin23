/*global console, alert*/

function nonyet() {
    "use strict";

    alert("Cette fonction n'est pas encore disponible");
}

var quote = [
    "“The only thing that comes to a sleeping man is dreams.”",
    "“Nothing can stop me but loss of breath and I’m still breathing so it’s still on.”",
    "“Even the genius ask questions.”",
    "“Sky’s the limit.”",
    "“All we had to do was follow the dammn Train! CJ!!”",
    "“Grove Street OG's come to do damage”",
    "“Your body is your mind”",
    "“If you do not go to the end, why start?”"
];
var randomquotes = quote[Math.floor(Math.random() * quote.length)];

function motiv() {
    alert(randomquotes);
}