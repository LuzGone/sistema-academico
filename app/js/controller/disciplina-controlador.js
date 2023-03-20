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
            this.mostrarDisciplinaNoHTML(nomeDisciplina, codigoDisciplina);
            alert('Disciplina inserida com sucesso!');
        }
        else {
            alert('Algum erro ocorreu!');
        }
    }
    mostrarDisciplinaNoHTML(nome, codigo) {
        const listaDisciplinas = document.getElementById("lista-disciplinas");
        const disciplina = `
        <div class="disciplina" id="${codigo}">
            <p>Nome da Disciplina: ${nome}</p>
            <p>Código da Disciplina: ${codigo}</p>
            <p>Lista de Alunos Cadastrados:</p>
        </div>`;
        listaDisciplinas.insertAdjacentHTML('beforeend', disciplina);
    }
    mostrarAlunoNaDisciplinaHTML(codigoDisciplina, nomeAluno, idadeAluno) {
        const div = document.getElementById(codigoDisciplina);
        const aluno = `
            <p>${nomeAluno} - ${idadeAluno}</p>
        `;
        div.insertAdjacentHTML("beforeend", aluno);
    }
    removerDisciplinaDaLista(nome) {
        this.disciplinaServico.remover(nome);
    }
    inserirAlunoNaDisciplina() {
        const nomeAluno = document.querySelector("#nome-aluno").value;
        const idadeAluno = Number(document.querySelector("#idade-aluno").value);
        const codigoDisciplina = document.querySelector("#codigo-disciplina").value;
        const aluno = this.disciplinaServico.inserirAlunoNaDisciplina(nomeAluno, idadeAluno, codigoDisciplina);
        if (aluno) {
            this.mostrarAlunoNaDisciplinaHTML(codigoDisciplina, nomeAluno, idadeAluno);
            alert('Aluno inserido com sucesso!');
        }
        else {
            alert('Diciplina Não Encontrada');
        }
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
