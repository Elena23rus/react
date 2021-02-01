const buttonAdd = document.querySelector('.add');
const editor = document.querySelector('.editor');
 const buttonback = document.querySelector('.editor__back');
//  const noteList = document.querySelector('.note__list');
//  const buttonSave = document.querySelector('.editor__save');
 buttonAdd.onclick = Buttons;


 function Buttons(){
    editor.classList.add('editor__show');
  buttonback.onclick = function(){
  editor.classList.remove('editor__show');
  
  }
}

export default Buttons;
