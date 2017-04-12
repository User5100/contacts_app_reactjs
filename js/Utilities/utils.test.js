import { partial, pipe } from './utils'

const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c
const inc = num => num + 1
const db1 = num => num * 2

test('partial applies the first argument ahead of time', () => {
  const inc = partial(add, 1)
  const result = inc(2)
  expect(result).toBe(3)
})

test('partial applies multiple arguments ahead of time', () => {
  const inc = partial(addThree, 1, 2)
  const result = inc(3)
  expect(result).toBe(6)
})

test('pipe passes the results of inc to db1', () => {
  const pipeline = pipe(inc, db1)
  const result = pipeline(2)
  expect(result).toBe(6)
})

test('pipe passes the results of db1 to inc', () => {
  const pipeline = pipe(db1, inc)
  const result = pipeline(2)
  expect(result).toBe(5)
})

test('pipe works with more then 2 functions', () => {
  const pipeline = pipe(add, inc, db1, inc)
  const result = pipeline(1, 2)
  expect(result).toBe(9)
})
