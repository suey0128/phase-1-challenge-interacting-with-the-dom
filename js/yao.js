//code for the 1st requirment.
const counter = document.querySelector('#counter'); 
let totalSecond = 0;
let countingTimer = setInterval(myTimer, 1000);
function myTimer() {
    totalSecond = ++totalSecond;
    counter.textContent = totalSecond;
} 

// code for the 2nd requirment;
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


let numClick = 0;
const likeBtn = document.querySelector('#heart');
likeBtn.addEventListener('click',function like (e) {
    numClick++; 
    let t = e.timeStamp - totalSecond*1000;
    let go = setInterval(clickCount, 1000-t);
    //setTimeout(function( ) { numClick=0; clearInterval( go ); }, 1000-t);
    
})

function clickCount(){

    let likeLi = document.createElement('li');
    if (numClick === 1)
        likeLi.textContent = `${counter.textContent} has been like 1 time`;
    else
        likeLi.textContent = `${counter.textContent} has been like ${numClick} times`;
    console.log(numClick);
    if (numClick != 0)
        document.querySelector('.likes').append(likeLi);

    
}




