import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText('About Agency')).toBeInTheDocument()
    expect(screen.getByText(/The world has become so fast paced/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Feature')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
  })

  it('renders the social links section', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Expedio\. All rights reserved/)).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows typing email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('submits newsletter form without errors', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByLabelText('Subscribe'))
  })
})
