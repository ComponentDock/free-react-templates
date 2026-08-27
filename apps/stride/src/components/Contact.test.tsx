import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('renders hours box', () => {
    render(<Contact />)
    const hours = screen.getAllByText('Hours')
    expect(hours.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Opening: 7:30am — Closing: 9:00pm')).toBeInTheDocument()
  })

  it('submits the form and shows confirmation', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('First name'), 'John')
    await user.type(screen.getByLabelText('Last name'), 'Doe')
    await user.type(screen.getByLabelText('Subject'), 'Test')
    await user.type(screen.getByLabelText('Email'), 'john@test.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Thank you! Your message has been sent.')).toBeInTheDocument()
  })
})
