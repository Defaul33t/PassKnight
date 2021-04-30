// Selector variable
const $ = (selector) => {
    return document.querySelector(selector);
};

const _ = (selector) => {
    return document.createElement(selector);
};

// Sections
const sectionOne = $(".section-one");
const sectionTwo = $(".section-two");
const sectionThree = $(".section-three");
const sectionFour = $(".section-four");
// Info page
const infoBtn = $(".info");
const infoPage = $(".information-site");
// Characters
const knightRight = $(".knight-right-box");
const knightHead = $('.taped-head');
const virus = $(".virus-happy");
// Mail input
const inputLogin = $('#login-input');
const textLogin = $(".text-imitation");
const nextBtn = $("#next-btn");
// Password input
const name = $(".name-target");
const inputPass = $('#password-input');
const passImit = $(".pass-imitation");
const confirmBtn = $("#confirm-button");
const skip = $('.skip');
// Other.
const continueBtn = $('#start-button');
const circles = document.querySelectorAll(".circle");
const nav = $('nav');
const ultimateInput = $("#ultimate-pass");
const ultimateSubmit = $("#ultimate-btn");

// Check device viewport
if(screen.width < 720 || screen.height < 720){

    // Phone incompatible

    $('.small-device').style.display = "flex";

    setTimeout(() => {
        location.reload();
    }, 10000);

}else if(screen.availHeight > screen.availWidth){

    // Tablet devices should use landscape

    $('.landscape').style.display = "flex";

    setTimeout(() => {
        $('.landscape').style.opacity = 0;

        $('.landscape').addEventListener('transitionend', () => {
            $('.landscape').remove();
            $('.small-device').remove();
        });
    }, 1500);

}else{

    // Remove start messages
    
    $('.landscape').remove();
    $('.small-device').remove();

}

/* FUNCTIONS */

(function startUp(){
    circles[0].style.backgroundColor = "black";
})();

