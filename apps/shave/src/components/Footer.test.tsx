import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three footer columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })

  it('renders and submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
    const subscribeBtn = screen.getByRole('button', { name: 'Subscribe' })
    expect(subscribeBtn).toBeInTheDocument()
    await user.click(subscribeBtn)
    // onSubmit fires preventDefault
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
  })
})
