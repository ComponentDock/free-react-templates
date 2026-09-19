import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Curated Collections')
  })

  it('renders subheadline', () => {
    render(<Hero />)
    expect(
      screen.getByText('Discover handpicked products for the modern lifestyle'),
    ).toBeInTheDocument()
  })

  it('renders Shop Now CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('has background image', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/shopbox-hero')
  })

  it('has overlay for readability', () => {
    render(<Hero />)
    const overlay = document.querySelector('.bg-black\\/40')
    expect(overlay).toBeInTheDocument()
  })

  it('CTA is a link', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const cta = screen.getByText('Shop Now')
    expect(cta.tagName).toBe('A')
    await user.click(cta)
    expect(cta).toBeInTheDocument()
  })
})
