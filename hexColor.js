const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexColorBtn = document.querySelector('.hexColorBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');


hexColorBtn.addEventListener('click',changeColor);

function changeColor(){
    let hexCol='#';

    for( let i=0;i<6;i++){

    const random=Math.floor(Math.random()*hexNumbers.length);
   
    hexCol +=hexNumbers[random];
}
bodyBcg.style.backgroundColor=hexCol;
hex.innerHTML= hexCol;
}
