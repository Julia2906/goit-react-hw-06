import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filterName = useSelector(state => state.filters.name);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const handleDelete = id => {
    const deleteAction = deleteContact(id);
    dispatch(deleteAction);
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
