import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Benefact — Charity Template')
  })

  it('composes every section in the reference order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((h) => h.textContent)
    expect(headings).toEqual([
      'Join The Movement To end Child Poverty',
      'Livelihood',
      'Natural Remedies',
      'New Class Rooms',
      'Latest Causes',
      'Alias Odit Ipsam Quas Unde Obcaecati',
      'Alias Odit Ipsam Quas Unde Obcaecati',
      'Alias Odit Ipsam Quas Unde Obcaecati',
      'Why Choose Us',
      'Odit Reiciendis',
      'Nisi Sint Explicabo',
      'Accusamus Labore Necessitatibus',
      'Consectetur Dolor Elit',
      'Latest Event',
      'Ratione Delectus Assumenda Rem Modi Quaerat Laborum',
      'Ratione Delectus Assumenda Rem Modi Quaerat Laborum',
      'Donate Now',
      'Helping the Homeless, Hungry, and Hurtings Children',
      'About Us',
      'Features',
      'Subscribe to Newsletter',
      'Follow Us',
    ])
  })

  it('renders the main landmark with all section components', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
    expect(main?.querySelectorAll('section').length).toBeGreaterThanOrEqual(6)
    expect(screen.getByRole('link', { name: 'Benefact' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Donate Now' })).toHaveLength(2)
  })
})
