const data = [
    {
        id: 1,
        title: `გაიცანით - ჩვენი ერთ-ერთი საფირმო კერძი „ჯონსი“!`,
        text: `ეს ისეთი კერძია, თუ რამე განსაკუთრებულის დაგემოვნება და დანაყრება გინდა, აუცილებლად რომ უნდა გასინჯო ჩვენი 7 წლიანი გამოცდილების შედეგად, ზუსტად ვიცით თქვენი რეცეპტორებისთვის საუკეთესო გემოს კომბინაციები - გვენდე, დააგემოვნე და შეგვიფასე!`,
        price: `5,70`,
        img: `http://img.jpg`,
        category: `hot dishes`
    },
    {
        id: 2,
        title: `ხაჭაპური`,
        text: `უგემრიელესი სამეფო ხაჭაპური`,
        price: `2,50`,
        img: `http://img.jpg`,
        category: `hot dishes`
    },
    {
        id: 3,
        title: `სალათა`,
        text: `უგემრიელესი სალათა`,
        price: `3.00`,
        img: `http://img.jpg`,
        category: `salads`
    }
];


const select_news = document.querySelector(`.news`);

function mapData(){


const news = data.map( (e) => {
    return `
    <div class="news-box">
    <div class="news-title">${e.title}</div>
    <div class="news-text">${e.text}</div>
    <div>${e.price}</div>
    </div>
    `
});


select_news.innerHTML = news.join(``);

}

mapData();

//select buttons


const select_buttons = document.querySelectorAll(`.buttons button`);

select_buttons.forEach( (btn) => {
    btn.addEventListener(`click`, () => {
        switch(btn.textContent){
            case `all`:
                mapData();
                break;
            case `hot dishes`:
                    filter(`hot dishes`);
                break;
            case `salads`:
                filter(`salads`);
                break;
        }
    })
});


function filter(value){

    const filterData = data.filter( (e) => e.category === value );
    const news = filterData.map( (e) => {
        return ` 
        <div class="news-box">
        <div class="news-title">${e.title}</div>
        <div class="news-text">${e.text}</div>
        <div>${e.price}</div>
        </div>
        `
    });


select_news.innerHTML = news.join(``);

}