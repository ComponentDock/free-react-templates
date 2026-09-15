import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Get News & Updates')).toBeInTheDocument()
  })

  it('renders name input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
  })

  it('renders Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('allows typing in name field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const nameInput = screen.getByPlaceholderText('Your Name')
    await user.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('allows typing in email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const emailInput = screen.getByPlaceholderText('Your Email')
    await user.type(emailInput, 'alice@test.com')
    expect(emailInput).toHaveValue('alice@test.com')
  })

  it('form submission works', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'Bob')
    await user.type(screen.getByPlaceholderText('Your Email'), 'bob@test.com')
    await user.click(screen.getByText('Subscribe'))
    // Form submits without error (preventDefault prevents page reload)
  })
})
