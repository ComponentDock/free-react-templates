import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Luxury & Comfort')
    expect(screen.getByText('Beach Hotel — More than a stay')).toBeInTheDocument()
  })

  it('has the dark overlay over the background image', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-black\\/76')
    expect(overlay).toBeInTheDocument()
  })
})
