import styles from "./NavItem.module.scss";

function NavItem({ label, icon, isActive, unreadUpdates, className }) {
  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ""} ${className ? className : ""}`}>
      <a href="/">
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
