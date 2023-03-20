class DisciplinaRepositorio {
    private _disciplina:Disciplina[];

    constructor() {
        this._disciplina = [];
    }

    inserir(disciplina:Disciplina) {
        this._disciplina.push(disciplina);
        return disciplina;
    }

    inserirAlunoNaDisciplina(aluno:Aluno,codigoDisciplina:string){
        const disciplina = this._disciplina.filter(disciplina => disciplina.codigo === codigoDisciplina);
        if(disciplina[0]){
            disciplina[0].adicionarAluno(aluno)
            return aluno
        }
        return undefined
    }

    remover(nome:string) {
        const indxRemocao = this._disciplina.findIndex((disciplina:Disciplina) => disciplina.nome ===nome );
        this._disciplina.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplina;
    }

    buscarPorNome(nome:string) {
        return this._disciplina.filter(disciplina => disciplina.nome === nome);
    }
}
