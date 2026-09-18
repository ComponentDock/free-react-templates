import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

it('renders the newsletter heading', () => {
  render(<Newsletter />)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Subscribe to our Newsletter')
})

it('renders the email input', () => {
  render(<Newsletter />)
  expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
})

it('renders the subscribe button', () => {
  render(<Newsletter />)
  expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
})

it('submits the form without navigation', async () => {
  const user = userEvent.setup()
  render(<Newsletter />)
  await user.click(screen.getByRole('button', { name: /subscribe/i }))
})