(function spiders(){
    const arr = ['bobby', 'cucco', 'duck'];

    for(let i = 0; i < arr.length; i++){
        const spider = _('svg');
        spider.innerHTML = ` <svg class="spider ${arr[i]}" viewBox="0 0 505 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="spider 3">
        <g id="Group">
        <path id="Vector" d="M239.08 208.373C252.563 195.915 261.16 178.229 261.16 158.453C261.16 120.864 230.568 90.272 193 90.272C155.432 90.272 124.84 120.864 124.84 158.453C124.84 178.229 133.437 195.893 146.92 208.373C108.861 231.755 83.0907 281.163 83.0907 325.408C83.0907 386.016 132.413 435.317 193 435.317C253.587 435.317 302.909 386.016 302.909 325.408C302.909 281.163 277.139 231.755 239.08 208.373Z" fill="black"/>
        </g>
        <g id="Group_2">
        <g id="Group_3">
        <path id="Vector_2" d="M337.013 21.3333V141.227C337.013 148.693 332.96 155.52 326.56 159.36L257.013 201.6L236.107 214.187C236.747 211.2 237.387 208.213 237.813 205.227C238.24 201.387 238.453 197.333 238.453 193.493C238.453 183.68 237.173 174.507 234.4 165.547L294.347 129.28V21.3333C294.347 9.6 303.733 0 315.68 0C327.413 0 337.013 9.6 337.013 21.3333Z" fill="black"/>
        </g>
        </g>
        <g id="Group_4">
        <g id="Group_5">
        <path id="Vector_3" d="M337.013 370.773V490.667C337.013 502.4 327.413 512 315.68 512C303.733 512 294.347 502.4 294.347 490.667V380.587L279.627 368C280.053 365.44 280.053 362.88 280.053 360.32C280.053 340.907 276.213 321.067 268.96 302.293L329.547 354.56C334.24 358.613 337.013 364.587 337.013 370.773Z" fill="black"/>
        </g>
        </g>
        <g id="leg-right">
        <g id="Group_6">
        <g id="Group_7">
        <path id="Vector_4" d="M393.76 366.933C395.893 378.453 388.427 389.547 376.693 391.68C375.413 392.107 374.133 392.107 372.853 392.107C362.827 392.107 353.867 384.853 351.947 374.613L338.933 305.493L264.267 290.987C257.653 275.84 248.693 261.333 238.24 248.747C236.107 246.187 233.76 243.627 231.413 241.067L254.24 245.547L361.333 266.453C370.08 267.947 376.693 274.773 378.187 283.307L393.76 366.933Z" fill="black"/>
        </g>
        </g>
        </g>
        <g id="leg-right-front">
        <g id="Group_8">
        <g id="Group_9">
        <path id="Vector_5" d="M393.76 124.16L378.187 207.787C376.693 216.32 370.08 223.147 361.333 224.853L254.24 245.547L238.24 248.747C236.107 246.187 233.76 243.627 231.413 241.067C230.347 239.787 229.28 238.72 228 237.44C231.627 229.973 234.4 222.293 236.107 214.187C236.747 211.2 237.387 208.213 237.813 205.227L257.013 201.6L338.933 185.6L351.947 116.48C354.08 104.96 365.173 97.0667 376.693 99.4133C388.427 101.547 395.893 112.64 393.76 124.16Z" fill="black"/>
        </g>
        </g>
        </g>
        <g id="Group_10">
        <g id="Group_11">
        <path id="Vector_6" d="M156.31 205.227C156.737 208.213 157.377 211.2 158.017 214.187L137.11 201.6L67.5632 159.36C61.1632 155.52 57.1099 148.693 57.1099 141.227V21.3333C57.1099 9.6 66.7099 0 78.4432 0C90.3899 0 99.7765 9.6 99.7765 21.3333V129.28L159.723 165.547C156.95 174.507 155.67 183.68 155.67 193.493C155.67 197.333 155.883 201.387 156.31 205.227Z" fill="black"/>
        </g>
        </g>
        <g id="Group_12">
        <g id="Group_13">
        <path id="Vector_7" d="M114.07 360.32C114.07 362.88 114.07 365.44 114.497 367.787L99.7765 380.587V490.667C99.7765 502.4 90.3899 512 78.4432 512C66.7099 512 57.1099 502.4 57.1099 490.667V370.773C57.1099 364.587 59.8832 358.613 64.5765 354.56L125.163 302.08C117.91 320.853 114.07 340.907 114.07 360.32Z" fill="black"/>
        </g>
        </g>
        <g id="leg-left">
        <g id="Group_14">
        <g id="Group_15">
        <path id="Vector_8" d="M162.71 241.067C160.363 243.627 158.017 246.187 155.883 248.747C145.43 261.333 136.47 275.84 129.857 290.987L55.1899 305.493L42.1766 374.613C40.2566 384.853 31.2966 392.107 21.2699 392.107C19.9899 392.107 18.7099 392.107 17.4299 391.68C5.69657 389.547 -1.7701 378.453 0.363233 366.933L15.9366 283.307C17.4299 274.773 24.0432 267.947 32.7899 266.453L139.883 245.547L162.71 241.067Z" fill="black"/>
        </g>
        </g>
        </g>
        <g id="leg-left-front">
        <g id="Group_16">
        <g id="Group_17">
        <path id="Vector_9" d="M166.123 237.44C164.843 238.72 163.777 239.787 162.71 241.067C160.363 243.627 158.017 246.187 155.883 248.747L139.883 245.547L32.7899 224.853C24.0432 223.147 17.4299 216.32 15.9366 207.787L0.363233 124.16C-1.7701 112.64 5.69657 101.547 17.4299 99.4133C28.9499 97.0667 40.0432 104.96 42.1766 116.48L55.1899 185.6L137.11 201.6L156.31 205.227C156.737 208.213 157.377 211.2 158.017 214.187C159.723 222.293 162.497 229.973 166.123 237.44Z" fill="black"/>
        </g>
        </g>
        </g>
        </g>
        </svg>`;
        sectionOne.appendChild(spider);
    }
})();

