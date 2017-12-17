// import { quoteBank } from './daily_words.one_loop/';


// Storage bank to replenish Quote Bank once it's empty
const storageBank = [
  "With good will for the entire cosmos,<br> cultivate a limitless heart:<br> Above, below, & all around, unobstructed,<br> without hostility or hate.<br><span>&mdash;Buddha</span>",
  "Don't cry because it's over, smile because it happened<br><span>&mdash;Dr. Suess</span>",
  "Be yourself, everyone else is already taken.<br><span>&mdash;Oscar Wilde</span>",
  "In three words I can sum up everything about life: it goes on.<br><span>&mdash;Robert Frost</span>",
  "If you tell the truth, you don't have to remember anything.<br><span>&mdash;Mark Twain</span>",
  "Without music, life would be a mistake.<br><span>&mdash;Friedrich Nietzsche</span>"
  ];


// Quote bank that functions below pick from
const quoteBank = [
  "With good will for the entire cosmos,<br> cultivate a limitless heart:<br> Above, below, & all around, unobstructed,<br> without hostility or hate.<br><span>&mdash;Buddha</span>",
  "Don't cry because it's over, smile because it happened<br><span>&mdash;Dr. Suess</span>",
  "Be yourself, everyone else is already taken.<br><span>&mdash;Oscar Wilde</span>",
  "In three words I can sum up everything about life: it goes on.<br><span>&mdash;Robert Frost</span>",
  "If you tell the truth, you don't have to remember anything.<br><span>&mdash;Mark Twain</span>",
  "Without music, life would be a mistake.<br><span>&mdash;Friedrich Nietzsche</span>"
  ];


// Uses 'Random' button to advance to next random quote
$('#clicker').on('click', function() {
  let onScreen = randomPick(quoteBank);
  $('#root').html('<div class="quoteBank">' + '<p class="quoteText">' + onScreen + '</p>' + '</div>');
});

// Pick random index number to show random quote from quote bank
const randomPick = (group) => {
  const indexPick = Math.floor(Math.random() * group.length);
    const quotePick = group[indexPick];

    // Remove quote from quoteBank
    quoteBank.splice(indexPick, 1);
      console.log(`The quote is: ${quotePick}`); 
      console.log(quoteBank);

    // Once quoteBank is empty, move all storageQuotes to quoteBank  
    if (quoteBank.length === 0) {
       storageBank.map(quote => quoteBank.push(quote));
    }  
       
    // Returns quote from quoteBank
    return quotePick;

} // end of randomPick


// Timed showings of the quotes; nestled in an IIFE to start immediately
(function start() {
  let onScreen = randomPick(quoteBank);
  $('#root').html('<div class="quoteBank">' + '<p class="quoteText">' + onScreen + '</p>' + '</div>');

  // Shows following quotes after time indicated
  setInterval(start, 5000);
}());







