import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const About = () => {
    const { t } = useTranslation();

    // Acessando diretamente as chaves 'aboutDetails' e 'services' do JSON
    const aboutDetails = t('aboutDetails', { returnObjects: true });
    const services = t('services', { returnObjects: true });

    // Filtra serviços válidos e limita a exibição a 3
    const filteredServices = services
        ? services.filter(service => service.title && service.text).slice(0, 3)
        : [];

    return (
        <Section id="about">
            <Title>{t('titleAbout')}</Title>
            
            {/* Exibindo os detalhes sobre mim */}
            {aboutDetails && aboutDetails.map((detail, index) => (
                <Paragraph key={index}>{detail.textAbout}</Paragraph>
            ))}
            
            <SubTitle>{t('subTitle')}</SubTitle>
            <ServicesCards>
                {filteredServices.map((service, index) => (
                    <ServiceCard key={index}>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceText>{service.text}</ServiceText>
                    </ServiceCard>
                ))}
            </ServicesCards>
        </Section>
    );
};

const Title = styled.h1`
    font-size: 27px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const SubTitle = styled.h2`
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const Section = styled.section`
    padding: 40px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

const Paragraph = styled.p`
    font-size: 1.8rem;
    color: var(--color-text);
    margin: 20px auto;
    padding: 0 70px 0 70px;

    @media (max-width: 768px) {
        padding: 0 20px 0 20px;
        font-size: 1.2rem;
    }
`;

const ServicesCards = styled.div`
    display: flex;
    justify-content: center; /* Centraliza os cards */
    flex-wrap: wrap; /* Permite que os cards quebrem para a próxima linha */
    gap: 20px; /* Espaçamento entre os cards */
    margin-top: 20px;
    
`;

const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--bg-secondary);
    border-radius: 8px;
    max-width: 330px; /* Limita o tamanho máximo dos cards */
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    @media (max-width: 1024px) {
        width: 45%; /* Dois cards por linha em telas médias */
    }

    @media (max-width: 768px) {
        width: 100%; /* Um card por linha em telas pequenas */
    }

    width: 100%;
    border: 3px solid;
    border-image: linear-gradient(45deg, var(--color-border-start), var(--color-border-end));
    border-image-slice: 1;

    &:hover {
        animation: snakeBorder 2s linear infinite;
    }

    @keyframes snakeBorder {
        0% {
            border-image: linear-gradient(90deg, var(--color-border-start) 25%, transparent 25%) 1;
        }
        100% {
            border-image: linear-gradient(90deg, transparent 25%, var(--color-border-end) 25%) 1;
        }
    }
 
`;

const ServiceTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

const ServiceText = styled.p`
    font-size: 1.2rem;
    color: var(--color-text);
`;

export default About;
