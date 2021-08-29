import axios from "axios";

axios.defaults.baseURL = 'https://6126871d3ab4100017a68fce.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
};

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}