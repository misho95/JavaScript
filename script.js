
const mainUl = document.querySelector(`.main ul`);
const spanBtn = document.querySelectorAll(`.main ul li button.move`);

const spanBtnUp = document.querySelectorAll(`.main ul li button.moveUp`);

               



//Move Child Down
spanBtn.forEach((btn) => {
    btn.addEventListener(`click`, () => {     
        const select_parent = btn.parentElement;
        const nextSibling = select_parent.nextElementSibling;
        if(nextSibling){
             nextSibling.after(select_parent);   
        } else {
         }    
    })
})

//Move Child Up
spanBtnUp.forEach((btn) => {
    btn.addEventListener(`click`, () => {
        const select_parent = btn.parentElement;
        let prevSibling = select_parent.previousElementSibling;
        if(prevSibling){
        prevSibling.before(select_parent);
        } else {
        }                                
    })
})

//Delete Child

const spanBtnDelete = document.querySelectorAll(`.main ul li button.delete`);

spanBtnDelete.forEach((btn) => {
    btn.addEventListener(`click`, () => {
        const select_parent = btn.parentElement;
        mainUl.removeChild(select_parent);
    })
})


//add List


const listInput = document.getElementsByName(`addNewList`);
const listBtn = document.getElementsByName(`submitList`);
listBtn[0].addEventListener(`click`, (event) => {
    event.preventDefault();
    createNewElement();
   listInput[0].value = ``;

});

function createNewElement(){
    //Create
    value = listInput[0].value;
    const li = document.createElement(`li`);
    li.innerHTML = value;
    const btnMoveDown = document.createElement(`button`);
    btnMoveDown.className = `move`;
    btnMoveDown.innerHTML = `Move Down`;
        btnMoveDown.addEventListener(`click`, () => {
            const select_parent = btnMoveDown.parentElement;
            const nextSibling = select_parent.nextElementSibling;
            if(nextSibling){
                 nextSibling.after(select_parent);   
            } else {
             }    
        });
    li.appendChild(btnMoveDown);
    const btnMoveUp = document.createElement(`button`);
    btnMoveUp.className = `moveUp`;
    btnMoveUp.innerHTML = `Move Up`;
    btnMoveUp.addEventListener(`click`, () => {
            const select_parent = btnMoveUp.parentElement;
            let prevSibling = select_parent.previousElementSibling;
            if(prevSibling){
            prevSibling.before(select_parent);
            } else {
            }                              
    });
    li.appendChild(btnMoveUp);
    const btnDelete = document.createElement(`button`);
    btnDelete.className = `delete`;
    btnDelete.innerHTML = `Delete`;
        btnDelete.addEventListener(`click`, ()=> {  
            const select_parent = btnDelete.parentElement;
            mainUl.removeChild(select_parent);
        });
    li.appendChild(btnDelete);
    //Append
    mainUl.appendChild(li);
}