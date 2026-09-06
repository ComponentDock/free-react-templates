import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer element with semantic role', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })

  it('applies white background and Poppins font', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-white')
    expect(footer.className).toContain("font-['Poppins',sans-serif]")
  })

  it('renders the brand logo text centered in blue-purple', () => {
    render(<Footer />)

    const logo = screen.getByRole('link', { name: 'Soleplate' })
    expect(logo).toBeInTheDocument()
    expect(logo.textContent).toBe('Soleplate')
    expect(logo.className).toContain('text-brand')
    expect(logo.className).toContain('font-black')
  })

  it('renders horizontal navigation links', () => {
    render(<Footer />)

    const links = ['About', 'Services', 'Press', 'Careers', 'FAQ', 'Legal', 'Contact']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link.className).toContain('text-nav-text')
      expect(link.className).toContain('hover:text-brand')
    }
  })

  it('renders footer navigation with accessible label', () => {
    render(<Footer />)

    const nav = screen.getByRole('navigation', { name: 'Footer navigation' })
    expect(nav).toBeInTheDocument()
  })

  it('renders social media icons with accessible labels', () => {
    render(<Footer />)

    const socialNames = ['Instagram', 'Twitter', 'Facebook', 'Dribbble', 'Pinterest']
    for (const name of socialNames) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('aria-label', name)
    }
  })

  it('renders social icons with brand colors', () => {
    render(<Footer />)

    const instagram = screen.getByRole('link', { name: 'Instagram' })
    expect(instagram).toHaveStyle({ color: '#df588a' })

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter).toHaveStyle({ color: '#15b8ff' })

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook).toHaveStyle({ color: '#3742d0' })

    const dribbble = screen.getByRole('link', { name: 'Dribbble' })
    expect(dribbble).toHaveStyle({ color: '#fa38c1' })

    const pinterest = screen.getByRole('link', { name: 'Pinterest' })
    expect(pinterest).toHaveStyle({ color: '#dd4d5a' })
  })

  it('renders social icons as hidden SVGs', () => {
    render(<Footer />)

    const svgs = document.querySelectorAll('svg[aria-hidden="true"]')
    expect(svgs.length).toBe(5)
  })

  it('renders the "Stay in touch" heading', () => {
    render(<Footer />)

    const heading = screen.getByRole('heading', { name: 'Stay in touch' })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('font-bold')
    expect(heading.className).toContain('text-social-heading')
  })

  it('renders copyright text in gray', () => {
    render(<Footer />)

    const copyright = screen.getByText(/All Rights Reserved/)
    expect(copyright).toBeInTheDocument()
    expect(copyright.className).toContain('text-copyright')
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders centered layout with max-width', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const container = footer.querySelector('.mx-auto.max-w-4xl')
    expect(container).not.toBeNull()
    expect(container!.className).toContain('text-center')
  })

  it('renders footer with 7rem vertical padding', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('py-[7rem]')
  })

  it('renders nav links with proper padding', () => {
    render(<Footer />)

    const aboutLink = screen.getByRole('link', { name: 'About' })
    expect(aboutLink.className).toContain('px-[10px]')
  })

  it('renders social icons in a flex container', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const socialList = footer.querySelector('ul.mb-8')
    expect(socialList).not.toBeNull()
    expect(socialList!.className).toContain('flex')
    expect(socialList!.className).toContain('justify-center')
  })

  it('renders navigation lists with proper spacing', () => {
    render(<Footer />)

    const lists = screen.getAllByRole('list')
    expect(lists.length).toBe(2)
  })
})
