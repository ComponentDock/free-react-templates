import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About Brightoral/i })).toBeInTheDocument()
    expect(screen.getByText(/dedicated dental clinic/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Navigation/i })).toBeInTheDocument()
    const links = ['Home', 'About', 'Services', 'Appointment', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('renders recent news', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Recent News/i })).toBeInTheDocument()
    expect(screen.getByText('Tips for Healthy Gums')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Subscribe Newsletter/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link', { name: /Component Dock/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Brightoral\. All rights reserved/)).toBeInTheDocument()
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Your email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByPlaceholderText('Your email')).toHaveValue('test@example.com')
  })
})
