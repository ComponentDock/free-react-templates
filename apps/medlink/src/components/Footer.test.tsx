import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders the newsletter heading', () => {
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
  })

  it('renders the newsletter email input', () => {
    const input = screen.getByLabelText(/email address/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders the Subscribe button', () => {
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    const dockLink = screen.getByRole('link', { name: /component dock/i })
    expect(dockLink).toBeInTheDocument()
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
    expect(dockLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the MedLink brand in footer', () => {
    expect(screen.getByText('MedLink')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    const links = ['Home', 'About', 'Features', 'Doctors', 'Departments', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('renders social media links', () => {
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    expect(screen.getByText('123 Medical Drive, Health City, HC 10001')).toBeInTheDocument()
    expect(screen.getByText('+953 012 3654 896')).toBeInTheDocument()
    expect(screen.getByText('support@medlink.com')).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} MedLink`))).toBeInTheDocument()
  })

  it('submits newsletter form without navigation', async () => {
    const user = userEvent.setup()
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'test@example.com')
    const subscribeBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(subscribeBtn)
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
  })
})
