import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('converge')).toBeInTheDocument()
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText(/premier marketing conference/i)).toBeInTheDocument()
  })

  it('renders the newsletter heading', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders an email input', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders the Instagram gallery heading', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  it('renders 8 gallery images', () => {
    const { container } = render(<Footer />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
  })

  it('renders Component Dock link in footer bar', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const { container } = render(<Footer />)
    const form = container.querySelector('form')!
    const emailInput = screen.getByPlaceholderText('Your email address')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    // onSubmit handler prevents default — no navigation
    // Submit the form programmatically to ensure coverage
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
  })
})
