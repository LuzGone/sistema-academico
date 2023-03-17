class Disciplina{
    private _codigo:Number
    private _nome:String
    private _alunos = [];

    constructor(codigo:Number,nome:String){
        this._codigo = codigo
        this._nome = nome
    }

    get codigo(){
        return this._codigo
    }

    set codigo(novoCodigo){
        this._codigo = novoCodigo
    }

    get nome(){
        return this._nome
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    adicionarAluno(){
        
    }
}