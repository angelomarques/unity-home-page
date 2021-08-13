import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import notification from "../../assets/icons/notification-dark.svg";
import search from "../../assets/icons/search.svg";

import styles from "./AppHeader.module.scss";

function AppHeader({ setIsMenuOpen, isMenuOpen }) {
  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <button
        onClick={handleClick}
        className={
          isMenuOpen ? `${styles.menuBtn} ${styles.active}` : styles.menuBtn
        }
      >
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && <img className={styles.logo} src={logo} alt="logo" />}

      <div className={styles.buttons}>
        {!isMenuOpen && (
          <button className={styles.searchBtn}>
            <img src={search} alt="search" />
          </button>
        )}
        <button className={styles.notification}>
          <img src={notification} alt="notification button" />
          <span></span>
        </button>
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </div>
    </header>
  );
}

export default AppHeader;
