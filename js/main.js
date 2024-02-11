var quotes = [{
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    writer: "― Marilyn Monroe ―"
},
{
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    writer: "― Albert Einstein ―"
},
{
    quote: "So many books, so little time.",
    writer: "― Frank Zappa ―"
}, {
    quote: "A room without books is like a body without a soul.",
    writer: "― Marcus Tullius Cicero ―"
},
{
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    writer: "― Bernard M. Baruch ―"
},
{
    quote: "You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth",
    writer: "― William W. Purkey ―"
}

];

var btn = document.getElementById("quote-btn");
var quote_1 = document.getElementById("quote_1");
var writer_1 = document.getElementById("quotes-writer");
var btnVoice= document.getElementById("btn-voices");

var randomizeQuotes;
var emptyArray = [];
function quotesGenerator() {
    // randomizeQuotes = Math.floor(Math.random() * quotes.length);
    // writer_1.innerHTML = quotes[randomizeQuotes].writer;
    // quote_1.innerHTML = quotes[randomizeQuotes].quote;
    randomizeQuotes = Math.floor(Math.random() * quotes.length);
        if(emptyArray.length === 0){
            quote_1.innerHTML = quotes[randomizeQuotes].quote;
            writer_1.innerHTML = quotes[randomizeQuotes].writer;
            emptyArray.push(randomizeQuotes);
            console.log(emptyArray,"a");
        }else {
            if(emptyArray.includes(randomizeQuotes) === true){
                quotesGenerator();
                console.log(emptyArray.includes(randomizeQuotes),"b");
            }
            else {
                quote_1.innerHTML = quotes[randomizeQuotes].quote;
                writer_1.innerHTML = quotes[randomizeQuotes].writer;
                emptyArray.push(randomizeQuotes);
                console.log(emptyArray,"c");
                //  quotesGenerator();
            };
        }
        if(emptyArray.length ===quotes.length){
            emptyArray = [];
            console.log(emptyArray,"d");
        };
        };
    
    

function txtToVoice() {
    var quotesVoice = new SpeechSynthesisUtterance(quotes[randomizeQuotes].quote);
speechSynthesis.speak(quotesVoice);
    var writerVoice = new SpeechSynthesisUtterance(quotes[randomizeQuotes].writer);
speechSynthesis.speak(writerVoice);
};
