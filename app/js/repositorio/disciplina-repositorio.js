class DisciplinaRepositorio {
    _disciplina;
    constructor() {
        this._disciplina = [];
    }
    inserir(disciplina) {
        this._disciplina.push(disciplina);
        return disciplina;
    }
    remover(nome) {
        const indxRemocao = this._disciplina.findIndex((disciplina) => disciplina.nome === nome);
        this._disciplina.splice(indxRemocao, 1);
    }
    listar() {
        return this._disciplina;
    }
    buscarPorNome(nome) {
        return this._disciplina.filter(disciplina => disciplina.nome === nome);
    }
}
