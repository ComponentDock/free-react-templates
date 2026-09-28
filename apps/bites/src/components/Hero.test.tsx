import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/delicious/i)
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/crafting sweet moments/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /check our menu/i })).toBeInTheDocument()
  })

  it('CTA links to menu section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /check our menu/i })
    expect(cta).toHaveAttribute('href', '#menu')
  })

  it('renders the hero image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Delicious food')).toBeInTheDocument()
  })
})
