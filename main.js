
        let formError = false;

        document.querySelector('form').onsubmit = (e)=>{
            console.log(e);
            e.preventDefault();
            clearErrors();
            let username = document.querySelector('[name="username"]');
            let email = document.querySelector('[name="email"]');
            let password = document.querySelector('[name="password"]');
            let confirmPassword = document.querySelector('[name="confirm-password"]');

            let reg = /[a-z|0-9|\_\+]{3,}\@+[a-z]+\.+[a-z]/gm;
            let reg2 = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/gm;

            function showError(el,text){
                let errorSpan = document.createElement("span");
                errorSpan.innerText = text;
                errorSpan.style.color = "red";
                el.after(errorSpan);
            }


            function clearErrors(){
                formError = false;
                if(document.querySelectorAll('span')){
                    for(span of document.querySelectorAll('span')){
                    span.remove();
                }
                }
                

                for(input of document.querySelectorAll('input')){
                    input.classList.remove("error");
                }



            }

            if(username.value.length<3){
                username.classList.add("error");
                showError(username,"Pārbaudiet lauku!"); 
                formError = true;
            }

            if(!email.value.match(reg)){
                email.classList.add("error");
                showError(email,"Pārbaudiet epastu!"); 
                formError = true;  
            }
            if(!password.value.match(reg2)){
                password.classList.add("error");
                showError(password,"Parole neatbilst noteikumiem!");
                formError = true;   
            }

            if(password.value !== confirmPassword.value || confirmPassword.value==""){
                confirmPassword.classList.add("error");
                showError(confirmPassword,"Parole nesakrīt"); 
                formError = true;
            }




            if(formError==false){
                    alert("forma strādā")
                // document.querySelector('form').submit();

                
            }

        }

  