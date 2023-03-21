import { Card } from 'react-bootstrap'
import './Cards.scss'

import cfnbg from '../assets/cards/cfnbg.jpg'
import cfbg from '../assets/cards/cfbg.jpg'
import bbbg from '../assets/cards/bbbg.jpg'

import cfnlogo from '../assets/cards/cfnlogo.png'
import cflogo from '../assets/cards/cflogo.png'
import bblogo from '../assets/cards/bblogo.png'
import { Link } from 'react-router-dom'

export default function Cards() {
  return (
    <section id="card-container">
      <Link to="/avaliacaocfn">
        <a href="https://www.casadasfechaduras.com.br" rel="noreferrer" target="_blank">
          <Card className="card-class">
            <Card.Img className="card-bg" variant="top" alt="Car1" src={cfnbg} />
            <Card.ImgOverlay>
              <Card.Title>
                <img src={cfnlogo} alt="Casa das Fechaduras" className='card-logo' />
              </Card.Title>
              <Card.Text className='card-text'>
                Loja especializada em fechaduras, puxadores e ferragens em geral. Amplo estoque, atendimento especializado e uma estrutura completa proporcionam ótimas experiências de compras.
              </Card.Text>

            </Card.ImgOverlay>
          </Card>
        </a>
      </Link>

      <a href="http://www.lojacasaferramentas.com/" rel="noreferrer" target="_blank">
        <Card className="card-class">
          <Card.Img className="card-bg" variant="top" alt="Card2" src={cfbg} />
          <Card.ImgOverlay>
            <Card.Title>
              <img src={cflogo} alt="Casa das Fechaduras" className='card-logo cflogo' />
            </Card.Title>
            <Card.Text className='card-text'>
              Especializada no segmento de ferramentas elétricas e manuais, compressores, bombas d'água, lixas, abrasivos, equipamentos de segurança, além de vários outros produtos.
            </Card.Text>

          </Card.ImgOverlay>
        </Card>
      </a>

      <a href="https://www.bellobanho.com.br" rel="noreferrer" target="_blank">
        <Card className="card-class">
          <Card.Img className="card-bg" variant="top" alt="Card3" src={bbbg} />
          <Card.ImgOverlay>
            <Card.Title>
              <img src={bblogo} alt="Casa das Fechaduras" className='card-logo' />
            </Card.Title>
            <Card.Text className='card-text'>
              Uma loja conceito com 400m² de show-room, pronta para atender os profissionais de arquitetura, decoração, construção civil e consumidores finais.
            </Card.Text>


          </Card.ImgOverlay>
        </Card>
      </a>
    </section>
  )
}