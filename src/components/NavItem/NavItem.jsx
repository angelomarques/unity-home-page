import styles from "./NavItem.module.scss";

function NavItem({ label, icon, isActive, unreadUpdates }) {
  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      <a href="#">
        <img src={icon} alt={label} />
        <span>{label}</span>
        {unreadUpdates && (
          <div className="unreadUpdates">
            <span>{unreadUpdates}</span>
          </div>
        )}
      </a>
    </li>
  );
}

export default NavItem;
