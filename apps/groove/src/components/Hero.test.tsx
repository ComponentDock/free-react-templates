import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, blurb, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('The electro vibe')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Groove Sessions/)

    expect(screen.getByText(/Experience the electrifying sound/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy tickets' })).toBeInTheDocument()
  })

  it('shows a decorative hero background image', () => {
    render(<Hero />)

    // The hero image is aria-hidden, so query via the section
    const section = screen.getByRole('region', { name: 'Hero' })
    const img = section.querySelector('img')
    expect(img).not.toBeNull()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(img).toHaveAttribute('aria-hidden', 'true')
  })
})
