class Aluno {
    _nome;
    _idade;
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
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
}
