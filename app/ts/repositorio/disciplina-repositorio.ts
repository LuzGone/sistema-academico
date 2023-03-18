class DisciplinaRepositorio {
    private _disciplina:Disciplina[];

    constructor() {
        this._disciplina = [];
    }

    inserir(disciplina:Disciplina) {
        this._disciplina.push(disciplina);
        return disciplina;
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
