import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the photographic background with the brand overlay', () => {
    render(<ErrorSection />)

    const background = screen.getByRole('img', { name: /background/i })
    expect(background).toBeInTheDocument()
    expect(background.getAttribute('style')).toContain('picsum.photos')

    const overlay = background.firstElementChild as HTMLElement
    expect(overlay).toHaveClass('bg-brand/70')
  })

  it('renders the 404 headline and the apologetic message heading', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/404/)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /we are sorry, but the page you requested was not found/i,
    )
  })

  it('renders Go Home and Contact us links', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Contact us' })).toHaveAttribute(
      'href',
      'mailto:hello@example.com',
    )
  })

  it('renders social icon links with accessible names', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByRole('link', { name: 'X (Twitter)' })).toHaveAttribute(
      'href',
      'https://x.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })
})
