`use strict`;

const formInput = document.querySelector(`.list-form input`);
const formBtn = document.querySelector(`.list-form button`);
const selectLists = document.querySelector(`.lists`);


//add new list

formBtn.addEventListener(`click`, (event) => {
    event.preventDefault();
    const value = formInput.value;
        if(value !== ``){
    const divGridLeft = document.createElement(`div`);
    divGridLeft.className = `grid-left`;
    divGridLeft.innerHTML = value;

    const divGridRight = document.createElement(`div`);
    divGridRight.className = `grid-right`;
    const btnEdit = document.createElement(`button`);
    btnEdit.className = `editbtn`;
    btnEdit.innerHTML = `Edit`;
    btnEdit.addEventListener(`click`, () => {
        edit(btnEdit);
    });
    divGridRight.append(btnEdit);
    const btnDown = document.createElement(`button`);
    btnDown.className = `downbtn`;
    btnDown.innerHTML = `Down`;
    btnDown.addEventListener(`click`, () => {
        moveDwn(btnDown);
    })
    divGridRight.append(btnDown);
    const btnUp = document.createElement(`button`);
    btnUp.className = `upbtn`;
    btnUp.innerHTML = `Up`;
    btnUp.addEventListener(`click`, () => {
        moveu(btnUp);
    })
    divGridRight.append(btnUp);

    const div = document.createElement(`div`);
    div.className = `list`;
   div.appendChild(divGridLeft);
   div.appendChild(divGridRight);
    div.firstElementChild.addEventListener(`click`, ()=>{ 
        select(div.firstElementChild);
    })
    selectLists.appendChild(div);
    formInput.value = ``;
    } else {
        alert(`Input Is Empty`);
    }
});


//selecting Lists

function select(event){

    const parent = event.parentNode;
    const checkForClass = parent.classList.contains(`active-list`);

    if(checkForClass === false){
    parent.classList.add(`active-list`);
    } else if(checkForClass === true){
        parent.classList.remove(`active-list`);
    }

}


const slList = document.querySelectorAll(`.list .grid-left`);

slList.forEach((list) => {
    list.addEventListener(`click`, () => {

        select(list);

    })
});


/// Remove Lists

const removeBtn = document.querySelector(`.remove`);

removeBtn.addEventListener(`click`, (event) => {
    event.preventDefault();
    const select_lists = document.querySelectorAll(`.list`);
    for(i=0; i<select_lists.length; i++){
        if(select_lists[i].classList.contains(`active-list`)){
            selectLists.removeChild(select_lists[i]);
        }
    }
})

//Move Lists

    //Move Down

    function moveDwn(btn){
        let parent = btn.parentNode;
        parent = parent.parentNode;
        const nextSibling = parent.nextElementSibling;
        if(nextSibling !== null){
        nextSibling.after(parent);
        }
    }

    const moveDown = document.querySelectorAll(`.downbtn`);

    moveDown.forEach((btn) => {
        btn.addEventListener(`click`, (event) => {
            event.preventDefault();
            moveDwn(btn);
        })
    });

    
    //Move Up

    function moveu(btn){
        let parent = btn.parentNode;
        parent = parent.parentNode;
        const prevSibling = parent.previousElementSibling;
        if(prevSibling){
            prevSibling.before(parent);
        }
    }

    const moveUp = document.querySelectorAll(`.upbtn`);

    moveUp.forEach((btn) => {
        btn.addEventListener(`click`, (event) => {
            event.preventDefault();
            moveu(btn);
        })
    });


    //edit

    function edit(btn){
        let parent = btn.parentNode;
        parent = parent.parentNode;
        const child = parent.firstElementChild;
        const value = child.textContent;
        const newValue = prompt(`Edit List,`, value);
        if(newValue !== ``){
            child.textContent = newValue;
        }
    }

    
    const editBtn = document.querySelectorAll(`.editbtn`);

    editBtn.forEach((btn) => {
        btn.addEventListener(`click`, (event) => {
            event.preventDefault();
           edit(btn);
        })
    })