function animate(knightHead, virus, imitation){
    imitation.style.transform = "translate(-20px, -30px) scale(0.75)";
    imitation.style.color = "#076fd1";
    // Add and remove disagree animation
    knightHead.classList.add("disagree");
    knightHead.addEventListener('animationend', () => knightHead.classList.remove("disagree") );
    virus.src = 'imgs/virus-eyes.png';
}

function writeMessage(result){

    let consequence;
    let index = 0;

    const msg_one = {
        dom: $(".message-box"),
        text: ` "That nasty virus covered my mouth! Fortunately, you are great and you didn't give him your login details" `
    };
    const msg_two = {
        dom: $(".message-box"),
        text: ` “That nasty virus covered my mouth and you fell for his scam! Ouch.” `
    };
    const msg_three = {
        dom: $(".rbox"),
        text: ` “Let’s move on and practice which passwords are secure and what they should contain. Use \u2B05\uFE0F \u27A1\uFE0F \u2B06\uFE0F \u2B07\uFE0F to move.” `
    };
    const msg_four = {
        dom: $(".rbox"),
        text: ` "Good job! What about symbols and letters? What must password contain to be secure?" `
    };
    const msg_five = {
        dom: $(".rbox"),
        text: ` "Should you use personal information or dictionary words in your password?" `
    };
    const msg_six = {
        dom: $(".rbox"),
        text: ` "Oh no! Scammer approaches! Use what you learnt!" `
    };
    const msg_seven = {
        dom: $(".rbox"),
        text: ` "This is not the end! You will remember about me when you will use simple passwords again!" `
    };

    switch (result) {
        case 1:
            consequence = msg_one;
            break;
    
        case 2:
            consequence = msg_two;
            break;
        
        case 3:
            consequence = msg_three;
            break;

        case 4:
            consequence = msg_four;
            break;

        case 5:
            consequence = msg_five;
            break;
        
        case 6:
            consequence = msg_six;
            break;

        case 7:
            consequence = msg_seven;
            break;
    }

    const int = setInterval(() => {

        consequence.dom.textContent = consequence.text.slice(0, index);
        index++;

        if(index == consequence.text.length){

            let button = _('button');
            
            if(result == 3){
                button.innerText = 'Close';
                button.classList.add("btnFive");
            }else if(result == 4){
                button.innerText = 'Close';
                button.classList.add("btnSix");
            }else if(result == 5){
                button.innerText = 'Close';
                button.classList.add("btnSeven");
            }else if(result == 6){
                button.innerText = 'Close';
                button.classList.add("btnEight");
            }else if(result == 7){
                button.innerText = 'hehehe';
                button.classList.add("btnNine");
            }else{
                button.innerText = 'Continue';
                button.classList.add("btnThree");
            }

            consequence.dom.appendChild(button);
            clearInterval(int);
            index = 0;
        }

    }, 35);
}

function ultimate(){

    const hasNumber = /\d/;
    const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const bigChar = /[A-Z]/;
    const lowChar = /[a-z]/;
    let passScore = $("#kill-score");
    let score = 0;

    if(!ultimateFired){

        let ultimate = _("div");
            ultimate.classList.add("ultimate");
            ultimate.innerHTML = "Final blow";
            $(".attack").append(ultimate);

        // Open ultimate box
        $(".ultimate").addEventListener("click", () => {

           $(".ultimate-box").style.display = "flex";

           // Click on deal finish blow
            ultimateSubmit.addEventListener("click", () => {

                let passValue = ultimateInput.value;

                if(passValue.length >= 12 && hasNumber.test(passValue) && specialChar.test(passValue) && bigChar.test(passValue) && lowChar.test(passValue)){        
                    
                    score++;
                    passScore.innerText = score;

                    if(score === 2){
                        $(".ultimate-box").remove();
                        $(".attack").remove();
                        $(".health").style.width = "0%";
                        $(".knight-right").src = "imgs/virus-angry.png";
                        knightRight.style.display = "block";
                        $(".rbox").innerText = "";

                        setTimeout(() => {

                            knightRight.style.transform = "translateY(0px)";
                            // Write new message
                            writeMessage(7);

                        }, 500);

                        setTimeout(() => {

                            sectionFour.style.display = "none";
                            $(".win").style.display = "flex";
                            circles[5].style.backgroundColor = "black";

                        }, 8000);
                    }

                    ultimateInput.value = "";

                }else{
                    ultimateInput.value = "";
                }
            
            });
           
        });
    }

    ultimateFired = true;
}

