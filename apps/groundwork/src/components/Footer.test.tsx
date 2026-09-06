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

  it('renders with black background', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-black')
  })

  it('renders the brand logo', () => {
    render(<Footer />)

    const logo = screen.getByText('Groundwork')
    expect(logo).toBeInTheDocument()
    expect(logo.tagName).toBe('A')
    expect(logo).toHaveAttribute('href', '#')
  })

  it('renders the brand description paragraph', () => {
    render(<Footer />)

    expect(screen.getByText(/Foundation templates for modern websites/)).toBeInTheDocument()
  })

  it('renders the Shop column heading and links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Shop' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sell online' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Examples' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Website editors' })).toHaveAttribute('href', '#')
    const onlineRetail = screen.getAllByRole('link', { name: 'Online retail' })
    expect(onlineRetail.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Press column heading and links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Press' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Events' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'News' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Awards' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Testimonials' })).toHaveAttribute('href', '#')
  })

  it('renders the About column heading and links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Team' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Career' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Contacts' })).toHaveAttribute('href', '#')
  })

  it('renders policy links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Code of Conduct' })).toHaveAttribute('href', '#')
  })

  it('renders social media icon links', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter).toHaveAttribute('href', '#')
    expect(twitter).toHaveAttribute('target', '_blank')
    expect(twitter).toHaveAttribute('rel', 'noreferrer')

    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('renders the disclaimer paragraph', () => {
    render(<Footer />)

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders four column headings', () => {
    render(<Footer />)

    const headings = screen.getAllByRole('heading')
    const h3Headings = headings.filter((h) => h.tagName === 'H3')
    expect(h3Headings).toHaveLength(3)
    expect(h3Headings[0]).toHaveTextContent('Shop')
    expect(h3Headings[1]).toHaveTextContent('Press')
    expect(h3Headings[2]).toHaveTextContent('About')
  })

  it('renders social icons with #ccc color class', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('text-[#ccc]')
  })

  it('renders policy links with white text class', () => {
    render(<Footer />)

    const privacy = screen.getByRole('link', { name: 'Privacy Policy' })
    expect(privacy.className).toContain('text-white')
  })

  it('renders link columns with correct link count', () => {
    render(<Footer />)

    // Shop: 5, Press: 5, About: 5 = 15 link column items
    const allLinks = screen.getAllByRole('link')
    // 1 brand + 15 column links + 3 policy + 4 social + 1 component dock = 24
    expect(allLinks.length).toBe(24)
  })
})
