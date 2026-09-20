import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the SHOW THUMBNAILS button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'SHOW THUMBNAILS' })).toHaveAttribute(
      'href',
      '#thumbnails',
    )
  })

  it('renders social media icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Vimeo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('social links have correct hrefs', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', '#')
  })

  it('renders as a footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
