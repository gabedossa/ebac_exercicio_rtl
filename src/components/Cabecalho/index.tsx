import { Header, Logo, Nav, NavLink, NavButton } from './Cabecalho.styles';

const Cabecalho = () => (
    <Header>
        <Logo>Vagas<span>Tech</span></Logo>
        <Nav>
            <NavLink href="#">Início</NavLink>
            <NavLink href="#">Vagas</NavLink>
            <NavLink href="#">Empresas</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavButton href="#">Publicar Vaga</NavButton>
        </Nav>
    </Header>
);

export default Cabecalho;
