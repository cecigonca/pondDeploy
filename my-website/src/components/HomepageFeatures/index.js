import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Conteúdo da Página',
    Svg: require('@site/static/img/whale-svgrepo-com.svg').default,
    description: (
      <>
      Minha página pessoal conta com informações pessoais básicas e meu histórico acadêmico. Esses itens foram dividos em duas páginas diferentes na aba "Meu Perfil".
      </>
    ),
  },
  {
    title: 'Descrição da Atividade',
    Svg: require('@site/static/img/jellyfish-svgrepo-com.svg').default,
    description: (
      <>
       Construir um deploy automatizado utilizando o Github Actions para entregar uma página pessoal construída com o Docusaurus. 
      </>
    ),
  },
  {
    title: 'Avaliação',
    Svg: require('@site/static/img/polar-bear-svgrepo-com.svg').default,
    description: (
      <>
      Espera-se encontrar um commit para cada etapa principal do projeto, tais como: instalação dos pacotes, construção da página pessoal e ajustes na página pessoal.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
