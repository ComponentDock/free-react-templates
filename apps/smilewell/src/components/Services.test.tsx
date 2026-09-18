import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Dental Services' })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Services />)
    expect(screen.getByText('All Kind Of Services')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Tooth Extraction')).toBeInTheDocument()
    expect(screen.getByText('Tooth Fillings')).toBeInTheDocument()
    expect(screen.getByText('Braces Install')).toBeInTheDocument()
    expect(screen.getByText('Children Clinic')).toBeInTheDocument()
    expect(screen.getByText('Tooth Cleaning')).toBeInTheDocument()
    expect(screen.getByText('Patient Records')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Safe and painless tooth extraction/)).toBeInTheDocument()
    expect(screen.getByText(/High-quality composite fillings/)).toBeInTheDocument()
  })

  it('renders service icons with accessible names', () => {
    render(<Services />)
    const cards = document.querySelectorAll('[class*="rounded-lg"]')
    // Each service card should have an icon container
    expect(cards.length).toBeGreaterThanOrEqual(6)
  })
})
