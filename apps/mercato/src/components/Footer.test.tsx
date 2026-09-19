import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us column', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders Newsletter column', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders Instagram Feed column', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram Feed')).toBeInTheDocument()
  })

  it('renders Follow Us column', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders newsletter email input', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
  })

  it('renders newsletter submit button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('submits newsletter form without page navigation', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByLabelText('Subscribe'))
    expect(input).toHaveValue('test@example.com')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders Instagram images', () => {
    render(<Footer />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
  })

  it('renders the About Us description', () => {
    render(<Footer />)
    expect(screen.getByText(/Mercato is your destination/)).toBeInTheDocument()
  })

  it('renders Let us be social text', () => {
    render(<Footer />)
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
  })
})
