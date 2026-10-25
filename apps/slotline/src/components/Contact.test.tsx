import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { contact, site } from '../content'

describe('Contact', () => {
  it('renders the closing band with exactly two CTAs and a dot grid', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: contact.title })).toBeInTheDocument()
    expect(screen.getByText(contact.lede)).toBeInTheDocument()

    const primary = screen.getByRole('link', { name: new RegExp(contact.primary) })
    expect(primary).toHaveAttribute('href', `mailto:${site.email}`)

    expect(screen.getByRole('link', { name: new RegExp(contact.secondary) })).toHaveAttribute('href', '#pricing')

    const dots = document.querySelector('[style*="radial-gradient"]') as HTMLElement
    expect(dots.style.backgroundImage).toContain('radial-gradient')
    expect(dots.style.backgroundSize).toBe('40px 40px')
  })
})
