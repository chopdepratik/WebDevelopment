let simpledetails=document.getElementById('simpledetails');
let fitnessdetails=document.getElementById('fitnessdetails');
fitnessdetails.classList.add('hidden');
let imgarr = ['dubble_hand.webp', 'dubblepress.jpg', 'excercise.avif', 'firl_rope.jpg', 'stand.jpg','girl.jpg'];
let currentindex = 0;

function changeimage() {
  const changeimg = document.getElementById('changeimg'); 
  currentindex = (currentindex + 1) % imgarr.length; 
  changeimg.src = imgarr[currentindex];
  setTimeout(() => {
    changeimg.src = imgarr[currentindex];
    changeimg.style.opacity = 1; 
}, 1000); 
}

setInterval(changeimage, 3000); 

function toggle() {
    simpledetails.classList.toggle('hidden');
    fitnessdetails.classList.toggle('hidden');

  }
  function submitbtn() {
    let fname = document.getElementById('first-name')
    let lname = document.getElementById('last-name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let cpassword = document.getElementById('confirm-password');
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let file = document.getElementById('file');
    let checkbox = document.getElementById('checkbox');

    if (fname.value===''){
        alert('Please fill the first name. return to the previous page');
        return; 
    }
    if (lname.value===''){
        alert('Please fill the last name. return to the previous page');
        return; 
    }
    if (email.value===''){
        alert('Please fill the email. return to the previous page');
        return; 
    }
    if (password.value===''){
        alert('Please enter the password. return to the previous page');
        return; 
    }
    if (cpassword.value===''){
        alert('Please confirm the password. return to the previous page');
        return; 
    }
     
    if (password.value !== cpassword.value) {
        alert('Password and Confirm Password do not match.');
        return; 
    }
    if (height.value===''){
        alert('Please enter the height');
        return; 
    }
    if (weight.value===''){
        alert('Please enter weight');
        return; 
    }
    if (file.value===''){
        alert('Please submit the your current picture');
        return; 
    }
    if (checkbox.value===''){
        alert('Please click the checkbox to agree all terms and conditions');
        return; 
    }

     thanks();
}
function thanks(){
    simpledetails.classList.add('hidden');
    fitnessdetails.classList.add('hidden');

    let div2=document.getElementById('div2');
    simpledetails.classList.add('hidden');
    fitnessdetails.classList.add('hidden');
    div2.innerHTML = "<p style='color: coral; font-size: 48px; text-align: center;'>Welcome to the fitness family</p>";;

}
