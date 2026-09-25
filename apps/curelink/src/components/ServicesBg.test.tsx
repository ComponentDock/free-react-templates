import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesBg } from './ServicesBg'

describe('ServicesBg', () => {
  it('renders the heading and all four service cards', () => {
    render(<ServicesBg />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Laboratory Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'General Treatment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Emergency Service' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '24/7 Help & Support' })).toBeInTheDocument()
  })

  it('each service card has a description paragraph', () => {
    render(<ServicesBg />)

    expect(screen.getByText(/accurate and timely diagnostic/)).toBeInTheDocument()
    expect(screen.getByText(/wide range of medical conditions/)).toBeInTheDocument()
    expect(screen.getByText(/staffed around the clock/)).toBeInTheDocument()
    expect(screen.getByText(/round-the-clock helpline support/)).toBeInTheDocument()
  })

  it('has a decorative background image', () => {
    const { container } = render(<ServicesBg />)

    // Background image has alt="" (decorative/presentation), so query by src
    const bgImage = container.querySelector('img[src*="picsum.photos"]')
    expect(bgImage).toBeInTheDocument()
    expect(bgImage).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
