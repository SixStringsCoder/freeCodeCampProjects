// import { quoteBank } from './daily_words.one_loop/';


// Storage banks to populate quoteBank once it's empty
const quoteStorage = {
  philosophers: [
    "With good will for the entire cosmos,<br> cultivate a limitless heart:<br> Above, below, & all around, unobstructed,<br> without hostility or hate.<br><span>&mdash;Buddha</span>",
    "Don't cry because it's over, smile because it happened<br><span>&mdash;Dr. Suess</span>",
    "Be yourself, everyone else is already taken.<br><span>&mdash;Oscar Wilde</span>",
    "In three words I can sum up everything about life: it goes on.<br><span>&mdash;Robert Frost</span>",
    "If you tell the truth, you don't have to remember anything.<br><span>&mdash;Mark Twain</span>",
    "Without music, life would be a mistake.<br><span>&mdash;Friedrich Nietzsche</span>"
  ],

  musicians: [
    "Never play anything the same way twice.<br><span>&mdash;Louis Armstrong</span>",
    "Everything I've ever done was out of fear of being mediocre.<br><span>&mdash;Chet Baker</span>",
    "Be grateful for luck. Pay the thunder no mind.<br><span>&mdash;Eubie Blake</span>",
    "People will hire you and then tell you not to do what you were doing when they heard you.<br><span>&mdash;Art Blakey</span>",
    "Don't be a perfectionist... leave that to the classical musicians.<br><span>&mdash;Dave Brubeck</span>",
    "The human being receives the pleasure from music, not from the argument over what it is.<br><span>&mdash;Ornette Coleman</span>"
  ],

  scientists: [
    "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. <br><span>&mdash;Isaac Asimov</span>",
    "Somewhere, something incredible is waiting to be known.<br><span>&mdash;Carl Sagan</span>",
    "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.<br><span>&mdash;Stephen Hawking</span>",
    "An expert is a person who has made all the mistakes that can be made in a very narrow field.”<br><span>&mdash;Niels Bohr</span>",
    "That which can be asserted without evidence, can be dismissed without evidence.<br><span>&mdash;Christopher Hitchens</span>",
    "A man who dares to waste one hour of time has not discovered the value of life.<br><span>&mdash;Charles Darwin</span>"
  ],
}
// "Staged" quote bank picked from when Random button is clicked
const quoteStage = [];

// Fills up quoteStage
const fillquoteStage = (quoteGroup) => {
  quoteGroup.map(quote => quoteStage.push(quote));
  console.log(quoteStage);
}

// Empties quoteStage
const clearquoteStage = () => {
  while(quoteStage.length > 0) {
    quoteStage.pop();
    console.log(quoteStage);
  }
}

// Select a quote bank to populate empty array quoteStage
$('#quoteSelector').on('change', function(event) {
  event.preventDefault();
  if (quoteStage.length > 0) {
    clearquoteStage();
  }
  // Access quotes from quoteStorge object through selecting a key
  let key = event.target.value;
  let addNewQuotes = quoteStorage[key];
  // Move those quotes to the quoteStage
  fillquoteStage(addNewQuotes);
  console.log(event.target.value);
});


// Uses 'Random' button to advance to next random quote
$('#clicker').on('click', function() {
  let onScreen = randomPick(quoteStage);
  $('#root').html('<div class="quoteBank">' + '<p class="quoteText">' + onScreen + '</p>' + '</div>');
});

// Pick random index number to show random quote from quote bank
const randomPick = (group) => {
  const indexPick = Math.floor(Math.random() * group.length);
    const quotePick = group[indexPick];

    // Remove quote from quoteStage
    quoteStage.splice(indexPick, 1);
      console.log(`The quote is: ${quotePick}`);
      console.log(quoteStage);

    // Once quoteStage is empty, move all storageQuotes to quoteStage to refill it
    if (quoteStage.length === 0) {
        philosophers.map(quote => quoteStage.push(quote));
    }

    // Returns quote from quoteStage
    return quotePick;
} // end of randomPick


// Timed showings of the quotes; nestled in an IIFE to start immediately
function start() {
  let onScreen = randomPick(quoteStage);
  $('#root').html('<div class="quoteBank">' + '<p class="quoteText">' + onScreen + '</p>' + '</div>');

  // Shows following quotes after time indicated
  setInterval(start, 5000);
};
