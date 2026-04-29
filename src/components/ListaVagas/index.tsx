import VagaModel from '../../models/Vaga';
import Vaga from '../Vaga';
import {
    Section,
    SectionHeader,
    SectionTitle,
    ResultCount,
    Grid,
    EmptyMessage,
} from './ListaVagas.styles';

type Props = {
    vagas: VagaModel[];
};

const ListaVagas = ({ vagas }: Props) => (
    <Section>
        <SectionHeader>
            <SectionTitle>Vagas disponíveis</SectionTitle>
            <ResultCount>{vagas.length} resultado{vagas.length !== 1 ? 's' : ''}</ResultCount>
        </SectionHeader>
        <Grid>
            {vagas.length > 0 ? (
                vagas.map((vaga) => <Vaga key={vaga.id} vaga={vaga} />)
            ) : (
                <EmptyMessage>Nenhuma vaga encontrada com os filtros aplicados.</EmptyMessage>
            )}
        </Grid>
    </Section>
);

export default ListaVagas;
