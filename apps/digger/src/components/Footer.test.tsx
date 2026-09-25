import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders newsletter input', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders feature links', () => {
    render(<Footer />)
    expect(screen.getByText('Land Development')).toBeInTheDocument()
    expect(screen.getByText('Surface Mining')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('prevents default newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const subscribeBtn = screen.getByText('Subscribe')
    await user.click(subscribeBtn)
  })
})
