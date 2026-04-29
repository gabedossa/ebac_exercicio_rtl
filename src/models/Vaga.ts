class Vaga {
    id: number;
    titulo: string;
    empresa: string;
    localizacao: string;
    tipo: 'CLT' | 'PJ' | 'Freelance';
    salario: string;
    descricao: string;

    constructor(
        id: number,
        titulo: string,
        empresa: string,
        localizacao: string,
        tipo: 'CLT' | 'PJ' | 'Freelance',
        salario: string,
        descricao: string
    ) {
        this.id = id;
        this.titulo = titulo;
        this.empresa = empresa;
        this.localizacao = localizacao;
        this.tipo = tipo;
        this.salario = salario;
        this.descricao = descricao;
    }
}

export default Vaga;