function explanationWin(){

    sectionThree.children[1].remove();
    sectionThree.style.display = 'flex';
    sectionThree.style.height = "100vh";
    $('header').style.display = "none";
    // Move navigation to mid-right and add dot
    nav.classList.add('rotateNav');
    circles[2].style.backgroundColor = "black";

    setTimeout(() => {
        $(".confetti").style.transform = "translateY(0%)";
        writeMessage(1);
    }, 500);

}

function explanationLose(){

    sectionThree.children[0].remove();
    sectionThree.style.display = 'flex';
    sectionThree.style.height = "100vh";
    $('header').style.display = "none";
    // Tears animation
    $(".emoji-drop").classList.add('animate-drop');
    // Set red color
    document.body.style.backgroundColor = '#FFF1F1';
    $('header').style.backgroundColor = '#FFF1F1';
    sectionThree.style.backgroundColor = '#FFF1F1';
    // Move navigation to mid-right and add dot
    nav.classList.add('rotateNav');
    circles[2].style.backgroundColor = "black";

    setTimeout(() => {
        writeMessage(2);
    }, 500);

}

/* EVENT LISTENERS */

infoBtn.addEventListener("click", () => {

    if(!infoPage.classList.contains("active")){
        infoPage.style.display = "flex";
        infoPage.classList.add("active");
    }else{
        infoPage.style.display = "none";
        infoPage.classList.remove("active");
    }

});

continueBtn.addEventListener("click", () => {

    // Move to section 2
    sectionOne.remove();
    sectionTwo.style.display = 'flex';

    // Navigation circles
    circles[1].style.backgroundColor = "black";

});

sectionOne.addEventListener('mouseover' || 'click', (e) => {

    //Wink animation
    const eye = $(".eye");

    if(e.target == continueBtn){
        $(".eye").classList.add("wink");
        eye.addEventListener("animationend", () => eye.classList.remove("wink") );
    }
});

sectionTwo.addEventListener('click', (e) => {

    switch (e.target) {
        case inputLogin:
            animate(knightHead, virus, textLogin);
            break;
    
        case inputPass:
            animate(knightHead, virus, passImit);
            break;   

        case nextBtn:
            // Two second password form
            $(".two-forms").style.transform = 'translateX(-175px)';
            // mail with round border and icon
            let newMail = _('h4');
            newMail.classList.add('mail-show');
            newMail.innerHTML = `<div class="login-icon">${inputLogin.value.slice(0, 1)}</div> ${inputLogin.value} <i class="fas fa-chevron-down"></i>`;
    
            $(".user-display").appendChild(newMail);

            // Set value for name
            name.innerHTML = `Hi ${inputLogin.value.slice(0, inputLogin.value.indexOf('@'))}`;
            break;   

        case skip:

            // To section 3 skip win
            sectionTwo.remove();
            explanationWin();
            break;    

        case confirmBtn:

            // To section 3 
            sectionTwo.remove();

            if(inputPass.value.length < 8){
                explanationWin();
            }else{
                explanationLose();
            }
            break;

        default:
            if(inputLogin.value.length < 1){
                // Placeholder email input imitation
                textLogin.style.transform = "translate(0px, 0px) scale(1)";
                textLogin.style.color = "#5f6368";
            }
            if(inputPass.value.length < 1){
                // Placeholder pass input imitation
                passImit.style.transform = "translate(0, 0) scale(1)";
                passImit.style.color = "#5f6368";
            }

            // Normal eyes of virus
            virus.src = 'imgs/virus-red.png';
            break;
    }

});

