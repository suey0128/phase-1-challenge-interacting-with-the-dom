
// what I have:
// 1. HTML page (welcome header, counter, 4 buttons, ul.likes, div for comment, comment form, submit button)

// what I need return:

//1. As a user, I should see the timer increment every second once the page has loaded. 

//Tool: setTimeout(), setInterval(), clearinterval() (base on the hints from the requirement page) 
    //good documentation on these methods: https://www.w3schools.com/js/js_timing.asp
        //when reading the documentation, the things that pop into my mind
            // the documentation example is when you click a button, the timer start to count, how can I make it start when the page is 
            // load? 
                // there is  an example to start the counting once the page is load

//What needs to be done:
    //1) selet the element that needs to be change in HTML, and assign a variable to it
    const counter = document.querySelector('#counter'); 
    //2) make the timer automatically count up each second as the page load.
    //   after reading the documentation, I know I need to use setInterval(), and it takes in a callback fuction as an argument
    let totalSecond = 0; //initiate the number on counter when the page is load
    let countingTimer = setInterval(myTimer, 1000);
    // 3) the callback function need to increase totalSecond by 1 each 1 sec, and then change the counter textContent to whatever the 
    //    totalSecond is
    function myTimer() {
        totalSecond = ++totalSecond;
        counter.textContent = totalSecond;
                    } 


//2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.

//Tool: addEventListener('click',cb function);

//What needs to be done:
    //select the target for addEventListener
    const minusBtn = document.querySelector('#minus');
    const plusBtn = document.querySelector('#plus');
    //define the callback founction and write the addEventListener()
    minusBtn.addEventListener('click',(e) => {
        totalSecond = totalSecond-1;
        counter.textContent = totalSecond;
    }) 
    plusBtn.addEventListener('click',(e) => {
        totalSecond = totalSecond+1;
        counter.textContent = totalSecond;
    }) 



//4. As a user, I can pause the counter, which should: pause the counter ; disable all buttons except the pause button; switch the label on the button from "pause" to "resume"
//5. As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.
//Tool: addEventListener('click',cb function);

//What needs to be done:
    // 1) Define the target of the addEventListener, grab the elemet and assign it ==> counter
    // 2) Define the call back fundtion of the addEventListener => if counting, stop; if stop, count.
    //      searched "how to set a timer counting up every second javascript" similar example: https://codepen.io/reynnor/pen/vmNaeM
        // stop the count ==> clearInterval(countingTimer);
        //conditional statement. How do I tell if the timer is pasued or not ? ==> create a condition yourself
        let counting = 'yes';
        // search "javascrip how to pause a timer" ,similar example: https://www.youtube.com/watch?v=_5QAnRp0kW4 
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
                //how to disable button on javascript: https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
                document.querySelector('#minus').disabled = true;
                document.querySelector('#plus').disabled = true;
                document.querySelector('#heart').disabled = true;
            }
        })



//6. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

//Tool: addEventListener ('submit', callback function)

// - A comment box that adds comments when submitted
document.querySelector('#comment-form').addEventListener('submit', (e) => {
    //prevent the page reload when the event is fired
    e.preventDefault();
    // make an empty array and push every input into the arry 
    let pComments = [];
    pComments.push(e.target.comment.value);
    // iterate every element in the array and push a new p tag into html 
    pComments.forEach(elem => {
        let commentP = document.createElement('p')
        commentP.textContent = elem;
        document.querySelector('#list').append(commentP); 
        
    })
})




//3. As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes'.

//Tool: addEventListener('click',cb function);

//What needs to be done:
    //select the target for addEventListener
    const likeBtn = document.querySelector('#heart');
    //define the callback founction ==> when click, push a <li> to <ul class='likes'></ul>. 
        //need to create <li> element
        //there are 2 variables in the outcome<li>, ${counter.textContent}, ${times that like was click within 1 sec}
        //try to simplify the problen without the conditional statement. Whenver the btn is clicked, append 1 string into ul
        likeBtn.addEventListener('click',function like (e) {
            let likeLi = document.createElement('li');
            likeLi.textContent = `${counter.textContent} has been like 1 time`;
            document.querySelector('.likes').append(likeLi); 
     }) 

        //when the counter.textContent is the same number, change happen in the same string; other wise, create a new string;
        //each element of likeArray is base on the counter.textContent

        //a conditional statement. When there are more than 1 like within 1 sec, 'time' becomes 'times'.       
        //It looks like we need to create an object that keeps track of keys and values.
        // create an object that adds a key of that number, and then gives it a like value. Then we can go back and reference that again.









        let timeOfClick = totalSecond;
        let numOfClick = 1;
        let likeLi = document.createElement('li');

        if (timeOfClick === totalSecond) {
            
        } else {
            likeLi.textContent = `${counter.textContent} has been like ${i} times`
        }
 
        likeBtn.addEventListener('click',function like (e) {
            setInterval(clickWithinOneSec(),1000)
        })

        
        //     setInterval(function, 1000)

        function clickWithinOneSec() {
            if (numOfClick === 1) {
                likeLi.textContent = `${counter.textContent} has been like 1 time`;
                numOfClick = numOfClick+1;
                console.log('here',numOfClick)
            } else {
                likeLi.textContent = `${counter.textContent} has been like ${numOfClick} times`;
                console.log('there',numOfClick)
                numOfClick = numOfClick+1;
            }
            document.querySelector('.likes').append(likeLi);  
        }