import VagaModel from '../../models/Vaga';
import {
    VagaCard,
    VagaHeader,
    VagaTitulo,
    TipoBadge,
    VagaEmpresa,
    VagaMeta,
    MetaItem,
    VagaDescricao,
    VagaFooter,
    VagaSalario,
    VagaButton,
} from './Vaga.styles';

type Props = {
    vaga: VagaModel;
};

const Vaga = ({ vaga }: Props) => (
    <VagaCard>
        <VagaHeader>
            <VagaTitulo>{vaga.titulo}</VagaTitulo>
            <TipoBadge tipo={vaga.tipo}>{vaga.tipo}</TipoBadge>
        </VagaHeader>
        <VagaEmpresa>{vaga.empresa}</VagaEmpresa>
        <VagaMeta>
            <MetaItem>📍 {vaga.localizacao}</MetaItem>
        </VagaMeta>
        <VagaDescricao>{vaga.descricao}</VagaDescricao>
        <VagaFooter>
            <VagaSalario>{vaga.salario}</VagaSalario>
            <VagaButton type="button">Ver vaga</VagaButton>
        </VagaFooter>
    </VagaCard>
);

export default Vaga;
