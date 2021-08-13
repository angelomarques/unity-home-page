import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification-dark.svg";
import chart from "../../assets/chart2.svg";

import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <div className={styles.top}>
        <label>
          <img src={search} alt="search" />
          <input type="search" name="search" placeholder='Search' id="search" />
        </label>

        <button className={styles.notification}>
          <img src={notification} alt="notification button" />
          <div className="unreadUpdates">
            <span>2</span>
          </div>
        </button>
      </div>

      <div className={styles.earnings}>
        <h3>Your earning this month</h3>
        <p>479.4</p>
        <span>Update your payout method in Settings</span>
        <button>Withdraw All Earning</button>
      </div>

      <div className={styles.impressions}>
        <h3>Affiliate Impressions</h3>
        <img src={chart} alt="chart" />
      </div>
    </section>
  );
}

export default Sidebar;
