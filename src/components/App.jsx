import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
