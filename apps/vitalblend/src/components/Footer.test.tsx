import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the VitalBlend brand name', () => {
    render(<Footer />)
    expect(screen.getByText('VitalBlend')).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders social media icon links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the newsletter heading and form', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe newsletter')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('allows email input and form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })

  it('renders copyright with Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
