import types from './contact-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
