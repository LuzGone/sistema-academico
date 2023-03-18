class Aluno {
    private _nome:string;
    private _idade:number;

    constructor(nome:string, idade:number) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome:string) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade:number) {
        this._idade = novaIdade;
    }
}
