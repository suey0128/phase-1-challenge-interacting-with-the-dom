//1. As a user, I should see the timer increment every second once the page has loaded. 
const counter = document.querySelector('#counter'); 
let totalSecond = 0;
let countingTimer = setInterval(myTimer, 1000);
function myTimer() {
    totalSecond = ++totalSecond;
    counter.textContent = totalSecond;
} 

//2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
minusBtn = document.querySelector('#minus');
plusBtn = document.querySelector('#plus');
minusBtn.addEventListener('click',(e) => {
    totalSecond = totalSecond-1;
    counter.textContent = totalSecond;
}) 
plusBtn.addEventListener('click',(e) => {
    totalSecond = totalSecond+1;
    counter.textContent = totalSecond;
}) 

//3. As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
const numbers = {}
likeBtn = document.querySelector('#heart')
likeBtn.addEventListener("click", () => {
    // console.log(totalSecond)
    if (numbers[totalSecond]) {
        numbers[totalSecond] = ++numbers[totalSecond]
        // console.log(numbers)
        document.getElementById(totalSecond).textContent = `${totalSecond} has been like ${numbers[totalSecond]} times`;
    } else {
        let likeLi = document.createElement('li');
        likeLi.setAttribute('id', totalSecond)
        numbers[totalSecond] = 1
        // console.log(numbers)
        likeLi.textContent = `${totalSecond} has been like 1 time`;
        document.querySelector('.likes').append(likeLi); 
        // console.log(likeLi);
    }
})





//4. As a user, I can pause the counter, which should: pause the counter ; disable all buttons except the pause button; switch the label on the button from "pause" to "resume"
//5. As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.
let counting = 'yes';
const pausebtn = document.querySelector('#pause');
pausebtn.addEventListener('click', (e) => 
{
    if (counting !== 'yes') {
        countingTimer = setInterval(myTimer, 1000);
        counting = 'yes';
        document.querySelector('#pause').textContent = 'pause';
        document.querySelector('#minus').disabled = false;
        document.querySelector('#plus').disabled = false;
        document.querySelector('#heart').disabled = false;
    } else {
        clearInterval(countingTimer);
        counting = 'no';
        document.querySelector('#pause').textContent = 'resume';
        document.querySelector('#minus').disabled = true;
        document.querySelector('#plus').disabled = true;
        document.querySelector('#heart').disabled = true;
    }
})


//6. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
document.querySelector('#comment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let pComments = [];
    pComments.push(e.target.comment.value);
    pComments.forEach(elem => {
        let commentP = document.createElement('p')
        commentP.textContent = elem;
        document.querySelector('#list').append(commentP); 
        
    })
})
