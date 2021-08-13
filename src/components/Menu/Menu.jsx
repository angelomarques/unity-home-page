import logo from "../../assets/logo.svg";
import activity from "../../assets/icons/activity.svg";
import bag from "../../assets/icons/bag.svg";
import chart from "../../assets/icons/chart.svg";
import discovery from "../../assets/icons/discovery.svg";
import wallet from "../../assets/icons/wallet.svg";
import document from "../../assets/icons/document.svg";
import settings from "../../assets/icons/settings.svg";
import message from "../../assets/icons/message.svg";
import notification from "../../assets/icons/notification.svg";
import chat from "../../assets/icons/chat.svg";
import search from "../../assets/icons/search.svg";

import styles from "./Menu.module.scss";
import NavItem from "../NavItem/NavItem";
import Profile from "../Profile";

const navLinks = [
  { label: "Overview", icon: activity, isActive: true },
  { label: "Products", icon: bag, isActive: false },
  { label: "Campaigns", icon: chart, isActive: false },
  { label: "Schedules", icon: discovery, isActive: false },
  { label: "Payouts", icon: wallet, isActive: false },
  { label: "Statement", icon: document, isActive: false },
  { label: "Settings", icon: settings, isActive: false },
];

const updateLinks = [
  { label: "Inbox", icon: message, isActive: false, unreadUpdates: 18 },
  { label: "Notifications", icon: notification, isActive: false, unreadUpdates: 2 },
  { label: "Comments", icon: chat, isActive: false, unreadUpdates: 20 },
];

function Menu() {
  return (
    <aside className={styles.menu}>
      <img src={logo} alt="Unity" />

      <label className={styles.searchInput}>
          <img src={search} alt="search" />
          <input type="search" name="search" placeholder='Search' id="search" />
        </label>

      <nav className={styles.navbar}>
        <h4>Admin tools</h4>
        <ul>
          {navLinks.map(({ label, icon, isActive }, i) => (
            <NavItem key={i} label={label} icon={icon} isActive={isActive} />
          ))}
        </ul>
      </nav>

      <div className={styles.navbar}>
        <h4>Insights</h4>
        <ul>
          {updateLinks.map((props, i) => (
            <NavItem key={i} {...props} className="truncate" />
          ))}
        </ul>
      </div>

      <Profile />
    </aside>
  );
}

export default Menu;
