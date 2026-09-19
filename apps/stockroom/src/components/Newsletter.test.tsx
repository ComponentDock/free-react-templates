import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading with yellow highlight', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe for a')).toBeInTheDocument()
    expect(screen.getByText('25% Discount')).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Nulla ac convallis/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your E-mail')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('allows typing in email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Your E-mail')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })
})
