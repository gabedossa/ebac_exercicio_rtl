import { useState } from 'react';

import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Formulario from './components/Formulario';
import ListaVagas from './components/ListaVagas';

import todasVagas from './data/vagas';
import VagaModel from './models/Vaga';

type Filtro = {
    titulo: string;
    localizacao: string;
    tipo: string;
};

function App() {
    const [vagas, setVagas] = useState<VagaModel[]>(todasVagas);

    function handleFiltrar(filtro: Filtro) {
        const resultado = todasVagas.filter((vaga) => {
            const matchTitulo = vaga.titulo.toLowerCase().includes(filtro.titulo.toLowerCase());
            const matchLocal = vaga.localizacao.toLowerCase().includes(filtro.localizacao.toLowerCase());
            const matchTipo = filtro.tipo === '' || vaga.tipo === filtro.tipo;
            return matchTitulo && matchLocal && matchTipo;
        });
        setVagas(resultado);
    }

    return (
        <>
            <Cabecalho />
            <Hero />
            <Formulario onFiltrar={handleFiltrar} />
            <ListaVagas vagas={vagas} />
        </>
    );
}

export default App;
