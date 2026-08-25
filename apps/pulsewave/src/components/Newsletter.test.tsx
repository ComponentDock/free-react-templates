import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Newsletter — Stay tune and get the latest update',
    )
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('clears email on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })
})
