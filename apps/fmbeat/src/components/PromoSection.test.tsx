import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PromoSection } from './PromoSection'

describe('PromoSection', () => {
  it('has testid promo-section', () => {
    render(<PromoSection />)
    expect(screen.getByTestId('promo-section')).toBeInTheDocument()
  })

  it('renders three promo cards with headings', () => {
    render(<PromoSection />)
    expect(screen.getByText("Our DJ's")).toBeInTheDocument()
    expect(screen.getByText('Live Streams')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders promo card images', () => {
    render(<PromoSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
