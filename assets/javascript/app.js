$(document).ready(function(){
let trivia = {
    q1: {
      q: "Who invented the telephone?",
      a: ["Bell", "Ford", "Edison", "Tesla"],
      img: ["assets/images/6xeKN4f.lkxuSPAUtAFSvQ.jpg"]
    },
    q2: {
      q: "What temperature does water boil at?",
      a: ["200C", "110C", "98C", "100C"],
      img: ["assets/images/61XqzjNioML._UX522_.jpg"]
    },
    q3: {
      q: "Who discovered penicillin?",
      a: ["Einstein", "Freud", "Newman", "Fleming"],
      img: ["assets/images/fleming-5bb2394b46e0fb002604dbe0.jpg"]
    },
    q4: {
      q: "Who wrote Julius Caesar, Macbeth and Hamlet?",
      a: ["Darwin", "Dekker", "Shakespeare", "Webster"],
      img: ["assets/images/giphy (1).gif"]
    },
    q5: {
      q: "What does the roman numeral C represent?",
      a: ["1", "10", "100", "200"],
      img: ["assets/images/100.jpeg"]
    }
  },
  chosenanswer = [],
  correct = 0,
  incorrect = 0,
  unanswered = 0,
  triviaq = [trivia.q1.q, trivia.q2.q, trivia.q3.q, trivia.q4.q, trivia.q5.q],
  answers = [];
let answervalue, imgvalue;
let num = 0;
let restart = function() {
  correct = 0,
  incorrect = 0,
  unanswered = 0,
  num = 0;
  answers = [];
  let restart = $("<button>")
  restart.attr("id", "restart")
  restart.addClass("col-3")
  $("#answers").append(restart);
  restart.text("Restart")
  $("#restart").click(function(){
    restart.remove()
    $("#timeLeft").text("")
    $("#question").text("")
    $("#answers").text("")
    let button = $("<button>")
    button.addClass("col-3")
    button.attr("id", "start")
    button.text("start")
    $(".row").append(button);


    $("#start").on("click", function() {
      clearInterval(counter)
      let gamePlay = function() {
        count = 29;
        let timeLeft = $("<div>");
        timeLeft.addClass("col-12 mt-5 text-center question");
        timeLeft.attr("id", "timeLeft");
        $("#timeLeft").append(timeLeft);
        $("#start").remove();
        $("#timeLeft").text("Time Remaining: 30");
        let question = $("<div>");
        question.attr("id", "question");
        $("#question").append(question);
        $("#question").text(triviaq[num]);
        setvalues();
        for (let i = 0; i < answers.length; i++) {
          let answerDiv = $("<button>");
          answerDiv.addClass("answers col-3 text-center");
          answerDiv.attr("id", answers[i]);
          answerDiv.attr("value", answers[i]);
          $("#answers").append(answerDiv);
          $("#" + answers[i]).text(answers[i]);
        }
      };
      gamePlay();
      answerbtn();
      counter = setInterval(function() {
        if (count >= 0) {
          $("#timeLeft").text("Time Remaining: " + count);
        }
        if (count === 0) {
          unanswered++;
          clearInterval(counter);
          $("#question").text("Out of time!");
          $("#answers").html(
            '<p id="ptag">The correct answer is:' +
              " " +
              answervalue +
              " </p>" +
              '<img id="img" width="300px" src="' +
              imgvalue +
              '">'
          );
          if (num === 5) {
            $("#question").text("Out of time!");
            $("#answers").html(
              '<p id="ptag">The correct answer is:' +
                " " +
                answervalue +
                " </p>" +
                '<img id="img" width="300px" src="' +
                imgvalue +
                '">'
            );
          }
          num++;
          if (num < 5) {
            reset();
          } else {
            el();
          }
        }
        count--;
      }, 1000);
    });

  })
}
let el = function() {
  $("#question").text("All done, heres how you did!");
  $("#answers").html(
    " </p>" +
      "<p>Correct Answers: " +
      correct +
      "</p>" +
      "<p>Incorrect Answers: " +
      incorrect +
      "</p>" +
      "<p>Unanswered: " +
      unanswered +
      "</p>"
  );
    restart()
};
let reset = function() {
  clearInterval(counter);
  setTimeout(() => {
    if (num >= 5) {
      setTimeout(() => {
        el();
      }, 1000);
    } else {
      count = 30;
      counter = setInterval(function() {
        if (count >= 0) {
          $("#timeLeft").text("Time Remaining: " + count);
        }
        if (count === 0) {
          //display an image
          unanswered++;
          $("#question").text("Out of time!");
          $("#answers").html('<p id="ptag">The correct answer is:' +
          " " +
          answervalue +
          " </p>" +
          '<img id="img" width="300px" src="' +
          imgvalue +
          '">'
          );
          num++;
          if (num < 5) {
            reset();
          } else {
            el();
          }
        }
        count--;
      }, 1000);
    }
  }, 2000);
  setTimeout(() => {
    $("#ptag").text("");
    answers = [];
    $("#img").remove();
    $("#question").text(triviaq[num]);
    setvalues();
    for (let i = 0; i < answers.length; i++) {
      answerDiv = $("<button>");
      answerDiv.addClass("answers col-3 text-center");
      answerDiv.attr("id", answers[i]);
      answerDiv.attr("value", answers[i]);
      $("#answers").append(answerDiv);
      $("#" + answers[i]).text(answers[i]);
    }
    answerbtn();
  }, 3000);
};
let setvalues = function() {
  if (num === 0) {
    answervalue = "Bell";
    imgvalue = trivia.q1.img;
    for (var k = 0; k < 4; k++) {
      answers.push(trivia.q1.a[k]);
    }
  }
  if (num === 1) {
    answervalue = "100C";
    imgvalue = trivia.q2.img;
    for (var k = 0; k < 4; k++) {
      answers.push(trivia.q2.a[k]);
    }
  }
  if (num === 2) {
    answervalue = "Fleming";
    imgvalue = trivia.q3.img;
    for (var k = 0; k < 4; k++) {
      answers.push(trivia.q3.a[k]);
    }
  }
  if (num === 3) {
    answervalue = "Shakespeare";
    imgvalue = trivia.q4.img;
    for (var k = 0; k < 4; k++) {
      answers.push(trivia.q4.a[k]);
    }
  }
  if (num === 4) {
    answervalue = "100";
    imgvalue = trivia.q5.img;
    for (var k = 0; k < 4; k++) {
      answers.push(trivia.q5.a[k]);
    }
  }
};
$("#start").on("click", function() {
  let gamePlay = function() {
    count = 29;
    let timeLeft = $("<div>");
    timeLeft.addClass("col-12 mt-5 text-center question");
    timeLeft.attr("id", "timeLeft");
    $("#timeLeft").append(timeLeft);
    $("#start").remove();
    $("#timeLeft").text("Time Remaining: 30");
    let question = $("<div>");
    question.attr("id", "question");
    $("#question").append(question);
    $("#question").text(triviaq[num]);
    setvalues();
    for (let i = 0; i < answers.length; i++) {
      let answerDiv = $("<button>");
      answerDiv.addClass("answers col-3 text-center");
      answerDiv.attr("id", answers[i]);
      answerDiv.attr("value", answers[i]);
      $("#answers").append(answerDiv);
      $("#" + answers[i]).text(answers[i]);
    }
  };
  gamePlay();
  answerbtn();
  counter = setInterval(function() {
    if (count >= 0) {
      $("#timeLeft").text("Time Remaining: " + count);
    }
    if (count === 0) {
      unanswered++;
      clearInterval(counter);
      $("#question").text("Out of time!");
      $("#answers").html(
        '<p id="ptag">The correct answer is:' +
          " " +
          answervalue +
          " </p>" +
          '<img id="img" width="300px" src="' +
          imgvalue +
          '">'
      );
      if (num === 5) {
        $("#question").text("Out of time!");
        $("#answers").html(
          '<p id="ptag">The correct answer is:' +
            " " +
            answervalue +
            " </p>" +
            '<img id="img" width="300px" src="' +
            imgvalue +
            '">'
        );
      }
      num++;
      if (num < 5) {
        reset();
      } else {
        el();
      }
    }
    count--;
  }, 1000);
});
let answerbtn = function() {
  $(".answers").on("click", function() {
    let val = this.value;
    if (val === answervalue) {
      correct++;
      clearInterval(counter);
      $("#question").text("Correct!");
      $("#answers").html(
        '<p id="ptag">The answer is:' +
          " " +
          answervalue +
          " </p>" +
          '<img id="img" width="300px" src="' +
          imgvalue +
          '">'
      );
      num++;
      if (num <= 5) {
        reset();
      } else {
        el();
      }
    } else {
      incorrect++;
      clearInterval(counter);
      $("#answers").text("");
      $("#question").text("Nope!");
      $("#answers").html(
        '<p id="ptag">The correct answer is:' +
          " " +
          answervalue +
          " </p>" +
          '<img id="img" width="300px" src="' +
          imgvalue +
          '">'
      );
      num++;
      if (num < 6) {
        reset();
      } else {
        el();
      }
    }
  });
};
});