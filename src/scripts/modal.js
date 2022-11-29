function showForgetModal(){
    const body = document.querySelector("body");
    const forgetBtn = document.querySelector("#forgetBtn");

    forgetBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const modal = createForgetModal();
        
        body.appendChild(modal);
        closeForgetModal();
    })
}

function createForgetModal(){
    const section = document.createElement("section");
    const form = document.createElement("form");
    const title = document.createElement("h3");
    const closeButton = document.createElement("button");
    const conteudoTxt = document.createElement("p");
    const emailInput = document.createElement("input");
    const sendButton = document.createElement("button");

    section.classList.add("modalBoxContainer");
    form.classList.add("modalForm");
    title.innerText = "Recuperção de senha"
    closeButton.classList.add("closeBtn");
    closeButton.innerText = "X"
    conteudoTxt.innerText = "Para recuperar sua senha você deve enviar o link de recuperação para o seu e-mail:"
    emailInput.type = "text";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Digite aqui o seu e-mail"
    sendButton.classList.add("enviarBtn");
    sendButton.innerText = "Enviar E-mail";
    sendButton.type = "submit";

    form.append(title, closeButton, conteudoTxt, emailInput, sendButton);
    section.appendChild(form);

    return section;
}

function closeForgetModal(){
    const modalContainer = document.querySelector(".modalBoxContainer");
    const closeModalBtn = document.querySelector(".closeBtn");

    closeModalBtn.addEventListener("click", () =>{
        modalContainer.remove();
    })
}

showForgetModal();