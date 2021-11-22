import { Carousel } from 'react-bootstrap';
import '../../src/components/styles/home.css'
import slider from '../img/ropa.jpg';
import slider2 from '../img/slider2.png'
import slider3 from '../img/slider3.jpg'
import '../components/styles/home.css';
import ItemList from '../components/ItemList/ItemList';
import { DistributeVertical } from 'react-bootstrap-icons';

function Home() {

  return (
    <section className="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider}
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>TIENDA NOVA</h3>
          <p>Estilo urbano</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>TIENDA NOVA</h3>
            <p>Encontranos en zona oeste</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>TIENDA NOVA</h3>
            <p>Calidad y variedad</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="product productSlide">
            <ItemList/>
      </div>    
    </section>    
  )
}

export default Home;