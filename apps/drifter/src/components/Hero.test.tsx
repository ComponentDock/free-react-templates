import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('This is me')).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Discover Now' })).toBeInTheDocument()
  })

  it('has correct CTA link target', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Discover Now' })
    expect(cta).toHaveAttribute('href', '#about')
  })
})
