import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the heading and subtitle', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Crustly')
    expect(screen.getByText(/Where every bite tells a story/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Explore Our Menu')).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<HeroBanner />)
    const img = screen.getByRole('img', { name: /delicious food spread/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/crustly-hero/1920/800')
  })
})
