import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmergencyStrip } from './EmergencyStrip'

describe('EmergencyStrip', () => {
  it('renders emergency phone and opening hours', () => {
    render(<EmergencyStrip />)

    expect(screen.getByRole('heading', { level: 2, name: 'Emergency Cases' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Opening Hours' })).toBeInTheDocument()

    expect(screen.getByText('+123-456-7890')).toBeInTheDocument()
    expect(screen.getByText('Mon – Fri: 8:00 – 19:00')).toBeInTheDocument()
    expect(screen.getByText('Saturday: 10:00 – 17:00')).toBeInTheDocument()
    expect(screen.getByText('Sunday: 10:00 – 16:00')).toBeInTheDocument()
  })

  it('has a phone link', () => {
    render(<EmergencyStrip />)

    const phoneLink = screen.getByRole('link', { name: '+123-456-7890' })
    expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890')
  })
})
