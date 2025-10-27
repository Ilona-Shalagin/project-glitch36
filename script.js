const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*25)+1;

input.addEventListener("keypress",function(e){
    if(e.keyCode === 13) { play();

    }
})

button.addEventListener("click",play);

function play(){
    const userNumber = document.querySelector("#guess").value;
    
    if (userNumber < 1 || userNumber > 25 ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter number between 1 to 25!',
          })
    }
    else if ( isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter number!',
          })
    }
    else{
        if(userNumber < answer){
            Swal.fire('The number is higher!')
        }
    else if(userNumber > answer){
        Swal.fire('The number is lower!')
    }
    else{
        Swal.fire({
            title: 'Well done!',
            imageUrl: 'https://cdn.glitch.com/805bbfbe-d690-42f8-a1c9-9e3a834f4f27%2Fimage.jpg?v=1633286946062',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'victory',
          })
    }  
    }
  guess.value='';
}
gsap.from(".container",{x:-500,duration:3,ease:"bounce",opacity:0})