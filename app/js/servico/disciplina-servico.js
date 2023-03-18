class DisciplinaServico {
    repositorio;
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }
    inserir(nome, codigo) {
        const disciplina = new Disciplina(nome, codigo);
        return this.repositorio.inserir(disciplina);
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
