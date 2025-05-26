import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              name={name}
              number={number}
              onDelete={() => {
                onDelete(id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
