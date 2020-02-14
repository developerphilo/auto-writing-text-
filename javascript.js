const text = document.getElementById('text');
const prog = 'LET US CODE AND WRITE BLOGS #1Week1Blog';
let idx = 1;

setInterval(write, 115);
function write(){
    text.innerText = prog.slice(0,idx);
    idx ++;
    if (idx > prog.length) {
        
        idx=1;
    }

}