sectionThree.addEventListener("click", (e) => {

    if(e.target.classList.contains("btnThree")){
        for(let i = 0; i < 4; i++){
            sectionThree.children[0].children[0].remove();
        }
        $(".explanation").style.display = "block";
    }

    // To section 4
    if(e.target.classList.contains("btnFour")){
        sectionThree.remove();
        sectionFour.style.display = "flex";
        circles[3].style.backgroundColor = "black";
        document.body.style.backgroundColor = 'white';
        $('header').style.backgroundColor = 'white';
        $('header').style.display = "flex";
        writeMessage(3);
    }
    
});

sectionFour.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("btnFive") || e.target.classList.contains("btnSix") || e.target.classList.contains("btnSeven") || e.target.classList.contains("btnEight")){
        $(".rbox").innerText = "";
        knightRight.style.transform = "translateY(500px)";

        setTimeout(() => {
            knightRight.style.display = "none";
        }, 1000);
    }

    if(e.target.classList.contains("weapons")){
        if(health < 30){
            $(".health").style.width = "20%";
            $(".health").style.backgroundColor = "crimson";
            ultimate();
        }else{
            health = health - power;
            $(".health").style.width = `${health}%`;
        }
    }

});

/* PLAYER MOVE STAGE */

let x = 0;
let y = 0;
let done;
let doneTwo;
let stgCompleteOne;
let stgCompleteTwo;
let stgCompleteThree;
let finishedStages;
let shieldObtained;
let swordObtained;
let domObtainedSword;
let domObtainedShield;
let ultimateFired;
let health = 100;
let power = 0;
let stop_movement;
const playground = $(".playground");
const answer = $(".text-answer");

/* FUNCTIONS */

function animateMovement(mvOne, mvTwo, stl){

    if(!done){
        const backL = setTimeout(() => {
            player.src = mvOne;
            doneTwo = false;
            done = true;
        }, 125);
        document.addEventListener("keyup", () => {
            clearInterval(backL);
            player.src = stl;
        });
    }

    if(!doneTwo){
        const backR = setTimeout(() => {
            player.src = mvTwo;
            done = false;
            doneTwo = true;
        }, 125);
        document.addEventListener("keyup", () => {
            clearInterval(backR);
            player.src = stl;
        });
    }
    
}

function setPlayer(valueX, valueY, left, bottom){

    x = valueX;
    y = valueY;
    player.style.left = left;
    player.style.bottom = bottom;
}

function removeAnswer(){

    playground.classList.remove("correct");
    answer.style.zIndex = "-2";
    answer.innerText = "";
}

