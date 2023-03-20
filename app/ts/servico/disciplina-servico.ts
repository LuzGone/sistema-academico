class DisciplinaServico {
    private repositorio:DisciplinaRepositorio;
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome:string, codigo:string) {
        const disciplina = new Disciplina(nome, codigo);
        return this.repositorio.inserir(disciplina);
    }

    inserirAlunoNaDisciplina(nomeAluno:string,idadeAluno:number, codigoDisciplina:string){
        const aluno = new Aluno(nomeAluno,idadeAluno)
        return this.repositorio.inserirAlunoNaDisciplina(aluno,codigoDisciplina);
    }

    remover(nome:string) {
        this.repositorio.remover(nome);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome:string) {
        return this.repositorio.buscarPorNome(nome);
    }
}
