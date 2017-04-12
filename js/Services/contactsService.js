import axios from 'axios'

const BASE_URL = 'http://localhost:3000/contacts'

export const loadContacts = () => {
  return axios.get(BASE_URL)
}

export const addNewContact = (newContact) => {
  return axios.post(BASE_URL, newContact)
}

export const updateExistingContact = (id, contact) => {
  return axios.put(`${BASE_URL}/${id}`, contact)
}

export const deleteContact = (id) => {
  return axios.delete(`${BASE_URL}/${id}`)
}
