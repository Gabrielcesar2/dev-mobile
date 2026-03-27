import { useState } from "react";
import { Botao } from "./Botao";

export default function App() {
  const [listaTarefas, setListaTarefas] = useState([
    { id: 1, texto: "Estudar React", feita: false }
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (novaTarefa.trim() === "") return;

    const tarefaObj = {
      id: Date.now(),
      texto: novaTarefa,
      feita: false
    };

    setListaTarefas([...listaTarefas, tarefaObj]);
    setNovaTarefa("");
  }

  function removerTarefa(id) {
    const listaFiltrada = listaTarefas.filter(tarefa => tarefa.id !== id);
    setListaTarefas(listaFiltrada);
  }

  function alternarFeito(id) {
    const listaAtualizada = listaTarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, feita: !tarefa.feita };
      }
      return tarefa;
    });
    setListaTarefas(listaAtualizada);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de tarefas</h1>

      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <Botao onClick={adicionarTarefa}>Adicionar</Botao>
      </div>

      <hr />

      <ul>
        {listaTarefas.map((tarefa) => (
          <li key={tarefa.id} style={{ marginBottom: '10px', listStyle: 'none' }}>
            <input
              type="checkbox"
              checked={tarefa.feita}
              onChange={() => alternarFeito(tarefa.id)}
            />

            <span style={{
              textDecoration: tarefa.feita ? 'line-through' : 'none',
              margin: '0 10px'
            }}>
              {tarefa.texto}
            </span>

            <Botao onClick={() => removerTarefa(tarefa.id)}>Remover</Botao>
          </li>
        ))}
      </ul>
    </div>
  );
}