// import logo from "../../assets/LOGO_DOOHIT_NOIR-min.svg"
import styles from './styles.module.scss';
import React from "react"
import { Link } from "react-router-dom"

function Template(props) {
  console.log(props.templates);
  return (
      <section className={styles["boxe-globale"]}>
        <div className={styles["box-recherche-template"]}>
          <label className={styles["box-recherche-template__label"]} htmlFor="">Numéro de template : </label>
          <input className={styles["box-recherche-template__input"]} type="text" name="" id="" />
        </div>
        <div className={styles["boxe-template-globale"]}>
          {props.templates.map((template) => {
            console.log(template);
            return(
              <Link to={`/onTemp/${template.id}`} key={template.id} className={styles["box-template"]}>
                <img src={template.attributes.posterUrl} alt="" className={styles["box-template__image"]} />
                <div className={styles["box-template__contente"]}>
                  <h4 className={styles["box-template__contente__title-id"]}>{template.id}</h4>
                  <ul className={styles["box-template__contente__list"]}>
                    <li className={styles["box-template__contente__list__element"]}>Size : 3 </li>
                    <li className={styles["box-template__contente__list__element"]}>Two Vidéo</li>
                    <li className={styles["box-template__contente__list__element"]}>Print </li>
                    <li className={styles["box-template__contente__list__element"]}>Zoom</li>
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
  )
}

export default Template