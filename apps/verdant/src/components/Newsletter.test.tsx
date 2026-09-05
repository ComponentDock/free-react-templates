import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText(/join the newsletter/i)).toBeInTheDocument()
    expect(screen.getByText(/subscribe to our newsletter/i)).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(/email address/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    // Form submits without error
  })
})