function correctDoor(stage){

    playground.classList.add("correct");
    answer.innerText = "Correct";
    answer.style.zIndex = "2";
    answer.style.color = '#1A73E8';


    // Stop movement after correct door
    stop_movement = true;

    setTimeout(() => {
        stop_movement = false;
    }, 3000);

    switch (stage) {
        case 1:
            // To stage 2
            stgCompleteOne = true;

            setTimeout(() => {

                // Remove answer
                removeAnswer();
                    
                // Set player position
                setPlayer(40, 100, '40px', '100px');
        
                // Remove old doors
                for(let i = 0; i < 3; i++){
                    playground.children[0].remove();
                }

                // Create shield in the middle of the map
                let shield = _("div");
                shield.classList.add("shield");
                playground.appendChild(shield);

                // Create doors
                let doorArr = ["four", "five", "six"];
                let doorText = ["only symbols", "symbols & numbers", `symbols, numbers, lowercase & uppercase`];
                for(let i = 0; i < doorArr.length; i++){
                    let door = _('div');
                    door.classList.add("door");
                    door.classList.add(`door-${doorArr[i]}`);
                    door.innerText = `${doorText[i]}`;
                    playground.appendChild(door);
                }

                // Display back the knight for message
                knightRight.style.display = "block";
                $(".rbox").innerText = "";

                setTimeout(() => {
                    knightRight.style.transform = "translateY(0px)";
                    // Write new message
                    writeMessage(4);
                }, 500);

            }, 3000);
     
            break;
    
        case 2:
            // To stage 3
            stgCompleteTwo = true;

            setTimeout(() => {

                // Remove answer
                removeAnswer();

                // Set player position
                setPlayer(60, 360, '40px', '360px');

                // Remove old doors
                for(let i = 0; i < 3; i++){
                    playground.lastChild.remove();
                }

                // If shield was not taken remove it also
                if(!shieldObtained){
                    $(".shield").remove();
                    shieldObtained = true;
                }

                // Create sword in the middle of the map
                let sword = _("div");
                sword.classList.add("sword");
                playground.appendChild(sword);

                // Create doors
                let doorArr = ["seven", "eight"];
                let doorText = ["No.", "OF COURSE!"];
                for(let i = 0; i < doorArr.length; i++){
                    let door = _('div');
                    door.classList.add("door");
                    door.classList.add(`door-${doorArr[i]}`);
                    door.innerText = `${doorText[i]}`;
                    playground.appendChild(door);
                }

                // Display back the knight for message
                knightRight.style.display = "block";
                $(".rbox").innerText = "";

                setTimeout(() => {
                    knightRight.style.transform = "translateY(0px)";
                    // Write new message
                    writeMessage(5);
                }, 500);

            }, 3000);
            break;

        case 3:
            // Finish stage and to stage 4
            stgCompleteThree = true;
            finishedStages = true;

            setTimeout(() => {

                circles[4].style.backgroundColor = "black";
                playground.style.display = "none";
                $(".final-stage").style.display = "flex";
                $(".tablet-controls").style.display = "none";
                
                const weapons = $(".weapons");

                let domSword = _("img");
                domSword.setAttribute("class", "weapon");
                domSword.src = "imgs/sword.png";

                let domShield = _("img");
                domShield.setAttribute("class", "weapon");
                domShield.src = "imgs/shield.png";

                let fists = _("img");
                fists.setAttribute("class", "weapon");
                fists.src = "imgs/fists.png";

                if(domObtainedSword){
                    weapons.append(domSword);
                    power += 5;
                }
                if(domObtainedShield){
                    weapons.append(domShield);
                    power += 5;
                }
                if(!domObtainedShield && !domObtainedSword){ 
                    weapons.append(fists);
                    power += 2;
                }
                
                // Display back the knight for message
                knightRight.style.display = "block";
                $(".rbox").innerText = "";

                setTimeout(() => {
                    knightRight.style.transform = "translateY(0px)";
                    // Write new message
                    writeMessage(6);
                }, 500);

            }, 3000);
            break;
    }
  
}

function wrongDoor(){
    playground.classList.add("shakeGround");
    answer.innerText = "Wrong";
    answer.style.zIndex = "2";
    answer.style.color = '#C92222';

    setTimeout(() => {
        playground.classList.remove("shakeGround");
        answer.style.zIndex = "-2";
        answer.innerText = "";
    }, 500);
}

