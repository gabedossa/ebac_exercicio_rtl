import { ChangeEvent, FormEvent, useState } from 'react';
import {
    FormSection,
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    FormSelect,
    FormButton,
} from './Formulario.styles';

type FiltroState = {
    titulo: string;
    localizacao: string;
    tipo: string;
};

type Props = {
    onFiltrar: (filtro: FiltroState) => void;
};

const Formulario = ({ onFiltrar }: Props) => {
    const [filtro, setFiltro] = useState<FiltroState>({
        titulo: '',
        localizacao: '',
        tipo: '',
    });

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFiltro({ ...filtro, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onFiltrar(filtro);
    }

    return (
        <FormSection>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel htmlFor="titulo">Cargo ou palavra-chave</FormLabel>
                    <FormInput
                        id="titulo"
                        name="titulo"
                        type="text"
                        placeholder="Ex: Desenvolvedor React"
                        value={filtro.titulo}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="localizacao">Localização</FormLabel>
                    <FormInput
                        id="localizacao"
                        name="localizacao"
                        type="text"
                        placeholder="Ex: São Paulo ou Remoto"
                        value={filtro.localizacao}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="tipo">Tipo de contrato</FormLabel>
                    <FormSelect
                        id="tipo"
                        name="tipo"
                        value={filtro.tipo}
                        onChange={handleChange}
                    >
                        <option value="">Todos</option>
                        <option value="CLT">CLT</option>
                        <option value="PJ">PJ</option>
                        <option value="Freelance">Freelance</option>
                    </FormSelect>
                </FormGroup>
                <FormButton type="submit">Buscar vagas</FormButton>
            </Form>
        </FormSection>
    );
};

export default Formulario;
