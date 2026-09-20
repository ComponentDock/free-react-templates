import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders footer sections', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('Important Links')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<Footer />)
    expect(screen.getByText('5,000+')).toBeInTheDocument()
    expect(screen.getByText('451')).toBeInTheDocument()
    expect(screen.getByText('568')).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByLabelText('Subscribe'))
    expect(input).toHaveValue('test@example.com')
  })
})
