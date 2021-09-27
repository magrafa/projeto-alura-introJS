
import { handleNovoItem } from "./componentes/criaTarefa.js"
import { carregaTarefa } from "./componentes/carregaTarefa.js"


const novaTarefa = document.querySelector('[data-form-button]')
// constante 
novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa();



