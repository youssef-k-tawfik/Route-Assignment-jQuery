// ! Animating Nav Bar
const navWidth = $(".nav").innerWidth();
$(".nav").animate({ left: -navWidth }, 0);

$(".open-btn").on("click", function () {
  $(".nav").animate({ left: 0 }, 500);
  $("header .content > *").animate({ left: navWidth }, 500);
});

$("i.fa-xmark").on("click", function () {
  $(".nav").animate({ left: -navWidth }, 500);
  $("header .content > *").animate({ left: 0 }, 500);
});

// ! Accordion

$("#accordion p").slideUp(0);

$("#accordion h2").on("click", function () {
  const nextP = $(this).next();
  $(this).parent().children("p").not(nextP).slideUp();
  nextP.slideToggle();
});

// ! Countdown

// Assuming the event starts Nov 14, 2024 09:00
const eventDate = new Date(2024, 10, 14, 9);

const countInterval = setInterval(() => {
  const currentDate = new Date();
  let timeRemaining = eventDate - currentDate;

  // If event time passed
  if (timeRemaining < 0) {
    $("#countdown .row").html("<h2>Time's up!</h2>");
    clearInterval(countInterval);
  }

  let days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  timeRemaining -= days * 24 * 60 * 60 * 1000;

  let hours = Math.floor(timeRemaining / 1000 / 60 / 60);
  timeRemaining -= hours * 60 * 60 * 1000;

  let minutes = Math.floor(timeRemaining / 1000 / 60);
  timeRemaining -= minutes * 60 * 1000;

  let seconds = Math.floor(timeRemaining / 1000);

  // Setting values to html
  $("#days").text(`${days} D`);
  $("#hours").text(`${hours} H`);
  $("#minutes").text(`${minutes} m`);
  $("#seconds").text(`${seconds} s`);
}, 1000);

// ! Textarea 100 characters limit

$("textarea").on("input", function () {
  const inputLength = this.value.length;
  console.log(inputLength);
  let remainingCharacters = 100 - inputLength;
  if (inputLength >= 100) {
    remainingCharacters = 0;
    this.value = this.value.slice(0, 100);
    $("#limit").removeClass("d-none");
  } else {
    $("#limit").addClass("d-none");
  }
  $("#remainingCharacters").text(remainingCharacters);
});
