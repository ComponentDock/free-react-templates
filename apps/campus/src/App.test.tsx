import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  ctaHeading,
  features,
  heroEyebrow,
  heroTitle,
  popularHeading,
  skipLabel,
  testimonialsHeading,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Campus — Online University Template')
  })

  it('composes all sections in order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Header
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    // Hero
    expect(screen.getByText(heroEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    // Feature band
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
    }
    // Testimonials
    expect(screen.getByRole('heading', { level: 2, name: testimonialsHeading })).toBeInTheDocument()
    // Popular courses
    expect(screen.getByRole('heading', { level: 2, name: popularHeading })).toBeInTheDocument()
    // CTA
    expect(screen.getByRole('heading', { level: 2, name: ctaHeading })).toBeInTheDocument()
  })

  it('provides a skip link that jumps to the main landmark', async () => {
    const user = userEvent.setup()
    render(<App />)

    const skip = screen.getByRole('link', { name: skipLabel })
    expect(skip).toHaveAttribute('href', '#main')
    await user.tab()
    expect(skip).toHaveFocus()
  })
})
