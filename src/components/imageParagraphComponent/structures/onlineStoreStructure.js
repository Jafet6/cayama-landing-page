import { IoStorefrontOutline } from "react-icons/io5";

const onlineStoreStructure = {
  title: {
    className: 'share-nanny-cost-h2',
    text: 'Loja Online'
  },
  paragraph: {
    className: 'share-nanny-cost-p',
    text: ['Ter uma loja online totalmente ', <span className='grey-p'>personalizada</span>, ' com a sua cara e o seu estilo nunca foi tão fácil, rápido e barato. Ah, e você pode adicionar quantos ', <span className='grey-p'>produtos</span>, ' quiser em sua loja']
  },
  link: {
    className: 'share-nany-cost-link',
    text: 'Está pronto para vender mais?',
    href: '/#leedForm',
  },
  image: {
    className: 'share-payment-section-image',
    icon: <IoStorefrontOutline size={150} color={'rgb(255, 136, 57)'} />
  },
}

export default onlineStoreStructure;
