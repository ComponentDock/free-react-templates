import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Smilecraft — Modern Dental Clinic')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /Modern Dentistry/ })).toBeInTheDocument()

    const expectedH2s = [
      'Emergency Cases',
      'Opening Hours',
      'Book an Appointment',
      'Our Service Keeps You Smile',
      'Smilecraft with a Personal Touch',
      'Meet Our Experienced Dentist',
      'Affordable Pricing Plans',
      'Subscribe to our Newsletter',
      'What Our Patients Say',
      'Latest Blog',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
