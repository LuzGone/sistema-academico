class Disciplina {
    _codigo;
    _nome;
    _alunos = [];
    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
    }
    get codigo() {
        return this._codigo;
    }
    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    adicionarAluno(aluno) {
        this._alunos.push(aluno);
    }
    removerAluno(nome) {
        const indexRemocao = this._alunos.findIndex(aluno => aluno.nome === nome);
        this._alunos.splice(indexRemocao, 1);
    }
    listarAlunos() {
        return this._alunos;
    }
}
