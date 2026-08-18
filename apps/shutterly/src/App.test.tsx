import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every section in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Shutterly — Photographer Portfolio')

    // Hero → About → Gallery → Services → Testimonial → Pricing → Instagram → Footer
    expect(screen.getByRole('heading', { level: 1, name: 'Miami Lake' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'I Click Moment, that you love' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /portfolio gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'I do for you' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose a plan that suit you' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section order: the about heading appears before the services heading
    const about = screen.getByRole('heading', { level: 2, name: 'I Click Moment, that you love' })
    const services = screen.getByRole('heading', { level: 2, name: 'I do for you' })
    expect(about.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
