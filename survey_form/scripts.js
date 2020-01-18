const hand = document.querySelector('#icon-cont');
const form = document.querySelector('#survey-form');
const formCont = document.querySelector('#form-cont');
const thankYou = document.querySelector('#thank-you-cont');

const toggleFadeThankYou = () => {
  thankYou.classList.toggle('fadeIn');
}

const toggleFadeForm = () => {
  formCont.classList.toggle('fadeOut');
}

const playGtrAudio = () => {
  let gtrRiff = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/504854/gtr_rock_camp.mp3");
  gtrRiff.play()
}

const playVoxAudio = (e) => {
  e.preventDefault();
  let voxRiff = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/504854/vocal_rock_camp.mp3");
  voxRiff.play();
}


hand.addEventListener('click', playGtrAudio);
form.addEventListener('submit', (e) => {
  playVoxAudio(e);
  toggleFadeForm();
  toggleFadeThankYou();
  // empties form fields
  form.reset();
  // toggles back to showing form
  setTimeout(toggleFadeForm, 4000);
  // toggles back to hiding Thank you msg
  setTimeout(toggleFadeThankYou, 4000)
});
