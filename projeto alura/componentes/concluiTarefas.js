const concluirTarefa = (atualiza,id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
    localStorage.setItem('tarefas',     JSON.stringify(tarefasCadastradas))
    atualiza();
}

const BotaoConclui = (atualiza,id) => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = "Concluir"
    botaoConclui.addEventListener('click',()=>concluirTarefa(atualiza,id))
    return botaoConclui
}

export default BotaoConclui