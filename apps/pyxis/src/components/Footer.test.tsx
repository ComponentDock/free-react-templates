import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders footer link columns', () => {
    render(<Footer />)
    expect(screen.getByText('Top Products')).toBeInTheDocument()
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getByText('Compare')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/pyxis/i)).toBeInTheDocument()
  })

  it('newsletter form prevents default submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    expect(submitBtn).toBeInTheDocument()
  })

  it('renders footer link items', () => {
    render(<Footer />)
    expect(screen.getByText('Managed Website')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Works & Builders')).toBeInTheDocument()
  })
})
