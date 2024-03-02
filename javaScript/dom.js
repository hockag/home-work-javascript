const textInput = document.querySelector('#textInput');
const changeBtn = document.querySelector('#changeBtn');

changeBtn.addEventListener('click', () => {
    const newText = textInput.value;
    changeBtn.textContent = newText;
})
//exercise 1


const myImage = document.querySelector('#myImage');
const changePhoto = document.querySelector('#changePhoto');

changePhoto.addEventListener('click', () => {
    myImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&usqp=CAU'; !changePhoto;
})