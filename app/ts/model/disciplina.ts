class Disciplina{
    private _codigo:string
    private _nome:string
    private _alunos:Aluno[] = [];

    constructor(nome:string,codigo:string){
        this._codigo = codigo
        this._nome = nome
    }

    get codigo(){
        return this._codigo
    }

    set codigo(novoCodigo:string){
        this._codigo = novoCodigo
    }

    get nome(){
        return this._nome
    }

    set nome(novoNome:string){
        this._nome = novoNome
    }

    adicionarAluno(aluno:Aluno){
        this._alunos.push(aluno)
    }

    removerAluno(nome:String){
        const indexRemocao = this._alunos.findIndex(aluno => aluno.nome === nome) 
        this._alunos.splice(indexRemocao,1)
    }

    listarAlunos(){
        return this._alunos;
    }
}