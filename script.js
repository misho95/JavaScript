
const mainUl = document.querySelector(`.main ul`);
const spanBtn = document.querySelectorAll(`.main ul li button.move`);

const spanBtnUp = document.querySelectorAll(`.main ul li button.moveUp`);

//Move Child Down
spanBtn.forEach((btn) => {
    btn.addEventListener(`click`, () => {
        const select_parent = btn.parentElement;
        console.log(select_parent);
        const nextSibling = select_parent.nextElementSibling;
        nextSibling.after(select_parent);                                                        
    })
})

//Move Child Up
spanBtnUp.forEach((btn) => {
    btn.addEventListener(`click`, () => {
      
        const select_parent = btn.parentElement;
        let nextSibling = select_parent.previousElementSibling;
        nextSibling = nextSibling.previousElementSibling;
        if(nextSibling !== null){
        nextSibling.after(select_parent);
        } else {
            console.log(`error`);
            const prev = select_parent.previousElementSibling;
            console.log(prev);
            select_parent.after(prev);
            
        }
                                                        
    })
})

//Delete Child

const spanBtnDelete = document.querySelectorAll(`.main ul li button.delete`);

spanBtnDelete.forEach((btn) => {
    btn.addEventListener(`click`, () => {
        console.log(`click`);
        const select_parent = btn.parentElement;
        mainUl.removeChild(select_parent);
    })
})


