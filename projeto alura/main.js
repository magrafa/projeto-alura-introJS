
import BotaoConclui from "./componentes/concluiTarefas.js"
import BotaoDeleta from "./componentes/deletaTarefas.js"
const criarTarefa = (evento) => {
        evento.preventDefault()
        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value
        console.log(valor)
        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        // aqui vai add a class ao paragrafo riado pelo valor input
        const conteudo = `<p class = "content">${valor}</p>`
        // criar um template de um parágrafo que receba tanto conteúdo HTML e JavaScript 
        // <p>${ }</p>
        //  utilizar o acento grave, precisamos utilizar a expressão ${ } que vai receber código JavaScript    
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
        // ele vai colocar o elemnto filho no final da "arvore"
        // Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. 
        // Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild 
        // que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai
        // Existem outros métodos que podemos utilizar para manipular nós:
        // insertBefore(pai, filho): Coloca um nó antes do outro.
        // replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
        // removeChild(elemento): Remove um nó da árvore.
        input.value = ""
}
const novaTarefa = document.querySelector('[data-form-button]')
// constante 
novaTarefa.addEventListener('click', criarTarefa)



