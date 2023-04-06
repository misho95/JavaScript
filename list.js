const formInput = document.querySelector(`.list-form input`);
const formBtn = document.querySelector(`.list-form button`);
const selectLists = document.querySelector(`.lists`);


//add new list

formBtn.addEventListener(`click`, (event) => {
    event.preventDefault();
    const value = formInput.value;
    const mapList = `
    <div class="grid-left">${value}</div>
    <div class="grid-right">
        <button class="editbtn">Edit</button>
        <button class="downbtn">Down</button>
        <button class="upbtn">Up</button>
    </div>`;

    const div = document.createElement(`div`);
    div.className = `list`;
    div.innerHTML = mapList;
    selectLists.appendChild(div);
    formInput.value = ``;
});


//selecting Lists

const slList = document.querySelectorAll(`.list .grid-left`);

slList.forEach((list) => {
    list.addEventListener(`click`, () => {
        const parent = list.parentNode;
        const checkForClass = parent.classList.contains(`active-list`);

        if(checkForClass === false){
        parent.classList.add(`active-list`);
        } else if(checkForClass === true){
            parent.classList.remove(`active-list`);
        }
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

    //Move Up

    const moveDown = document.querySelectorAll(`.downbtn`);

    moveDown.forEach((btn) => {
        btn.addEventListener(`click`, (event) => {
            event.preventDefault();
            let parent = btn.parentNode;
            parent = parent.parentNode;
            const nextSibling = parent.nextElementSibling;
            if(nextSibling !== null){
            nextSibling.after(parent);
            }
        })
    });

    
    //Move Up

    const moveUp = document.querySelectorAll(`.upbtn`);

    moveUp.forEach((btn) => {
        btn.addEventListener(`click`, (event) => {
            event.preventDefault();
            let parent = btn.parentNode;
            parent = parent.parentNode;
            const prevSibling = parent.previousElementSibling;
            if(prevSibling){
                prevSibling.before(parent);
            }
        })
    });


    //edit

    
    const editBtn = document.querySelectorAll(`.editbtn`);

    editBtn.forEach((btn) => {
        btn.addEventListener(`click`, (event) => {
            event.preventDefault();
            let parent = btn.parentNode;
            parent = parent.parentNode;
            const child = parent.firstElementChild;
            const value = child.textContent;
            const newValue = prompt(`Edit List,`, value);
            if(newValue !== ``){
                child.textContent = newValue;
            }
        })
    })