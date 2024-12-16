let notpad=document.getElementById('notepad');
let body=document.body;


function clearNote(){
    if(confirm('are you sure, you want to clear?')){
        notpad.value='';
    }};




function saveNote(){
    let text=notpad.value;
    let blob=new Blob([text],{type : 'text/plain'});
    let url= URL.createObjectURL(blob);


    let a=document.createElement('a');
    a.href=url;;
    a.download='note.txt';
    a.click();
    URL.revokeObjectURL(url);

};
function changeTheme() {
    let body = document.body;
    body.classList.toggle('dark-theme'); 
};