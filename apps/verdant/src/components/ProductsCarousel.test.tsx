import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ProductsCarousel } from './ProductsCarousel'

describe('ProductsCarousel', () => {
  it('renders the eyebrow and heading', () => {
    render(<ProductsCarousel />)
    expect(screen.getByText('Products & Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Share Before You Download' }),
    ).toBeInTheDocument()
  })

  it('shows three cards at once with photo, uppercase title and Learn More link', () => {
    render(<ProductsCarousel />)
    const firstCard = screen.getByRole('heading', { level: 3, name: 'Pixel Perfect' })
    expect(firstCard).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Template Under CCA 3.0 Unported' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Useful Web Templates' }),
    ).toBeInTheDocument()
    const learnMore = screen.getAllByRole('link', { name: 'Learn More' })
    expect(learnMore.length).toBe(3)
    expect(learnMore[0]!.parentElement!.querySelector('img')).not.toBeNull()
  })

  it('advances through the carousel to reveal all six cards', async () => {
    const user = userEvent.setup()
    render(<ProductsCarousel />)
    await user.click(screen.getByRole('button', { name: 'Next product' }))
    expect(screen.getByRole('heading', { level: 3, name: 'HTML5 / CSS3' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next product' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Bootstrap 4' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next product' }))
    expect(screen.getByRole('heading', { level: 3, name: 'SCSS' })).toBeInTheDocument()
  })

  it('wraps back to the first card', async () => {
    const user = userEvent.setup()
    render(<ProductsCarousel />)
    await user.click(screen.getByRole('button', { name: 'Previous product' }))
    expect(screen.getByRole('heading', { level: 3, name: 'SCSS' })).toBeInTheDocument()
  })

  it('jumps to a card via the dots', async () => {
    const user = userEvent.setup()
    render(<ProductsCarousel />)
    await user.click(screen.getByRole('button', { name: 'Show product 2' }))
    expect(screen.getByRole('heading', { level: 3, name: 'HTML5 / CSS3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show product 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('lifts cards with a soft shadow on hover', () => {
    render(<ProductsCarousel />)
    const card = screen
      .getByRole('heading', { level: 3, name: 'Pixel Perfect' })
      .closest('article')!
    expect(card.className).toMatch(/hover:shadow/)
  })
})
