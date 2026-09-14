import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and about text', () => {
    render(<Footer />)
    expect(screen.getAllByRole('link', { name: /inkvibe/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/premier tattoo studio/i)).toBeInTheDocument()
  })

  it('renders business hours', () => {
    render(<Footer />)
    expect(screen.getByText('Mon – Fri')).toBeInTheDocument()
    expect(screen.getByText('10:00 AM – 8:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Ink Street, Arts District')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+1 \(555\) 123-4567/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hello@inkvibe.com/i })).toBeInTheDocument()
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Email Address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
