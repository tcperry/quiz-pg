$(document).ready(function () {

    $('form').submit(function (e) {
        e.preventDefault();
    });
		
	showQuestion();
	
	
    
   
    
    /*$('li input[type=radio]').click(function () {
        $('input[type=submit]').prop('disabled', false);
    });
	
	
	$('#question-holder input[type=submit]').click(function () {
        $('#question1').remove();
		generateQuestions("#question2");
		getAnswer("question1");
    });
	
	    $('#question-holder input[type=submit]').click(function () {
        //$('#q2').addClass('hidden');
        generateQuestions("#question3");
        getAnswer("question2");
    });

    $('#question-holder input[type=submit]').click(function () {
        //$('#q3').addClass('hidden');
        generateQuestions("#q4");
        getAnswer("question3");
    });

    $('#question-holder input[type=submit]').click(function () {
        //$('#q4').addClass('hidden');
        generateQuestions("#question5");
        getAnswer("question4");
    });

    $('#question-holder input[type=submit]').click(function () {
        //$('#q5').addClass('hidden');
        getAnswer("question5");
        showScore();
    });*/

}); //end document.ready

    questionNum = 0;
    score = 0;

// Load questions to page
function showQuestion() {

//$q = $(t).html();
//($t).removeClass('hidden');
//$('#question-holder').append("<br/>" + $q);
//questionNum++;
//$q.appendTo('#question-holder');

$('#question-holder').append('<h5>' + questions[questionNum].question + '</h5>').fadeIn('fast');

var write = "";
var opt = questions[questionNum].options;
for (var j = 0; j < opt.length; j++) {
    write += "<li><input type='radio' name='choices' class='choices' value=" +(j)+ ">" + opt[j]+ "</li><br/>";
}
$("#question-holder").append(write + "<br/><input type='submit' value='Submit' class='fancy'/>").fadeIn('fast');

getAnswer();
}


/*I NEVER NEEDED SWITCH STATEMENT OR THAT I = ARGUMENTS[0] STATEMENT BECAUSE EACH TIME THE GETANSWER FUNCTION IS CALLED FOR A SPECIFIC QUESTION, ALL THE CODE - GETTING BY FORM ID, LOOPING THROUGH RADIO BUTTONS, ONLY APPLIES TO THAT CURRENT SPECIFIC QUESTION, SO I DON'T HAVE TO WORRY ABOUT SPECIFYING THE QUESTION NUMBER IN THE CODE*/

function getAnswer() {	 
	 /*var questionform = document.getElementById(i);
    for (var index = 0; index < questionform.choices.length; index++){
    if (questionform.choices[index].checked) {
       selection = questionform.choices[index].value;
       break;
       } //end if statement
      } //end for loop*/
	 
   $('input[type=submit]').click(function() {
   if($("input[type='radio'][name='choices']").is(':checked')) {
    selection = $("input[type='radio'][name='choices']:checked").val();
	    
		
	if (questions[questionNum].options[selection] ==  questions[questionNum].options[questions[questionNum].correct])
	//if (selection ==  questions[questionNum].options['correct'])
        score += 1;
		
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		$('#question-holder').empty()//this keeps the questions from shifting down


		
	if (questionNum !=4) {
	questionNum++;//THE "COUNTER" VARIABLE GETS INCREMENTED
	showQuestion();
	}
	else {
	  showScore();}
    
	/*console.log(i,selection,questions[questionNum].correct, questions[questionNum].options[questions[questionNum].correct], score);*/
    
	//nextQuestion();
	
	}
 });
} //end getAnswer function

/*function nextQuestion() {
 	$("#question-holder input[type=submit]").click(function() {
		$('h5').remove();
		$('li').remove();
		$('input[type=submit]').remove();
		
	if (questionNum !=4) {
	questionNum++;//THE "COUNTER" VARIABLE GETS INCREMENTED
	showQuestion();
	}
	else {
	  showScore();}
	});
}*/

/*THIS SHOWSCORE FUNCTION GETS CALLED AFTER ANSWERING QUESTION 5 AND AFTER CALLING GETANSWER FOR QUESTION 5 IN JQUERY SECTION*/
function showScore() {
    document.getElementById("overallscore").innerHTML = "<p>Your overall score is " + score + " out of 5.</p>";
}

/*THE PROJECT INSTRUCTIONS SAY THAT EACH QUESTION SHOULD BE STORED AS A JAVASCRIPT OBJECT AND TO STORE LIST OF QUESTIONS IN AN ARRAY, SO I JUST FOLLOWED THE EXAMPLE EXACTLY*/


    questions = [

    //question 1
    {
            question: "1 of 5: Who was the first president of the United States?",
            options: ["George Washington", "John Quincy Adams", "Andrew Jackson"],
            correct: 0
        },
        {
            question: "2 of 5: Which president signed the Emancipation Proclamation?",
            options: ["Abraham Lincoln", "Ulysses S. Grant", "Herbert Hoover"],
            correct: 0
        },
        {
            question: "3 of 5: Who was the first Catholic president of the United States?",
            options: ["John F. Kennedy", "Woodrow Wilson", "Ronald Reagan"],
            correct: 0
        },
        {
            question: "4 of 5: Which US president is credited with The Great Society?",
            options: ["Lyndon B. Johnson", "John F. Kennedy", "Richard Nixon"],
            correct: 0
        },
        {
            question: "5 of 5: What is the capital of the United States?",
            options: ["Washington, DC", "Frederick, MD", "Ashburn, VA"],
            correct: 0
        }];