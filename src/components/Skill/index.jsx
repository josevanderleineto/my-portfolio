import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Skill = () => {
    const { t } = useTranslation();

    // const skills = t('skills.items', { returnObjects: true });
    // const experience = t('experience.text');
    // const education = t('education.text');

    return (
        <Section id='skills'>
            <Title>{t('skills.title')}</Title>
            <SkillsBoxContainer>

                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text1')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text2')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text3')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text4')}
                    </TextSkill>
                </SkillsBox>
            </SkillsBoxContainer>
            <TechsTile>
                    {t('skills.tech')}
                </TechsTile>
            <TechContainer>
                <TechBox>
                    <TechImage src="/imgSkills/html.svg" alt="HTML" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/css.svg" alt="CSS" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/javascript.svg" alt="JavaScript" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/typescript.svg" alt="TypeScript" />
                </TechBox>
            
                <TechBox>
                    <TechImage src="/imgSkills/react.svg" alt="React" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/next-js.svg" alt="Next" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/styled.svg" alt="Styled Componets" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/tailwind-css.svg" alt="TaiwindCSS" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/bootstrap.svg" alt="Bootstrap" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/nodejs.svg" alt="Node.js" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/python.svg" alt="Python" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/express.svg" alt="Express"/>
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/mongo.svg" alt="MongoDB" />
                </TechBox>  
                <TechBox>
                    <TechImage src="/imgSkills/mysql.svg" alt="MySQL" />
                </TechBox>    
                <TechBox>
                    <TechImage src="/imgSkills/git.svg" alt="Git" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/github.svg" alt="GitHub" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/figma.svg" alt="Figma" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/fremer.png" alt="Fremer" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/wordpress.svg" alt="Wordpress" />
                </TechBox>

            </TechContainer>
{/* 
            <SubTitle>{t('experience.title')}</SubTitle>
            <Paragraph>{experience}</Paragraph>

            <SubTitle>{t('education.title')}</SubTitle>
            <Paragraph>{education}</Paragraph> */}
        </Section>
    );
};

const Title = styled.h1`
    font-size: 32px;
    margin-top: 40px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;


const Section = styled.section`
    padding: 40px;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

    
const SkillsBoxContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const SkillsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    margin-bottom: 20px;
    max-width: 240px;
    height: 120px;
    background-color: var(--bg-secondary);
    border-radius: 10px;

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


const TextSkill = styled.p`
    font-size: 1rem;
    margin: 25px;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 280px) {
        font-size: 0.6rem;
    }
`;

const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const TechsTile = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;`

const TechBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    min-width: 120px;
    min-height: 120px;
    background-color: var(--bg-gray);
    border-radius: 8px;
    box-shadow: 6px 38px 99px 13px rgba(29,218,230,0.52) inset;
    -webkit-box-shadow: 6px 38px 99px 13px rgba(29,218,230,0.52) inset;
    -moz-box-shadow: 6px 38px 99px 13px rgba(29,218,230,0.52) inset;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: rotate(-5deg);
        box-shadow: 12px 58px 198px 13px rgba(29,218,230,0.72) inset;
    }
`;

const TechImage = styled.img`
    width: 40px;
`;


export default Skill;
