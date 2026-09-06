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

  it('renders with white background and Poppins font', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-white')
    expect(footer.className).toContain("font-['Poppins',sans-serif]")
  })

  it('renders five link column headings', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Discover' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Buy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Help' })).toBeInTheDocument()
  })

  it('renders Discover column links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Website editors' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Online retail' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '#')
    // "Services" appears in multiple columns — verify at least 2 exist
    const servicesLinks = screen.getAllByRole('link', { name: 'Services' })
    expect(servicesLinks.length).toBeGreaterThanOrEqual(2)
    for (const link of servicesLinks) {
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders About column links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Team' })).toHaveAttribute('href', '#')
    // "Services" is in both Discover and About — already tested above
    const servicesLinks = screen.getAllByRole('link', { name: 'Services' })
    expect(servicesLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Services column links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Events' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'News' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Awards' })).toHaveAttribute('href', '#')
  })

  it('renders Buy column links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Where to Buy' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Shop Online' })).toHaveAttribute('href', '#')
  })

  it('renders Help column links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Support' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Knowledge Base' })).toHaveAttribute('href', '#')
  })

  it('renders social media icon links', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter).toHaveAttribute('href', '#')
    expect(twitter).toHaveAttribute('target', '_blank')
    expect(twitter).toHaveAttribute('rel', 'noreferrer')

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook).toHaveAttribute('href', '#')
    expect(facebook).toHaveAttribute('target', '_blank')
    expect(facebook).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders social icons with light gray color and purple hover', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('text-[#ccc]')
    expect(twitter.className).toContain('hover:text-[#4200ff]')
  })

  it('renders copyright text', () => {
    render(<Footer />)

    expect(screen.getByText(/Subdivide.*All Rights Reserved/)).toBeInTheDocument()
  })

  it('renders app store links', () => {
    render(<Footer />)

    const appStore = screen.getByRole('link', { name: 'App Store' })
    expect(appStore).toHaveAttribute('href', '#')
    expect(appStore).toHaveAttribute('target', '_blank')
    expect(appStore).toHaveAttribute('rel', 'noreferrer')

    const googleStore = screen.getByRole('link', { name: 'Google Store' })
    expect(googleStore).toHaveAttribute('href', '#')
    expect(googleStore).toHaveAttribute('target', '_blank')
    expect(googleStore).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders app store links with 13px font and gray color', () => {
    render(<Footer />)

    const appStore = screen.getByRole('link', { name: 'App Store' })
    expect(appStore.className).toContain('text-[13px]')
    expect(appStore.className).toContain('text-[#ccc]')
    expect(appStore.className).toContain('hover:text-[#4200ff]')
  })

  it('renders divider between columns and bottom bar', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.innerHTML).toContain('border-t')
    expect(footer.innerHTML).toContain('border-[#efefef]')
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders nav links with transition classes', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Website editors' })
    expect(link.className).toContain('transition-colors')
    expect(link.className).toContain('duration-300')
    expect(link.className).toContain('hover:text-[#4200ff]')
  })

  it('renders correct total link count', () => {
    render(<Footer />)

    // 15 nav links + 2 social + 2 app store + 1 component dock = 20
    const allLinks = screen.getAllByRole('link')
    expect(allLinks.length).toBe(20)
  })

  it('renders link columns in a grid layout', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.innerHTML).toContain('grid')
    expect(footer.innerHTML).toContain('md:grid-cols-5')
  })

  it('renders headings with bold 16px styling', () => {
    render(<Footer />)

    const heading = screen.getByRole('heading', { name: 'Discover' })
    expect(heading.className).toContain('text-sm')
    expect(heading.className).toContain('font-bold')
    expect(heading.className).toContain('mb-5')
  })

  it('renders social icons without first-child padding', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('pl-0')
  })

  it('renders app store links with icon elements', () => {
    render(<Footer />)

    const appStore = screen.getByRole('link', { name: 'App Store' })
    expect(appStore.querySelector('svg')).toBeInTheDocument()

    const googleStore = screen.getByRole('link', { name: 'Google Store' })
    expect(googleStore.querySelector('svg')).toBeInTheDocument()
  })

  it('renders social icon links with icon elements', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.querySelector('svg')).toBeInTheDocument()

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook.querySelector('svg')).toBeInTheDocument()
  })

  it('renders footer with generous vertical padding', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('py-28')
  })
})
