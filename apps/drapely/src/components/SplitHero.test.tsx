import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SplitHero } from './SplitHero'

describe('SplitHero', () => {
  it('renders the eyebrow, headline and black CTA', () => {
    render(<SplitHero id="home" title="Arrivals Sales" seed="drapely-hero-arrivals" />)

    expect(screen.getByText('#New Summer Collection 2019')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Arrivals Sales')

    const cta = screen.getByRole('link', { name: 'Shop Now' })
    expect(cta).toHaveAttribute('href', '#popular')
  })

  it('renders the band photo with a seeded placeholder and an alt text', () => {
    const { container } = render(
      <SplitHero id="new-shoes" title="New Shoes" seed="drapely-hero-shoes" />,
    )

    const image = screen.getByRole('img', { name: 'New Shoes campaign photo' })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/drapely-hero-shoes/900/1000')
    expect(container.querySelector('section')).toHaveAttribute('id', 'new-shoes')
  })
})
