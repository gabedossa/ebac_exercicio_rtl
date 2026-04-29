import {
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    HeroStats,
    StatItem,
    StatNumber,
    StatLabel,
} from './Hero.styles';

const Hero = () => (
    <HeroSection>
        <HeroTitle>
            Encontre sua próxima <span>vaga tech</span>
        </HeroTitle>
        <HeroSubtitle>
            Conectamos talentos a empresas inovadoras. Explore centenas de oportunidades remotas e presenciais em todo o Brasil.
        </HeroSubtitle>
        <HeroStats>
            <StatItem>
                <StatNumber>1.200+</StatNumber>
                <StatLabel>Vagas ativas</StatLabel>
            </StatItem>
            <StatItem>
                <StatNumber>350+</StatNumber>
                <StatLabel>Empresas</StatLabel>
            </StatItem>
            <StatItem>
                <StatNumber>48h</StatNumber>
                <StatLabel>Tempo médio de resposta</StatLabel>
            </StatItem>
        </HeroStats>
    </HeroSection>
);

export default Hero;
