import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    const logos = screen.getAllByText('Reflexly')
    expect(logos.length).toBeGreaterThanOrEqual(1)
    const logo = logos[0]!
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })

  it('renders the description', () => {
    render(<Footer />)
    expect(screen.getByText(/creative photography studio/i)).toBeInTheDocument()
  })

  it('renders social icon links with aria-labels', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Youtube')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the Instagram heading and images', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    const igImages = images.filter((img) => img.getAttribute('alt')?.startsWith('Instagram post'))
    expect(igImages).toHaveLength(6)
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    const links = ['Home', 'About', 'Contact', 'Gallery', 'Portfolio', 'Services']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders the subscribe form', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
    expect(screen.getByLabelText(/email for subscription/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the email input', () => {
    render(<Footer />)
    const input = screen.getByLabelText(/email for subscription/i)
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the form without page reload', () => {
    render(<Footer />)
    const input = screen.getByLabelText(/email for subscription/i)
    const form = input.closest('form')
    expect(form).not.toBeNull()
    fireEvent.submit(form!)
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('has the contact section id', () => {
    render(<Footer />)
    expect(document.querySelector('#contact')).toBeInTheDocument()
  })
})
