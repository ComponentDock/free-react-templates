import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the newsletter heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Subscribe/)).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByPlaceholderText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /get started/i }))
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
  })
})
