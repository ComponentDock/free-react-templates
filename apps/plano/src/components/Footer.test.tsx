import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the query CTA section', () => {
    render(<Footer />)
    expect(screen.getByText(/Have any project or query/)).toBeInTheDocument()
    expect(screen.getAllByText('+10 673 563 629').length).toBeGreaterThanOrEqual(1)
  })

  it('renders four footer column headings', () => {
    render(<Footer />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getAllByText('Subscribe').length).toBeGreaterThanOrEqual(1)
  })

  it('renders services links', () => {
    render(<Footer />)
    expect(screen.getByText('Interior')).toBeInTheDocument()
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('3D Modeling')).toBeInTheDocument()
  })

  it('renders company links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Appointment')).toBeInTheDocument()
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('validates email on subscribe', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Your Email Address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('A valid email address is required.')
  })

  it('subscribes with valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Your Email Address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })
})
