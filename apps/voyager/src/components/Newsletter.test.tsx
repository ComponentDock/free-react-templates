import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText('Sign Up for a Newsletter')).toBeInTheDocument()
    expect(screen.getByText(/Sign up for our mailing list/)).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('form submission is prevented', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(input).toHaveValue('test@example.com')
  })

  it('has proper aria label', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Newsletter signup')).toBeInTheDocument()
  })
})
