import useAuth from "../../hooks/useAuth";
import list from '../../assets/icons/list.svg'

import styles from "./Profile.module.scss";

function Profile() {
  const { user } = useAuth();

  return (
    <div className={styles.profile}>
      <img src={user.avatar} alt={user.name} />
      <div>
        <p>{user.name}</p>
        <span>Free account</span>
      </div>
      <button>
          <img src={list} alt="button" />
      </button>
    </div>
  );
}

export default Profile;
