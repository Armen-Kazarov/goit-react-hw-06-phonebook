import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';
//import { getContacts } from '../../redux/contacts/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  //const contacts = useSelector(getContacts);
  console.log(contacts);

  const handleRemoveContact = id => {
    dispatch(contactsActions.deleteContact(id));
  };

  return (
    <ul className={s.listItems}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          &#128578; {name}: {number}
          <button onClick={() => handleRemoveContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
