import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Projects = () => {
    const { t } = useTranslation();

    // Configuração do Slider
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,  // Mostrar 2 cards por vez em telas maiores
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,  // Desabilitado para evitar sobreposição
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,  // No mobile, mostramos 1 card por vez
                settings: {
                    slidesToShow: 1,  // Apenas 1 card visível por vez
                    slidesToScroll: 1,  // Vai scrollar 1 card por vez
                    centerMode: false,  // Desativando centro no mobile
                }
            },
            {
                breakpoint: 300,  // Para telas ainda menores (celulares de 300px)
                settings: {
                    slidesToShow: 1,  // Ainda 1 card por vez
                    slidesToScroll: 1,
                    centerMode: false,  // Desabilitar centro no mobile
                }
            }
        ]
    };

    return (
        <Section id='projects'>
            <Title>{t('projects.title')}</Title>
            <StyledSlider {...settings}>
                {/* Card para o Projeto 1 */}
                <Card>
                    <Image src="/img/capa_autorretrato.webp" alt="Autorretrato Lab" />
                    <CardContent>
                        <CardTitle>{t('projects.projeto1.title')}</CardTitle>
                        <CardText>{t('projects.projeto1.description')}</CardText>
                        <ButtonGroup>
                            <Button href="https://www.eparreiautorretrato.com/" target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={20} />
                            </Button>
                            <Button href="https://github.com/josevanderleineto/autorretrato" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={20} />
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>

                {/* Card para o Projeto 2 */}
                <Card>
                    <Image src="/img/cap-vazbook.svg" alt="Capa do Site do VazBooks" />
                    <CardContent>
                        <CardTitle>{t('projects.projeto2.title')}</CardTitle>
                        <CardText>{t('projects.projeto2.description')}</CardText>
                        <ButtonGroup>
                            <Button href="https://www.vazcomercio.shop/" target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={20} />
                            </Button>
                            <Button href="https://github.com/josevanderleineto/vaz-bookshop" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={20} />
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>

                {/* Adicione mais cards conforme necessário */}
            </StyledSlider>
        </Section>
    );
};

const Section = styled.section`
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 768px) {
        margin: 0 20px;
        padding: 30px 15px;  /* Ajuste do padding para telas menores */
    }

    @media (max-width: 300px) {
        padding: 20px 10px;  /* Menos padding para telas muito pequenas */
    }
`;

const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 28px;  /* Tamanho reduzido do título para telas menores */
    }

    @media (max-width: 300px) {
        font-size: 22px;  /* Tamanho reduzido do título para telas muito pequenas */
    }
`;

const StyledSlider = styled(Slider)`
    .slick-slide {
        padding: 0 5px; /* Menos padding no mobile para evitar espaços */
    }

    .slick-list {
        padding: 0;  /* Sem padding extra nos limites da lista */
    }

    @media (max-width: 768px) {
        .slick-slide {
            padding: 0 5px;  /* Ajustando padding para telas pequenas */
        }
    }

    @media (max-width: 300px) {
        .slick-slide {
            padding: 0;  /* Removendo padding para telas muito pequenas */
        }
    }
`;

const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 100%;  /* Garantindo que o card ocupe toda a largura disponível */
    height: auto;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
        margin: 0;  /* Removendo margens extras */
    }

    @media (max-width: 300px) {
        margin: 0 5px;  /* Ajustando margens em telas muito pequenas */
    }
`;

const Image = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    background-color: #f0f0f0;

    @media (max-width: 768px) {
        height: 180px;  /* Ajustando a altura da imagem em telas menores */
    }

    @media (max-width: 300px) {
        height: 160px;  /* Ajustando a altura para telas muito pequenas */
    }
`;

const CardContent = styled.div`
    padding: 20px;
`;

const CardTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 18px;  /* Tamanho do título em telas pequenas */
    }

    @media (max-width: 300px) {
        font-size: 16px;  /* Tamanho do título em telas muito pequenas */
    }
`;

const CardText = styled.p`
    font-size: 0.8rem;
    color: #555;

    @media (max-width: 768px) {
        font-size: 0.75rem;  /* Ajuste de fonte para telas pequenas */
    }

    @media (max-width: 300px) {
        font-size: 0.7rem;  /* Ajuste de fonte para telas muito pequenas */
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;  /* Botões empilhados em telas pequenas */
    }
`;

const Button = styled.a`
    padding: 10px 20px;
    background-color: var(--color-border-start);
    color: var(--bg-primary);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-bottom: 10px; /* Margem inferior nos botões no mobile */

    &:hover {
        background-color: var(--color-border-end);
    }

    @media (max-width: 768px) {
        padding: 8px 15px;  /* Tamanho reduzido do botão em telas pequenas */
    }

    @media (max-width: 300px) {
        padding: 6px 12px;  /* Tamanho do botão em telas muito pequenas */
    }
`;

export default Projects;