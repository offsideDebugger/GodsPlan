import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/about', (c) => {
  return c.text('About Page Testing')
})

export default app
