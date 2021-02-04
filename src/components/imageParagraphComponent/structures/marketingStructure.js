import { IoMegaphoneOutline } from "react-icons/io5"

const marketingStructure = {
  title: {
    className: 'share-nanny-cost-h2',
    text: 'Marketing'
  },
  paragraph: {
    className: 'share-nanny-cost-p',
    text: [<span className='grey-p'>Aumente as suas vendas</span>, " e a visibilidade da sua marca disponibilizando seus produtos para que ", <span className='orange-p'>influenciadores digitais</span>, " escolhidos por você possam divulgá-los em suas redes sociais"]
  },
  link: {
    className: 'share-nany-cost-link',
    text: 'Está pronto para vender mais?',
    href: '/#leedForm',
  },
  image: {
    className: 'nanny-cost-section-image',
    icon: <IoMegaphoneOutline size={150} color={'rgb(255, 136, 57)'} />
  },
}

export default marketingStructure;
