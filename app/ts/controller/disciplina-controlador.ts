class DisciplinaControlador {
    private disciplinaServico:DisciplinaServico;

    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = (<HTMLInputElement>document.querySelector("#nome")).value;
        const codigoDisciplina = (<HTMLInputElement>document.querySelector("#codigo")).value;
        const disciplina = this.disciplinaServico.inserir(nomeDisciplina, codigoDisciplina);
        if (disciplina) {
            this.mostrarAlunoNoHTML(nomeDisciplina, codigoDisciplina);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('Algum erro ocorreu!');
        }
    }

    mostrarAlunoNoHTML(nome:string, codigo:string) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(nome);
                (<HTMLElement>event.target).parentElement.remove();
                //Entender como funciona o possível retorno nulo, por causa do strict true no tsconfig.
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(nome:string) {
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

