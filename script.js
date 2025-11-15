let enviar = document.querySelector("#enviar");
let limpar = document.querySelector("#limpar");
let contador = document.querySelector("#contador");
let ul = document.querySelector("ul");
let qtdTarefas = 0;
contador.textContent = 0;

function enviarTarefa(e) {
    e.preventDefault();
    let input = document.querySelector("input[type='text']");
    let li = document.createElement("li");
    let button = document.createElement("button");
    let text = document.createTextNode(input.value)
    console.log(input);

    if (!input.value) {
        input.style.border = "1px solid red"
        alert("🤔 digite uma tarefa")
        return
    }
    input.style.border = "1px solid #dee2e6";
    li.setAttribute("class", "item list-group-item d-flex justify-content-between align-items-center")
    button.setAttribute("class", "btn btn-close")
    li.appendChild(text)
    li.appendChild(button)
    input.value = "";
    ul.appendChild(li)
    qtdTarefas++;
    contador.textContent = qtdTarefas
    // evento risca a tarefa
    li.addEventListener('click', (e) => {
        e.preventDefault()
        li.classList.toggle("riscar")

    })
    // exclui uma tarefa
    button.addEventListener('click', (e) => {
        ul.removeChild(li)
         qtdTarefas--;
    contador.textContent = qtdTarefas

    })

    
}

function limparTudo(){
    qtdTarefas =0;
    contador.textContent=0;
    ul.innerHTML="";
}

///add tarfas
enviar.addEventListener("click", enviarTarefa)
// paga todas as tarefas
limpar.addEventListener("click",limparTudo)


