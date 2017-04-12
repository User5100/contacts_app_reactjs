export function addContactToState (existingContacts, newContact) {
  return [...existingContacts, newContact]
}

export var generateId = () => Math.floor(Math.random() * 100000)

export function findById (id, existingContacts) {
  return existingContacts.find(person => person.id === id)
}

export var removeContact = (existingContacts, id) => {
  const removeIndex = existingContacts.findIndex(contact => contact.id === id)

  return [...existingContacts.slice(0, removeIndex),
    ...existingContacts.slice(removeIndex + 1)]
}

export var updateContact = (existingContacts, id, updatedContact) => {
  let _updatedContact = Object.assign({}, updatedContact, { id })
  const updateIndex = existingContacts.findIndex(contact => contact.id === id)

  return [...existingContacts.slice(0, updateIndex),
    _updatedContact,
    ...existingContacts.slice(updateIndex + 1)]
}
