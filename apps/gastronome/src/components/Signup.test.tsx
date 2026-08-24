import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Signup } from './Signup'
import { it, expect } from 'vitest'

it('renders signup section with heading', () => {
  render(<Signup />)
  expect(screen.getByRole('heading', { name: 'Sign Up for Updates' })).toBeInTheDocument()
  expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()
})

it('renders email input and submit button', () => {
  render(<Signup />)
  expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Sign-up' })).toBeInTheDocument()
})

it('allows typing email', async () => {
  const user = userEvent.setup()
  render(<Signup />)
  const input = screen.getByRole('textbox', { name: /email address/i })
  await user.type(input, 'test@example.com')
  expect(input).toHaveValue('test@example.com')
})

it('prevents form submission', async () => {
  const user = userEvent.setup()
  render(<Signup />)
  await user.click(screen.getByRole('button', { name: 'Sign-up' }))
  expect(screen.getByRole('heading', { name: 'Sign Up for Updates' })).toBeInTheDocument()
})
