// تحديد المتغيرات

let btn = document.getElementById('btn');
let output = document.getElementById('output');

let name= ['Show the most embarrassing photo on your phone','Do 50 squats','Yell out the first word that comes to your mind','Howl like a wolf','Try to lick your elbow',];
// evenet
// click
// scroll

btn.addEventListener('click',

function(){
    var winner = name[Math.floor(Math.random()*name.length)]
    output.innerHTML=winner;
}
);