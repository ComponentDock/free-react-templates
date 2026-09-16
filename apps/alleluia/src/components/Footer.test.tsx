import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('123 Faith Street, Grace City')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@alleluia.church')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Sermons')).toHaveAttribute('href', '#sermons')
    expect(screen.getByText('Events')).toHaveAttribute('href', '#events')
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact')
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    const button = screen.getByRole('button', { name: /subscribe/i })
    await user.type(input, 'test@example.com')
    await user.click(button)
  })

  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByText('Alleluia')).toBeInTheDocument()
  })
})
