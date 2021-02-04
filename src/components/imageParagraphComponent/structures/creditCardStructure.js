import { BsCreditCard } from "react-icons/bs";

const creditCardStructure = {
  title: {
    className: 'share-nanny-cost-h2',
    text: 'Parcelamento'
  },
  paragraph: {
    className: 'share-nanny-cost-p',
    text: 'Os seus clientes poderão parcelar suas compras em até 10x no cartão de crédito de forma simples e segura.'
  },
  link: {
    className: 'share-nany-cost-link',
    text: 'Está pronto para vender mais?',
    href: '/#leedForm',
  },
  image: {
    className: 'nanny-cost-section-image',
    icon: <BsCreditCard size={150} color={'rgb(255, 136, 57)'} />
  },
}

export default creditCardStructure;
