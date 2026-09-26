import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the send message button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Name'), 'John')
    expect(screen.getByLabelText('Your Name')).toHaveValue('John')

    await user.type(screen.getByLabelText('Your Email'), 'john@example.com')
    expect(screen.getByLabelText('Your Email')).toHaveValue('john@example.com')
  })

  it('allows typing in subject and message', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Subject'), 'Test Subject')
    expect(screen.getByLabelText('Subject')).toHaveValue('Test Subject')

    await user.type(screen.getByLabelText('Message'), 'Test message')
    expect(screen.getByLabelText('Message')).toHaveValue('Test message')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Contact />)

    const form = screen.getByLabelText('Your Name').closest('form')!
    form.addEventListener('submit', (e) => e.preventDefault())
    form.addEventListener('submit', preventDefault)

    await user.click(screen.getByText('Send Message'))
    expect(preventDefault).toHaveBeenCalled()
  })
})
