import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders headline and tagline', () => {
    render(<Banner />)
    expect(screen.getByText('Wanderly')).toBeInTheDocument()
    expect(screen.getByText(/Let's start your journey/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Banner />)
    expect(screen.getByText('Discover Now')).toBeInTheDocument()
  })

  it('links CTA to booking section', () => {
    render(<Banner />)
    const cta = screen.getByText('Discover Now')
    expect(cta).toHaveAttribute('href', '#booking')
  })
})
