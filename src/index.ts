import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/about', (c) => {
  return c.text('About Page Testing')
})

app.get('/user', (c) => {
  return c.json({ name: 'John', age: 30 })
})

export default app