function detect(){

    // Correct door 1
    if( (x > 640) && (y > 80) && (y < 200) && (!stgCompleteOne) ){
        correctDoor(1);
    }
    // Correct door 2
    if( (x > 510) && (x < 610) && (y > 360) && (!stgCompleteTwo) && (stgCompleteOne) ){
        correctDoor(2);
    }
    // Correct door 3
    if( ( (x > 640) && (y < 280) && (y > 180) ) && ( (stgCompleteOne) && (stgCompleteTwo) && (!stgCompleteThree) ) ){
        correctDoor(3);
    }
    // Wrong door 1st stage
    if( ( ( (x > 20) && (x < 140) && (y > 360) ) || (x > 500) && (x < 620) && (y > 360) ) && (!stgCompleteOne) ){
        wrongDoor();
    }
    // Wrong door 2nd stage
    if( ( ( (x > 170) && (x < 280) && (y > 360) ) || ( (x > 640) && (y < 310) && (y > 190) ) ) && (!stgCompleteTwo) && (stgCompleteOne) ){
        wrongDoor();
    }
    // Wrong door 3rd stage
    if( ( (x < 500) && (x > 360) && (y > 370) ) && ( (stgCompleteOne) && (stgCompleteTwo) ) ){
        wrongDoor();
    }
    // Pick up shield in 2nd stage
    if( ( (x > 300) && (x < 390) && (y > 120) && (y < 200) ) && (stgCompleteOne) && (!shieldObtained) ){
        shieldObtained = true;
        domObtainedShield = true;
        $(".shield").remove();
    };
    // Pick up sword in 3rd stage
    if( ( (x > 300) && (x < 390) && (y > 120) && (y < 200) ) && (stgCompleteTwo) && (!swordObtained) ){
        swordObtained = true;
        domObtainedSword = true;
        $(".sword").remove();
    }

}

/* MOVEMENT */

document.addEventListener("keydown", (e) => {

    const player = $("#player");

    if(!finishedStages && !stop_movement){
        if(e.key == 'ArrowUp'){
            if(y > 360){
                y = 360;
            }
            y+=30;
            player.style.bottom = `${y}px`;
            animateMovement('imgs/character/back-move-one.png', 'imgs/character/back-move-two.png', 'imgs/character/back-still.png');
        }
        if(e.key == 'ArrowDown'){
            if(y < 10){
                y = 20;
            }
            y-=30;
            player.style.bottom = `${y}px`;
            animateMovement('imgs/character/front-move-one.png', 'imgs/character/front-move-two.png', 'imgs/character/front-still.png');
        }
        if(e.key == 'ArrowRight'){
            x+=30;
            if(x > 660){
                x = 660;
            }
            player.style.left = `${x}px`;
            animateMovement('imgs/character/right-move-one.png', 'imgs/character/right-move-two.png', 'imgs/character/right-still.png');
        }
        if(e.key == 'ArrowLeft'){
            if(x < 20){
                x = 20;
            }
            x-=30;
            player.style.left = `${x}px`;
            animateMovement('imgs/character/left-move-one.png', 'imgs/character/left-move-two.png', 'imgs/character/left-still.png');
        }

    }

    detect();

});

/* TABLET MOVEMENT */

document.addEventListener("click", (e) => {

    const player = $("#player");

    if(!finishedStages){
        if(e.target.classList.contains("up")){
            if(y > 360){
                y = 360;
            }
            y+=30;
            player.style.bottom = `${y}px`;
            animateMovement('imgs/character/back-move-one.png', 'imgs/character/back-move-two.png', 'imgs/character/back-still.png');
        }
        if(e.target.classList.contains("down")){
            if(y < 10){
                y = 20;
            }
            y-=30;
            player.style.bottom = `${y}px`;
            animateMovement('imgs/character/front-move-one.png', 'imgs/character/front-move-two.png', 'imgs/character/front-still.png');
        }
        if(e.target.classList.contains("right")){
            x+=30;
            if(x > 660){
                x = 660;
            }
            player.style.left = `${x}px`;
            animateMovement('imgs/character/right-move-one.png', 'imgs/character/right-move-two.png', 'imgs/character/right-still.png');
        }
        if(e.target.classList.contains("left")){
            if(x < 20){
                x = 20;
            }
            x-=30;
            player.style.left = `${x}px`;
            animateMovement('imgs/character/left-move-one.png', 'imgs/character/left-move-two.png', 'imgs/character/left-still.png');
        }

    }

    detect();

});