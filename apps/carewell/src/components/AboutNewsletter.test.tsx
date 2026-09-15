import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutNewsletter } from './AboutNewsletter'

describe('AboutNewsletter', () => {
  it('renders about card heading', () => {
    render(<AboutNewsletter />)
    expect(screen.getByText('Create Fundraising Today')).toBeInTheDocument()
  })

  it('renders about card description', () => {
    render(<AboutNewsletter />)
    expect(screen.getByText(/French Revolution/)).toBeInTheDocument()
  })

  it('renders about card image', () => {
    const { container } = render(<AboutNewsletter />)
    const aboutImg = container.querySelector('img[alt="About Carewell"]')
    expect(aboutImg).toBeInTheDocument()
  })

  it('renders newsletter heading', () => {
    render(<AboutNewsletter />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders newsletter description', () => {
    render(<AboutNewsletter />)
    expect(screen.getByText('Stay updated with our latest trends')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<AboutNewsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<AboutNewsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<AboutNewsletter />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders Follow Us text', () => {
    render(<AboutNewsletter />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('handles form submission without page reload', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<AboutNewsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(input).toHaveValue('test@example.com')
  })
})
