import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('displays the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
  })

  it('displays the email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('displays the subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('clears email on form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(input).toHaveValue('')
  })
})
