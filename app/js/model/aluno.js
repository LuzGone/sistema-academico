class Aluno {
    _nome;
    _idade;
    _disciplinas;
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
        this._disciplinas = [];
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    adicionarDisciplina(disciplina) {
        this._disciplinas.push(disciplina);
    }
    removerDisciplina(nome) {
        const indxRemocao = this._disciplinas.findIndex((disciplina) => disciplina.nome === nome);
        this._disciplinas.splice(indxRemocao, 1);
    }
    listarDisciplinas() {
        return this._disciplinas;
    }
}
