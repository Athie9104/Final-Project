let signBtn = document.querySelectorAll('.btn'),
    signCheck     =true,
    socialTexts   =['Facebook', 'twitter', 'Google+', 'Linked In'],
    socialIcons   =['fa fa-facebook', 'fa fa-twitter', 'fa fa-google-plus', 'fa fa-linkedin'],
    socialLinks   =['#','#','#','#'],
    socialClasses =['fb', 'tw', 'gl', 'in'],
    socialTarget  ='';

function validate(form,submit) {
    let input={
        firstName : form['firstname'],
        lastName  : form['lastname'],
        userName  : form['username'],
        email     : form['email'],
        password  : form['password'],
        rePassword: form['re-password']
    },
        selects=form.querySelectorAll('select');
    for(var s=0;s<selects.length;s++) {
        selects[s].onchange=function() {
            if(this.options[this.selectedIndex].value==='') {
                this.classList.add('error');
                this.classList.remove('done');
            } else {
                this.classList.add('done');
                this.classList.remove('error');
            }
        }
    }
    form.onsubmit=function(e){
        for(let key in input) {
            if(input[key]!==undefined&&!input[key].classList.contains('done')) {
                input[key].classList.add('error');
                e.preventDefault();
            }
        } 
        for(let s=0;s<selects.length;s++) {
            if(selects[s].options[selects[s].selectedIndex].value==='') {
                selects[s].classList.add('error');
                e.preventDefault();
            }
        }
    }
}

// Function for signing in
function signIn() {
    if(signCheck) {
        let signForm=document.createElement('div');
        signForm.classList.add('sign-form');
        let content=document.createElement('div');
        content.classList.add('content', 'up');
        setTimeout(function(){
            signForm.classList.add('on');
            content.classList.remove('up');
        },200);
        
        //Header
        let header=document.createElement('div');
        header.classList.add('sign-header');
        let title=document.createElement('h2');
        title.textContent='Sign In';
        header.appendChild(title);
        let close=document.createElement('span'),
            icon=document.createElement('i');
        close.addEventListener('click', function(){
            signForm.classList.remove('on');
            content.classList.add('down');
            setTimeout(function(){
                signForm.parentNode.removeChild(signForm);
            },1000);
            signCheck=true;
            close.removeEventListener('click', this, false)
        }, false)
        icon.className='fa fa-times';
        close.appendChild(icon);
        header.appendChild(close);
        content.appendChild(header);

        //body
        let body=document.createElement('div');
        body.classList.add('sign-body');
        let form=document.createElement('form'),
            inputs=[];
        for(let i=0;i<4;i++) {
            let label=document.createElement('label'),
                input=document.createElement('input');
                
            input.setAttribute('type', ['text', 'text', 'password', 'submit'][i]);
            if(i<3) {
                input.setAttribute('name', ['username', 'email', 'password'][i]);
                input.setAttribute('placeholder', ['Username', 'Email', 'Password'][i]);
                inputs.push(input);
                input.addEventListener('focus', function(){
                    let inputHolder=this.getAttribute('placeholder');
                    this.setAttribute('placeholder', '');
                    this.addEventListener('blur', inputBlur, false);
                    function inputBlur(){
                        if(this.value==='') {
                            this.classList.add('error');
                            this.classList.remove('done');
                        } else {
                            this.classList.add('done');
                            this.classList.remove('error');
                            let userCheck = /^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$/;
                            let emailCheck = /\S+@\S+\.\S+/;
                            if(this.name==='email'&&emailCheck.test(this.value)||
                               this.name==='username'&&userCheck.test(this.value)) {
                                this.classList.add('done');
                                this.classList.remove('error');
                            } else if(this.name==='email'&&!emailCheck.test(this.value)||
                                      this.name==='username'&&!userCheck.test(this.value)) {
                                this.classList.add('error');
                                this.classList.remove('done');
                            }
                        }
                        this.setAttribute('placeholder', inputHolder); 
                        this.removeEventListener('blur', inputBlur, false)
                    }
                }, false);
            }
            validate(form)
            label.appendChild(input);
            form.appendChild(label);
        }
        body.appendChild(form);
        let a=document.createElement('a');
        a.textContent='New Account'
        a.onclick=function() {
            close.click();
            signBtn[1].click();
        }
        body.appendChild(a);
        content.appendChild(body);

        //footer
        let footer=document.createElement('div');
        footer.classList.add('sign-footer');
        let anotherAccound=document.createElement('div');
        anotherAccound.classList.add('another-account');
        let text=document.createElement('h2');
        text.textContent='or sign in with social account';
        anotherAccound.appendChild(text);
        footer.appendChild(anotherAccound);
        let socialAccount=document.createElement('div');
        socialAccount.classList.add('social-account');
        for(let i=0;i<socialTexts.length;i++) {
            let a=document.createElement('a'),
                icon=document.createElement('i');
            icon.className=socialIcons[i];
            a.textContent=socialTexts[i];
            a.setAttribute('href', socialLinks[i]);
            a.setAttribute('target', socialTarget);
            a.classList.add('social', socialClasses[i]);
            a.appendChild(icon)
            socialAccount.appendChild(a)
        }
        footer.appendChild(socialAccount);
        content.appendChild(footer);
        signForm.appendChild(content);
        signCheck=!signCheck;
        document.body.appendChild(signForm);   
    }
};

