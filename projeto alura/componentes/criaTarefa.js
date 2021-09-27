import BotaoConclui from "./concluiTarefas.js"
import BotaoDeleta from "./deletaTarefas.js"
import { carregaTarefa } from "./carregaTarefa.js"

// let tarefas = [];
export const handleNovoItem = (evento)=>{
        evento.preventDefault()

        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

        // const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const calendario = document.querySelector('[data-form-date]')
        // console.log(calendario);

        const data = moment(calendario.value);
        const dataFormatada=data.format('DD/MM/YYYY');
        const horario = data.format('HH:mm')

        const concluida = false;


        const dados= {
                valor,
                dataFormatada,
                horario,
                concluida
        };

        const tarefasAtualizadas=[...tarefas,dados]

        // const criaTarefa = Tarefa(dados);
        // lista.appendChild(criaTarefa);
        // tarefas.push(dados)

        
        // transformar os dados em string é através do JSON.stringify
        localStorage.setItem("tarefas",JSON.stringify(tarefasAtualizadas));
        input.value = ""
        carregaTarefa();
}

export const Tarefa = ({valor,horario, concluida}, id) => {

        const tarefa = document.createElement('li')
        
        // aqui vai add a class ao paragrafo criado pelo valor input
        const conteudo = `<p class = "content">${valor} ${horario}</p>`
        // criar um template de um parágrafo que receba tanto conteúdo HTML e JavaScript 
        // <p>${ }</p>
        //  utilizar o acento grave, precisamos utilizar a expressão ${ } que vai receber código JavaScript
        
        if(concluida){
                tarefa.classList.add('done')
        }
        tarefa.classList.add('task')

        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui(carregaTarefa,id))
        tarefa.appendChild(BotaoDeleta(carregaTarefa,id))
        
        // ele vai colocar o elemnto filho no final da "arvore"
        // Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. 
        // Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild 
        // que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai
        // Existem outros métodos que podemos utilizar para manipular nós:
        // insertBefore(pai, filho): Coloca um nó antes do outro.
        // replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
        // removeChild(elemento): Remove um nó da árvore.
        
        return tarefa
}