let HOST = "http://localhost/sKhalid/php";

let btn = document.querySelector("#submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;

  const login = async () => {
    const response = await fetch(
      `${HOST}/?login&email=${email}&password=${pass}`
    );
    const content = await response.json();

   if(content.status === 1){
    window.location.href = `upload.html`
   }else{
    document.querySelector(".login-text").innerHTML =`wrong login credentials`
   }
  };
  login();
});
