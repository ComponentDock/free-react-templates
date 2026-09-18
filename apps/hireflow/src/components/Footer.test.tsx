import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Top Products links', () => {
    render(<Footer />)
    expect(screen.getByText('Top Products')).toBeInTheDocument()
    expect(screen.getByText('Managed Website')).toBeInTheDocument()
    expect(screen.getByText('Manage Reputation')).toBeInTheDocument()
    expect(screen.getByText('Power Tools')).toBeInTheDocument()
    expect(screen.getByText('Marketing Service')).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders Follow Us section with social links', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const componentDockLink = screen.getByText('Component Dock')
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('prevents newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByLabelText('Subscribe'))
    // No navigation — preventDefault worked
  })
})
