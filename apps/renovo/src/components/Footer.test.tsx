import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About section', () => {
    render(<Footer />)
    expect(screen.getByText('About Renovo')).toBeInTheDocument()
  })

  it('renders Navigation Links', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation Links')).toBeInTheDocument()
    for (const link of ['Home', 'Services', 'Process', 'FAQ', 'Blog', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders InstaFeed section', () => {
    render(<Footer />)
    expect(screen.getByText('InstaFeed')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders email input in newsletter', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
  })

  it('newsletter form submits without error', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Email Address')
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button')
    await user.click(submitBtn)
  })
})
