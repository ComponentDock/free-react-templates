import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the site name', () => {
    render(<Sidebar />)
    expect(screen.getByText('Repertoire')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders social media links with correct targets', () => {
    render(<Sidebar />)

    const facebookLink = screen.getByRole('link', { name: 'Facebook' })
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com')
    expect(facebookLink).toHaveAttribute('target', '_blank')

    const twitterLink = screen.getByRole('link', { name: 'Twitter' })
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com')
    expect(twitterLink).toHaveAttribute('target', '_blank')

    const instagramLink = screen.getByRole('link', { name: 'Instagram' })
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com')
    expect(instagramLink).toHaveAttribute('target', '_blank')

    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('renders the Component Dock footer text', () => {
    render(<Sidebar />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
