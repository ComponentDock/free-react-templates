import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('GetawayPad')).toBeInTheDocument()
  })

  it('renders the services list', () => {
    render(<Footer />)
    expect(screen.getByText('Map Direction')).toBeInTheDocument()
    expect(screen.getByText('Accommodation Services')).toBeInTheDocument()
    expect(screen.getByText('Great Experience')).toBeInTheDocument()
    expect(screen.getByText('Perfect central location')).toBeInTheDocument()
  })

  it('renders tag cloud', () => {
    render(<Footer />)
    expect(screen.getByText('apartment')).toBeInTheDocument()
    expect(screen.getByText('vacation')).toBeInTheDocument()
  })

  it('renders the subscribe form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders Terms, Privacy, and Compliances links', () => {
    render(<Footer />)
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Compliances')).toBeInTheDocument()
  })

  it('handles subscribe form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submitBtn = screen.getByLabelText('Subscribe')
    await user.click(submitBtn)
  })
})
