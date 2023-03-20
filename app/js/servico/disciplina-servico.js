class DisciplinaServico {
    repositorio;
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }
    inserir(nome, codigo) {
        const disciplina = new Disciplina(nome, codigo);
        return this.repositorio.inserir(disciplina);
    }
    inserirAlunoNaDisciplina(nomeAluno, idadeAluno, codigoDisciplina) {
        const aluno = new Aluno(nomeAluno, idadeAluno);
        return this.repositorio.inserirAlunoNaDisciplina(aluno, codigoDisciplina);
    }
    remover(nome) {
        this.repositorio.remover(nome);
    }
    listar() {
        return this.repositorio.listar();
    }
    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }
}
