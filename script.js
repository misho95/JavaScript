//Move Child Down

const mainUl = document.querySelector(`.main ul`);
const spanBtn = document.querySelectorAll(`.main ul li button.move`);

const spanBtnUp = document.querySelectorAll(`.main ul li button.moveUp`);

spanBtn.forEach((btn) => {
    btn.addEventListener(`click`, () => {
        const select_parent = btn.parentElement;
        const nextSibling = select_parent.nextElementSibling;
        mainUl.appendChild(select_parent);
       let allElse = nextSibling.nextElementSibling;
            while(allElse != select_parent){
                let current = allElse;
                allElse = allElse.nextElementSibling;
                mainUl.appendChild(current);
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

//add Note

const select_formInput = document.querySelector(`.main form input`);
const select_formBtn = document.querySelector(`.main form button`);

select_formBtn.addEventListener(`click`, (evnet) => {
    evnet.preventDefault();
    const li = document.createElement(`li`);
    li.innerHTML = select_formInput.value + `<button class="move">Move Down</button><button class="delete">Delete</button>`;
    mainUl.appendChild(li);
    select_formInput.value = ``;
})
