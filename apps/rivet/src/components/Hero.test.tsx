import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Creating A Brighter Future',
    )
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/trusted construction and development company/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Get A Quote' })).toBeInTheDocument()
  })

  it('has the background image style', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle({
      backgroundImage: 'url(https://picsum.photos/seed/rivet-1/1200/600)',
    })
  })
})
