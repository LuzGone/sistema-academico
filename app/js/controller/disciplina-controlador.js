class DisciplinaControlador {
    disciplinaServico;
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }
    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = document.querySelector("#codigo").value;
        const disciplina = this.disciplinaServico.inserir(nomeDisciplina, codigoDisciplina);
        if (disciplina) {
            this.mostrarAlunoNoHTML(nomeDisciplina, codigoDisciplina);
            alert('Disciplina inserida com sucesso!');
        }
        else {
            alert('Algum erro ocorreu!');
        }
    }
    mostrarAlunoNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;
        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";
        elementoBotaoApagar.addEventListener('click', (event) => {
            this.removerDisciplinaDaLista(nome);
            event.target.parentElement.remove();
            //Entender como funciona o possível retorno nulo, por causa do strict true no tsconfig.
        });
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }
    removerDisciplinaDaLista(nome) {
        this.disciplinaServico.remover(nome);
    }
}
//
//
//
// for (let aluno of alunos) {
//     // colocar no html nome - idade
//     mostrarAlunoNoHTML(aluno.nome, aluno.idade);
// }
//
// function inserirAluno() {
// }
//
//
