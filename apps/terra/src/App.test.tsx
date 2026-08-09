import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Terra — Beauty & Spa Wellness')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Beauty & Spa Wellness/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Beauty Anywhere Anytime' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Beauty & Spa Services' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Discover the Best Beauty Salon Center' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Our Expert Makeup & Beautician Artist' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Our Package Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Make An Appointment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Customers Saying' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
  })
})
