import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Us section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders Contact Info', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/Phone: \+8880 44338899/)).toBeInTheDocument()
  })

  it('renders Important Links', () => {
    render(<Footer />)
    expect(screen.getByText('Important Links')).toBeInTheDocument()
    expect(screen.getByText('View Project')).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address for newsletter')).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<Footer />)
    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(screen.getByText('451')).toBeInTheDocument()
    expect(screen.getByText('568')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email Address for newsletter')
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByLabelText('Subscribe to newsletter')
    await user.click(submitBtn)
    expect(input).toHaveValue('test@example.com')
  })
})
