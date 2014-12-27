function checkAnswer() {
  var answer = document.getElementById('sessionID').value.toLowerCase();
    if(answer == '4') {
      console.log('Correct!');
    }
    else {
      console.log('Sorry, try again!');
    }
}
