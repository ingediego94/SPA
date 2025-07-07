const routes = {
    "/": "./users.html",
    "/newuser": "./newuser.html",
    "/about": "./about.html"
};

document.body.addEventListener("click", e =>{
    
    if (e.target.matches("[data-link")){
        e.preventDefault();
        
        // me muestra la ruta 
        console.log(e.target.getAttribute("href"));
        
        //navigate()
    }
});

async function navigate(pathname){
    const route = routes[pathname];

    console.log( route );

    const html = await fetch(route)
        .then( res =>res.text() )
        console.log(html)
    document.getElementById("content").innerHTML = html

} 