// Function to sign up
function signUp() {
    if(signCheck) {
        let signForm=document.createElement('div');
        signForm.classList.add('sign-form');
        let content=document.createElement('div');
        content.classList.add('content', 'up');
        setTimeout(function(){
            signForm.classList.add('on');
            content.classList.remove('up');
        },200);
        //Header
        let header=document.createElement('div');
        header.classList.add('sign-header');
        let title=document.createElement('h2');
        title.textContent='Create New Account';
        header.appendChild(title);
        let close=document.createElement('span'),
            icon=document.createElement('i');
        close.addEventListener('click', function(){
            signForm.classList.remove('on');
            content.classList.add('down');
            setTimeout(function(){
                signForm.parentNode.removeChild(signForm);
            },1000);
            signCheck=true;
            close.removeEventListener('click', this, false)
        }, false)
        icon.className='fa fa-times';
        close.appendChild(icon);
        header.appendChild(close);
        content.appendChild(header);
        //body
        let body=document.createElement('div');
        body.classList.add('sign-body');
        let form=document.createElement('form');
        for(let i=0;i<6;i++) {
            let input=document.createElement('input'),
                label=document.createElement('label');
            input.setAttribute('type', ['text', 'text','text','text','password','password'][i])
            input.setAttribute('name', ['firstname', 'lastname','username','email','password','re-password'][i])
            label.setAttribute('class', ['firstname', 'lastname','username','email','password','re-password'][i])
            input.setAttribute('placeholder', ['First Name', 'Last Name','User Name','Email','Password','Repeat Password'][i]);
            if(input.name==='password'){
                let pass=input;   
            }
            input.addEventListener('focus', function(){
                let inputHolder=this.getAttribute('placeholder');
                this.setAttribute('placeholder', '');
                this.addEventListener('blur', inputBlur, false);
                function inputBlur(){
                    if(this.value==='') {
                        this.classList.add('error');
                        this.classList.remove('done');
                    } else {
                        this.classList.add('done');
                        this.classList.remove('error');
                        let textCheck= /^[a-zA-Z]*[a-zA-Z]$/;
                        let userCheck = /^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$/;
                        let emailCheck = /\S+@\S+\.\S+/;
                        let passCheck   = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                        if(this.name==='firstname'&&emailCheck.test(this.value)||
                           this.name==='lastname'&&emailCheck.test(this.value)||
                           this.name==='email'&&emailCheck.test(this.value)||
                           this.name==='username'&&userCheck.test(this.value)||
                           this.name==='password'&&passCheck.test(this.value)||
                           this.name==='re-password'&&this.value===pass.value&&passCheck.test(this.value)) {
                            this.classList.add('done');
                            this.classList.remove('error');
                        } else if(this.name==='firstname'&&!textCheck.test(this.value)||
                                  this.name==='lastname'&&!textCheck.test(this.value)||
                                  this.name==='email'&&!emailCheck.test(this.value)||
                                  this.name==='username'&&!userCheck.test(this.value)||
                                  this.name==='password'&&!passCheck.test(this.value)||
                                  this.name==='re-password'&&this.value!==pass.value&&!passCheck.test(this.value)) {
                            this.classList.add('error');
                            this.classList.remove('done');
                        }
                    }
                    this.setAttribute('placeholder', inputHolder); 
                    this.removeEventListener('blur', inputBlur, false)
                }
            }, false);
            
            
            label.appendChild(input);
            form.appendChild(label);
        }
        for(let i=0;i<3;i++) {
            let select=document.createElement('select');
            select.classList.add(['day','month','year'][i]);
            function days(){
                let option=document.createElement('option');
                option.textContent='Day';
                option.hidden=true;
                option.value='';
                select.appendChild(option);
                for(let d=1;d<32;d++) {
                    let option=document.createElement('option');
                    option.textContent=d;
                    option.value=d;
                    select.appendChild(option);
                }
                select.appendChild(option);
            }
            function months(){
                let option=document.createElement('option');
                option.textContent='Month';
                option.hidden=true;
                option.value='';
                select.appendChild(option);
                let monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
                for(let m=0;m<monthNames.length;m++) {
                    let option=document.createElement('option');
                    option.textContent=monthNames[m];
                    option.value=monthNames[m].toLowerCase();
                    select.appendChild(option);
                }
                select.appendChild(option);
            }
            function years(){
                let option=document.createElement('option');
                option.textContent='Year';
                option.hidden=true;
                option.value='';
                select.appendChild(option);
                for(let y=new Date().getFullYear();y>=1950;y--) {
                    let option=document.createElement('option');
                    option.textContent=y;
                    option.value=y;
                    select.appendChild(option);
                }
            }
            [days,months,years][i]();
            form.appendChild(select);
        }
        let select=document.createElement('select');
        select.classList.add('gender');
        for(let i=0;i<3;i++) {
            let option=document.createElement('option');
            option.textContent=['I\'m','Male','Female'][i];
            option.value='';
            option.setAttribute(['hidden','value','value'][i], [true,'male','female'][i]);
            select.appendChild(option);
        }
        form.appendChild(select);
        let submit=document.createElement('input');
        submit.textContent='Create Account';
        submit.type='submit';
        form.appendChild(submit);
        validate(form);
        body.appendChild(form);
        let a=document.createElement('a');
        a.textContent='Have Account?'
        a.classList.add('have-account');
        a.onclick=function() {
            close.click();
            signBtn[0].click();
        }
        body.appendChild(a);
        content.appendChild(body);
        signForm.appendChild(content);
        signCheck=!signCheck;
        document.body.appendChild(signForm);
    }
}

signBtn[0].addEventListener('click', signIn, false);
signBtn[1].addEventListener('click', signUp, false);