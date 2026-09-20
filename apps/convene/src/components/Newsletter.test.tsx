import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
  })

  it('renders Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('shows success message on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByPlaceholderText('Your email'), 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })

  it('does not show success on empty submit', () => {
    render(<Newsletter />)
    const form = document.querySelector('form')!
    fireEvent.submit(form)
    expect(screen.queryByText('Thanks for subscribing!')).not.toBeInTheDocument()
  })
})
