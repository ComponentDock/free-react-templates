import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Structa — Construction Company Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(
      screen.getByRole('heading', { name: /Experienced Construction Solution/i }),
    ).toBeInTheDocument()

    // About
    expect(
      screen.getByRole('heading', { name: /Complete solution of large projects/i }),
    ).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: /Services we provide/i })).toBeInTheDocument()

    // Projects
    expect(screen.getByRole('heading', { name: /Projects we have Done/i })).toBeInTheDocument()

    // More CTA
    expect(
      screen.getByRole('heading', { name: /Want to build something great/i }),
    ).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()

    // Contact
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()

    // Banner CTA
    expect(screen.getByRole('heading', { name: /Any help needed/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })
})
