let btn= document.querySelector(".toogle_container");
let body=document.body;
let card= document.querySelectorAll(".card");
let toogle= document.querySelector(".toogle");
let overview= document.querySelector(".overview");
let view= document.querySelector(".view");
let site_def= document.querySelectorAll(".site_def");
let count_type=document.querySelectorAll(".count_type");
let  dark_mode =false;

btn.addEventListener('click',()=>{

    if(dark_mode)
    {
        dark_mode=false;
        btn.setAttribute('style','justify-content: flex-end;')
        body.classList.remove("body_dark");
        toogle.setAttribute('style','background-color: var(--White);');
        overview.setAttribute('style','color: var(--DarkGrayishBlue);');
        view.setAttribute('style','color: var(--DarkGrayishBlue);');
        
        count_type.forEach(elm => {
            elm.setAttribute('style','color: var(--DarkGrayishBlue);')
        })

        site_def.forEach(elm => {
            elm.setAttribute('style','color: var(--DarkGrayishBlue);');
        })

        card.forEach(elm => {
            elm.classList.remove("dark");
        });
        
        
        console.log('dark');

    }
    else
    {
        dark_mode=true;
        btn.setAttribute('style','justify-content: flex-start;')
        body.classList.add("body_dark");
        toogle.setAttribute('style','background-color: var(--VeryDarkBlue);');
        overview.setAttribute('style','color: var(--White);');
        view.setAttribute('style','color: var(--White);');
        
        count_type.forEach(elm =>{
            elm.setAttribute('style','color: var(--DesaturatedBlue);');
        })
        
        site_def.forEach(elm => {
            elm.setAttribute('style','color: var(--DesaturatedBlue);');
        })

        card.forEach(elm => {
            elm.classList.add("dark");
        });
        
    }
    
})