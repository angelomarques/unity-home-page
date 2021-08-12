import ItemCard from '../../components/ItemCard'
import useAuth from "../../hooks/useAuth";
import heroImage from "../../assets/image1.png";
import chart from '../../assets/chart1.svg';
import imageCard1 from '../../assets/image1.png';
import imageCard2 from '../../assets/image2.png';
import imageCard3 from '../../assets/image3.png';

import styles from "./Home.module.scss";

const cards = [
  {title: 'Bento 3D Kit', background: '#FFA2C0', type: 'Illustration', image: imageCard1},
  {title: 'Bento 3D Kit', background: '#FFCE73', type: 'Illustration', image: imageCard2},
  {title: 'Collab UI Kit', background: '#A0D7E7', type: 'Coded Template', image: imageCard3},
]

function Home() {
  const { user } = useAuth();

  return (
    <div className={styles.home}>
      <header>
        <p>Hi {user.name},</p>
        <h1>Welcome back👋</h1>
      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>Set a Google Analytics Code</h2>
            <p>
              Did you know you can set a Google Analytics code for your
              products?
            </p>
            <button>Go Setting</button>
          </div>
          <div>
            <img src={heroImage} alt="Hero" />
            <div className="dots">
              <span></span>
              <span className={styles.current}></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>
        <section className={styles.homeContent}>
          <div>
            <h3>Earning by items</h3>
            {cards.map(card => (
              <ItemCard {...card} />
            ))}
          </div>
          <div>
            <h3>Earning</h3>
            <div className={styles.chart}>
              <img src={chart} alt="chart" />
              <button>Go Analytics</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
