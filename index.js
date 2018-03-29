

let msg = document.querySelector('#nav1');

msg.addEventListener('click',(event) => {
    // let hideOne = document.querySelector('#imgOne');
    // hideOne.setAttribute('class', 'hidden');
    alert(`Sorry we don't really sell anything.... We are a fictatious company.`);
})

let contactMsg = document.querySelector('#nav2')

contactMsg.addEventListener('click', (event) => {
    prompt('Enter your Email and we will get in touch');
})
