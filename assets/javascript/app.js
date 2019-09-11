let trivia = {
    q1 : {
        q: "Who invented the telephone?",
        a: ["Bell", "Ford", "Edison", "Tesla"],
        img: ["assets/images/6xeKN4f.lkxuSPAUtAFSvQ.jpg"]
        },
    q2 : {
        q: "What temperature does water boil at?",
        a: ["200C", "110C", "98C", "100C"],
        img: ["assets/images/61XqzjNioML._UX522_.jpg"]
        },
    q3 : {
        q: "Who discovered penicillin?",
        a: ["Einstein", "Freud", "Newman", "Fleming"],
        img: ["assets/images/fleming-5bb2394b46e0fb002604dbe0.jpg"]
         },
    q4 : {
        q: "Who wrote Julius Caesar, Macbeth and Hamlet?",
        a: ["Darwin", "Dekker", "Shakespeare", "Webster"],
        img: ["assets/images/giphy (1).gif"]
    }
},
chosenanswer = [],
correct = 0,
incorrect = 0,
unanswered,
triviaq = [trivia.q1.q, trivia.q2.q,trivia.q3.q,trivia.q4.q],
answers=[];
let answervalue,
imgvalue;
let num = 0;

let reset = function() {

}


$("#start").on("click",function() {

let gamePlay = function(){
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
  console.log(triviaq[num])
    if(num === 0) {
         answervalue = "Bell";
         imgvalue = trivia.q1.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q1.a[k])

    }
    }
    if(num === 1){
        answervalue = "100C";
        imgvalue = trivia.q2.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q2.a[k])

    }
    }
    if(num === 2) {
        answervalue = "Fleming";
        imgvalue = trivia.q3.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q3.a[k])

    }
    }
    if(num === 3) {
        answervalue = "Shakespeare";
        imgvalue = trivia.q4.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q4.a[k])
      
    }
    }



for(let i = 0; i < answers.length; i++) {
    
  let answerDiv = $("<button>");
  answerDiv.addClass("answers col-3 text-center");
  answerDiv.attr("id", answers[i])
  answerDiv.attr("value", answers[i])
  $("#answers").append(answerDiv)
  $("#"+answers[i]).text(answers[i])
}
}
gamePlay()
answerbtn()
   counter = setInterval(function() {
    if (count >= 0) {
      $("#timeLeft").text("Time Remaining: " + count);
    }
    if (count === 0) {
      //display an image 
      num++
    $("#question").text("Out of time!");
    $("#answers").html('<img id="img" width="200px" src="'+ imgvalue +'">')
    
setTimeout(() => {
    count = 29;
    answers = [];
    $("#img").remove()
    $("#question").text(triviaq[num]);
     if(num === 0) {
         answervalue = "Bell";
         imgvalue = trivia.q1.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q1.a[k])

    }
    }
    if(num === 1){
        answervalue = "100C";
        imgvalue = trivia.q2.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q2.a[k])

    }
    }
    if(num === 2) {
        answervalue = "Fleming";
        imgvalue = trivia.q3.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q3.a[k])

    }
    }
    if(num === 3) {
        answervalue = "Shakespeare";
        imgvalue = trivia.q4.img
        for(var k = 0; k < 4; k++) {
            answers.push(trivia.q4.a[k])
      
    }
    }

    for(let i = 0; i < answers.length; i++) {
        answerDiv = $("<button>");
        answerDiv.addClass("answers col-2 text-center");
        answerDiv.attr("id", answers[i])
        answerDiv.attr("value", answers[i])
        $("#answers").append(answerDiv)
        $("#"+answers[i]).text(answers[i])
      }
      answerbtn()
    console.log([num])
}, 3000);

    }

    count--;
  }, 1000);
});
let answerbtn = function() {
$(".answers").on("click",function(){
let val = this.value
if (val === answervalue) {
    clearInterval(counter)
    $("#question").text("Correct!");
    $("#answers").html('<img id="img" width="200px" src="'+ imgvalue +'">')
    setTimeout(() => {
        count = 29;
        answers = [];
        $("#img").remove()
        $("#question").text(triviaq[num]);
         if(num === 0) {
             answervalue = "Bell";
             imgvalue = trivia.q1.img
            for(var k = 0; k < 4; k++) {
                answers.push(trivia.q1.a[k])
    
        }
        }
        if(num === 1){
            answervalue = "100C";
            imgvalue = trivia.q2.img
            for(var k = 0; k < 4; k++) {
                answers.push(trivia.q2.a[k])
    
        }
        }
        if(num === 2) {
            answervalue = "Fleming";
            imgvalue = trivia.q3.img
            for(var k = 0; k < 4; k++) {
                answers.push(trivia.q3.a[k])
    
        }
        }
        if(num === 3) {
            answervalue = "Shakespeare";
            imgvalue = trivia.q4.img
            for(var k = 0; k < 4; k++) {
                answers.push(trivia.q4.a[k])
          
        }
        }
    
        for(let i = 0; i < answers.length; i++) {
            answerDiv = $("<button>");
            answerDiv.addClass("answers col-2 text-center");
            answerDiv.attr("id", answers[i])
            answerDiv.attr("value", answers[i])
            $("#answers").append(answerDiv)
            $("#"+answers[i]).text(answers[i])
          }
          answerbtn()
        console.log([num])
        if(num == 4) {
            alert("NUM IS EQUAL TO 4!!!!")
        }
    }, 3000);
    num++;
}

});
}


// to create this game I am going to need to organize a few ideas. 
// 1 idea is to identify and add certain variables. 
// 2 idea generate a question and answer list to show on the DOM.
// 3 idea create a function that will dynamically create divs and buttons pertaining to questions and answers.
// 4 idea is to create an onclick event that calls a function that creates divs and buttons. 
// 5 idea when an answer is clicked, check it against valid answer(this can be done by assigning an id of a number for idividual btn and matching to valid answer in an object, so if the correct answer is 4, and user clicked btn of id 1, then its wrong, if they match its right)

