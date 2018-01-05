// This is a quote rotator using JavaScript, jQuery, and CSS.  It was an assignment from freecodecamp.org.
// Created by Steve Hanlon Dec. 2017


// Quote storage banks to populate quoteStage array
const quoteStorage = {
  philosophers: [
    "With good will for the entire cosmos,<br> cultivate a limitless heart:<br> Above, below, & all around, unobstructed,<br> without hostility or hate.<br><span>&mdash;Buddha</span>",
    "Don't cry because it's over, smile because it happened<br><span>&mdash;Dr. Suess</span>",
    "Be yourself, everyone else is already taken.<br><span>&mdash;Oscar Wilde</span>",
    "In three words I can sum up everything about life: it goes on.<br><span>&mdash;Robert Frost</span>",
    "If you tell the truth, you don't have to remember anything.<br><span>&mdash;Mark Twain</span>",
    "Without music, life would be a mistake.<br><span>&mdash;Friedrich Nietzsche</span>",
    "It is not a lack of love, but a lack of friendship that makes unhappy marriages.<br><span>&mdash;Friedrich Nietzsche</span>",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.<br><span>&mdash;Lao Tzu</span>",
    "Wise men speak because they have something to say; Fools because they have to say something.<br><span>&mdash;Plato</span>",
    "It is the mark of an educated mind to be able to entertain a thought without accepting it.<br><span>&mdash;Aristotle</span>",
    "A wise man proportions his belief to the evidence.<br><span>&mdash;David Hume</span>"
  ],

  musicians: [
    "Never play anything the same way twice.<br><span>&mdash;Louis Armstrong</span>",
    "Everything I've ever done was out of fear of being mediocre.<br><span>&mdash;Chet Baker</span>",
    "Be grateful for luck. Pay the thunder no mind.<br><span>&mdash;Eubie Blake</span>",
    "People will hire you and then tell you not to do what you were doing when they heard you.<br><span>&mdash;Art Blakey</span>",
    "Don't be a perfectionist... leave that to the classical musicians.<br><span>&mdash;Dave Brubeck</span>",
    "The human being receives the pleasure from music, not from the argument over what it is.<br><span>&mdash;Ornette Coleman</span>",
    "Musicians want to be the loud voice for so many quiet hearts.<br><span>&mdash;Billy Joel</span>",
    "All musicians are subconsciously mathematicians.<br><span>&mdash;Thelonius Monk</span>",
    "One good thing about music, when it hits you, you feel no pain.<br><span>&mdash;Bob Marley</span>",
    "Music is a safe kind of high.<br><span>&mdash;Jimi Hendrix</span>"
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

// STAGED quote bank which is picked from when Quote button is clicked
const quoteStage = [];

// FILLS UP quoteStage array
const fillquoteStage = (quoteGroup) => {
  quoteGroup.map(quote => quoteStage.push(quote));
  // console.log(quoteStage);
}

// EMPTIES quoteStage
const clearquoteStage = () => {
  while(quoteStage.length > 0) {
    quoteStage.pop();
    console.log(quoteStage);
  }
}

// SELECTS a quote array to populate empty const quoteStage array
$('#quoteSelector').on('change', function(event) {
  event.preventDefault();
  if (quoteStage.length > 0) {
    clearquoteStage();
  }
  // Access quotes from quoteStorge object through selecting a key
  const key = event.target.value;
  const addNewQuotes = quoteStorage[key];
  // Move those quotes to the quoteStage array
  fillquoteStage(addNewQuotes);
});

// CLICK 'Quote' button to pick a random number
$('#clicker').on('click', function() {
  let onStage = randomPick(quoteStage);
});

// PICK RANDOM index number to show random quote from const quoteStage
const randomPick = (quoteStageGroup) => {
  // If quoteStage is empty, refill it again with current selected category of quotes
  if (quoteStageGroup.length === 0) {
    let refill = $('#quoteSelector').val();
    fillquoteStage(quoteStorage[refill]);
  } else {
    // Generate random number which allow accessing quote array by index number
    const indexPick = Math.floor(Math.random() * quoteStageGroup.length);
    const quotePick = quoteStageGroup[indexPick];
    showQuote(quotePick, indexPick);
  }
}

// SHOW quote on the DOM
const showQuote = (quotePicked, quoteIndex) => {
  let onStage = quotePicked;
  $('#root').html('<div class="quoteBank">' + '<p class="quoteText">' + onStage + '</p>' + '</div>');
  // Remove quote from quoteStage array
  quoteStage.splice(quoteIndex, 1);
}

// EMAIL Button
function mailQuote() {
  $('#email').on('click', function(event) {
    event.preventDefault();
    // Store quote then pass it to mail client
    const getQuote = $('.quoteText').text();
    window.location.href = `mailto:YourFriend?subject=Check%20Out%20This%20Quote&body=${getQuote}`;
  });
}

// TIMER Slider for quote machine to run automatically
let timer = null; // Global variable so clearInterval will work with setInterval
$('#timerSwitch').on('change', function() {
  if ($(this).is(':checked')) {
    timer = setInterval(randomPick, 5000, quoteStage);
    console.log('Timer is on.');
  }
  else if (!$(this).is(':checked')) {
    clearInterval(timer);
    console.log('Timer is off.');
  }
});

// OPENING INSTRUCTIONS on how to use the quote machine
(function openInstructions() {
  const instructions = "Pick a Category <br>Click the Quote button <br>or use the Timer.";
  $("#root").html(
    '<div class="quoteBank">' + '<p class="quoteText">' + instructions + "</p>" + "</div>"
  );
})();
