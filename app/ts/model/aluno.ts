class Aluno {
    private _nome:string;
    private _idade:number;
    private _disciplinas:Disciplina[];

    constructor(nome:string, idade:number) {
        this._nome = nome;
        this._idade = idade;
        this._disciplinas = [];
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

    adicionarDisciplina(disciplina:Disciplina){
        this._disciplinas.push(disciplina)
    }
    removerDisciplina(nome:String){
        const indxRemocao = this._disciplinas.findIndex((disciplina:Disciplina) => disciplina.nome ===nome );
        this._disciplinas.splice(indxRemocao, 1);
    }
    listarDisciplinas(){
        return this._disciplinas;
    }
}
