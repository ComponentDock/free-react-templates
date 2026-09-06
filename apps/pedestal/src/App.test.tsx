import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Pedestal — Footer Template')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Footer Demo')).toBeInTheDocument()
  })

  it('renders the content area with heading', () => {
    render(<App />)

    expect(screen.getByText('Footer Demo')).toBeInTheDocument()
  })

  it('renders the About Us section', () => {
    render(<App />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    const paragraphs = screen.getAllByText(/Laboriosam itaque unde facere/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(1)
  })

  it('renders contact info links', () => {
    render(<App />)

    const phone = screen.getByRole('link', { name: /\+1 291 3912 329/ })
    expect(phone).toHaveAttribute('href', '#')
    const email = screen.getByRole('link', { name: /info@gmail\.com/ })
    expect(email).toHaveAttribute('href', '#')
  })

  it('renders the subscribe form', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('Enter your e-mail')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('renders Latest Tweet section', () => {
    render(<App />)

    expect(screen.getByText('Latest Tweet')).toBeInTheDocument()
  })

  it('renders Instagram section with images', () => {
    render(<App />)

    expect(screen.getByText('Instagram')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('renders footer navigation menu', () => {
    render(<App />)

    const navLinks = ['Home', 'About', 'Our works', 'Services', 'Blog', 'Contacts']
    navLinks.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', '#')
    })
  })

  it('renders Component Dock attribution', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders the dark footer with correct background', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })
})
