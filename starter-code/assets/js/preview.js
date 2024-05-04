const savedFirstName = localStorage.getItem('firstName');
const savedLastName = localStorage.getItem('lastName');
const savedEmail = localStorage.getItem('email');
const inputLink = localStorage.getItem('inputValue_0');
const inputLink1 = localStorage.getItem('inputValue_1');
const inputLink2 = localStorage.getItem('inputValue_2');

// console.log(inputLink);

// console.log(savedFirstName,savedLastName,savedEmail);

const mainDiv = document.querySelector('.mainDiv');

mainDiv.innerHTML = `
           <div class="profileDiv">
      <img class="profileImg" alt="profile img" src="./assets/images/profile-img.png">
      <p class="profileName">${savedFirstName} ${savedLastName}</p>
      <p class="profileMail">${savedEmail}</p>
    </div>
    <div class="linksDiv">
      <button type="button" class="gitBtn">
        <div>
          <img src="./assets/images/icon-github.svg" alt="" class="icons"> Github</div> 
          <img src="./assets/images/icon-arrow-right.svg" alt="" class="ok"></button>
          <button type="button" class="youtubeBtn">
           <div>
             <img src="./assets/images/icon-youtube.svg" alt="" class="icons">Youtube

           </div> 
        
      
      <img src="./assets/images/icon-arrow-right.svg" alt="" class="ok"></button>
      
        <button type="button" class="linkedInBtn">
          
          <div>
            <img src="./assets/images/icon-linkedin.svg" alt="" class="icons">LinkedIn
          </div>
      
      <img src="./assets/images/icon-arrow-right.svg" alt="" class="ok"></button>

    </div>
`
const gitBtn = document.querySelector('.gitBtn');
gitBtn.addEventListener('click', () => {
    if(inputLink){
        window.location.href=inputLink;
    }
})

const youtubeBtn = document.querySelector('.youtubeBtn');
youtubeBtn.addEventListener('click', () => {
    if(inputLink1){
        window.location.href=inputLink1;
        console.log(window.location.href=inputLink1);
    }
})

const linkedInBtn = document.querySelector('.linkedInBtn');
linkedInBtn.addEventListener('click', () => {
    if(inputLink2){
        window.location.href=inputLink2;
    }
})






