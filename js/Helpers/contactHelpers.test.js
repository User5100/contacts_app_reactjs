import { addContactToState,
         findById,
         removeContact,
         updateContact } from './contactHelpers'

test('addContact should add a new contact to the contact list', () => {
  const startContactsList = [
	  { id: 1, name: 'John' },
	  { id: 2, name: 'Jack' }
  ]

  const newContact = { id: 3, name: 'Jones' }

  const expected = [
    { id: 1, name: 'John' },
	  { id: 2, name: 'Jack' },
	  { id: 3, name: 'Jones' }
  ]

  const result = addContactToState(startContactsList, newContact)

  expect(result).toEqual(expected)
})

test('addContact should not mutate the existing array of contacts', () => {
  const startContactsList = [
	  { id: 1, name: 'John' },
	  { id: 2, name: 'Jack' }
  ]

  const newContact = { id: 'A3', name: 'Jones' }

  const expected = [
    { id: 1, name: 'John' },
	  { id: 2, name: 'Jack' },
	  { id: 3, name: 'Jones' }
  ]

  const result = addContactToState(startContactsList, newContact)

  expect(result).not.toBe(startContactsList)
})

test('findById should return the expected item from an array', () => {
  const startContactsList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jones' }
  ]

  const expected = { id: 2, name: 'Jack' }

  const result = findById(2, startContactsList)

  expect(result).toEqual(expected)
})

test('removeContact should remove an item by id', () => {
  const startContactsList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jones' }
  ]

  const targetId = 2

  const expectedContactsList = [
    { id: 1, name: 'John' },
    { id: 3, name: 'Jones' }
  ]

  const result = removeContact(startContactsList, 2)

  expect(result).toEqual(expectedContactsList)
})

test('removeContact should not mutate the original array', () => {
  const startContactsList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jones' }
  ]

  const expectedContactsList = [
    { id: 1, name: 'John' },
    { id: 3, name: 'Jones' }
  ]

  const result = removeContact(startContactsList, 2)

  expect(result).not.toBe(startContactsList)
})

test('updateContact should update an existing contact name', () => {
  const startContactsList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jones' }
  ]

  const expectedContactsList = [
    { id: 1, name: 'Lock' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jones' }
  ]

  const result = updateContact(startContactsList, 1, { name: 'Lock' })
  expect(result).toEqual(expectedContactsList)
})

test('updateContact should not mutate the original array', () => {
  const startContactsList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jones' }
  ]

  const expectedContactsList = [
    { id: 1, name: 'Lock' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jones' }
  ]

  const result = updateContact(startContactsList, 1, { name: 'Lock' })
  expect(result).not.toBe(expectedContactsList)
})
