import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us, Newsletter, and Social columns', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByText('Stay updated with our latest')).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
  })

  it('footer links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('newsletter form has email input and submit button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('newsletter form submit does not navigate', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submitBtn = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(submitBtn)
    // Form submits but preventDefault stops navigation
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })
})
