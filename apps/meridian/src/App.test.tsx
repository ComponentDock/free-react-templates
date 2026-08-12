import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HERO_HEADLINE } from './data'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes every section in order', () => {
    render(<App />)
    expect(document.title).toBe('Meridian — Business Consulting')
    expect(screen.getByRole('main')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Meridian home' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { level: 1, name: HERO_HEADLINE })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Office team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What we do best' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Consultation' })).toBeInTheDocument()
    expect(screen.getByText(/by John Freeman/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Work with us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Contact Info' })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 2 })
    const servicesIndex = headings.findIndex((h) => h.textContent === 'What we do best')
    const galleryIndex = headings.findIndex((h) => h.textContent === 'Work with us')
    expect(servicesIndex).toBeGreaterThanOrEqual(0)
    expect(galleryIndex).toBeGreaterThan(servicesIndex)
  })
})
