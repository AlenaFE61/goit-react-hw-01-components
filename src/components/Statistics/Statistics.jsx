import propTypes from 'prop-types';
import css from './Ststistics.module.css';
import {createColor} from '../Color/funcColor';


export const Statistics = ({title,stats}) =>{
  return(
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.stats}
              key={id}
              style={{ backgroundColor: createColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};