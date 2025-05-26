import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p>
          <HiUser /> {name}
        </p>
        <p>
          <HiPhone /> {number}
        </p>
      </div>

      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
