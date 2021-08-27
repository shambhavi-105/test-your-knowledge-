const readlineSync = require('readline-sync');

console.log('Welcome to the Quiz');
let username = readlineSync.question("What's your Name: \n");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 10 Questions on India and all are Compulsory.');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');

var questionsList = [
  {
    question : 'India\'s Largest City by Population: ',
    answer : 'Mumbai',
  },
  {
    question : 'National Song of India: ',
    answer : 'Vande Mataram',
  }, 
  {
    question : 'National Motto of India: ',
    answer : 'Satyameva Jayate',
  }, 
  {
    question : 'Golden Temple is situated in: ',
    answer : 'Amritsar',
  },
];

var mcqList = [

  {
    array : ['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
    question : 'Which City is known as "Electronic City of India"? ',
    answer : 'Bangalore'
  },
  {
    array : ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question : 'The Indian Institute of Science is located at ',
    answer : 'Bangalore'
  },
  {
    array : ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
    question : 'What is the name of India\'s National Aquactic Animal: ',
    answer : 'River Dolphin'
  },
  {
    array : ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
    question : 'The Centre for Cellular and Molecular Biology in India is situated at: ',
    answer : 'Hyderabad'
  },
  {
    array : ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
    question : 'National Institute of Aeronautical Engineering is located at ',
    answer : 'Delhi'
  },
  {
    array : ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
    question : 'Who wrote the famous book - "We the people"? ',
    answer : 'Nani Palkhivala'
  },
];

let score = 0;
function quiz(question,answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log('You are Right.');
    score = score + 2;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is:',answer);
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log('Score is: ',score);
}

function quizMcq(question,listOfAnswers,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log('You are Right.');
    score = score + 2;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ',answer);
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log('Score is: ',score);
}

  for(var i = 0;i<questionsList.length;i++){
  console.log('\n');
  quiz(questionsList[i].question,questionsList[i].answer);
  console.log('*******************************');
}
for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].question,mcqList[i].array,mcqList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,',username,'your Total Score is: ',score);
} 
