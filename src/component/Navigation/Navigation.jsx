import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.active}
    >
      Главная
    </NavLink>

    <NavLink
      to="/authors"
      className={styles.link}
      activeClassName={styles.active}
    >
      Авторы
    </NavLink>

    <NavLink
      to="/books"
      className={styles.link}
      activeClassName={styles.active}
    >
      Книги
    </NavLink>
    <NavLink
      to="/sorted"
      className={styles.link}
      activeClassName={styles.active}
    >
      Сортировка
    </NavLink>
  </nav>
)

export default Navigation
