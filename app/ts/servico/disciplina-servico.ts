class DisciplinaServico {
    private repositorio:DisciplinaRepositorio;
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome:string, codigo:string) {
        const disciplina = new Disciplina(nome, codigo);
        return this.repositorio.inserir(disciplina);
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
