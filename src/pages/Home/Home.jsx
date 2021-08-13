import ItemCard from "../../components/ItemCard";
import useAuth from "../../hooks/useAuth";
import heroImage from "../../assets/heroImage.png";
import chart from "../../assets/chart1.svg";

import styles from "./Home.module.scss";
import api from "../../services/api";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Bento 3D Kit",
    background: "#FFCE73",
    type: "Illustration",
    image: "/images/image2.png",
  },
  {
    title: "Collab UI Kit",
    background: "#A0D7E7",
    type: "Coded Template",
    image: "/images/image3.png",
  },
];

function Home() {
  const { user } = useAuth();
  const [allCards, setAllCards] = useState([]);

  const getCards = () => {
    return api.get("/cards");
  };

  useEffect(() => {
    getCards().then((response) => setAllCards([...response.data, ...cards]));
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.header}>
        <p>Hi {user.name},</p>
        <h1>Welcome back👋</h1>
      </section>
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
            <div className={styles.dots}>
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
            {allCards.map((card, i) => (
              <ItemCard
                key={i}
                title={card.title}
                background={card.background}
                type={card.type}
                image={card.image}
              />
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
