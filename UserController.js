class UserController {
    constructor() 
    {throw new Error("Não da para fazer isso!") }
    

 static getUser(url) {
     let divUser = document.getElementById("content");        
     let userRequest = new XMLHttpRequest(); 
     userRequest.open("GET", url);

        userRequest.addEventListener ("load", () => {
            
            if (userRequest.status == 200) {
                       
             let userObj = JSON.parse(userRequest.responseText);
                        
             let gitUser = new User( userObj.avatar_url, 
                                    userObj.login, 
                                    userObj.name, 
                                    userObj.location, 
                                    userObj.followers, 
                                    userObj.following
                                    );
                                
            divUser.innerHTML = UserView.template(gitUser.returnUser()); 
                                        
        } else {
            divUser.innerHTML = `<div id="content" class="divContent">
                                 <img class="imgErro" src="giterro.png">
                                 </div>`
        }

                        
    });

    userRequest.send();  
}
}