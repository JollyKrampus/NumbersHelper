let correctLetters = [];
let wrongLetters = [];
let allLetters = '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100'.split(',');
let startTime;
let endTime;

function generateRandomLetter() {
    if (allLetters.length === 0) {
        endTime = new Date();
        finishQuiz();
        return;
    }
    
    const index = Math.floor(Math.random() * allLetters.length);
    const randomLetter = allLetters[index];
    document.getElementById('random-letter').textContent = randomLetter;

    // Remove the displayed letter from allLetters
    allLetters.splice(index, 1);
}

function markCorrect() {
    const letter = document.getElementById('random-letter').textContent;
    correctLetters.push(letter);
    document.getElementById('correct-letters').textContent = correctLetters.join(', ');
    generateRandomLetter();
}

function markWrong() {
    const letter = document.getElementById('random-letter').textContent;
    wrongLetters.push(letter);
    document.getElementById('wrong-letters').textContent = wrongLetters.join(', ');
    generateRandomLetter();
}

function disableButtons() {
    document.getElementById('btn-correct').disabled = true;
    document.getElementById('btn-wrong').disabled = true;
}

function finishQuiz() {
    disableButtons();
    
    const total = correctLetters.length + wrongLetters.length;
    const percentage = ((correctLetters.length / total) * 100).toFixed(2);
    document.getElementById('percentage-correct').textContent = `${percentage}%`;

    const timeDiff = (endTime - startTime) / 1000;  // Convert to seconds
    document.getElementById('time-taken').textContent = `${timeDiff} seconds`;

    // Sort and display the letters
    document.getElementById('correct-letters').textContent = correctLetters.sort().join(', ');
    document.getElementById('wrong-letters').textContent = wrongLetters.sort().join(', ');

    // Update the final counts
    document.getElementById('correct-count-final').textContent = correctLetters.length;
    document.getElementById('wrong-count-final').textContent = wrongLetters.length;

    // Show the results div
    document.getElementById('results').style.display = 'block';
}

// Initialize with the first random letter
startTime = new Date();
generateRandomLetter();
