import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtitle', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A Best Place To Stay')
    expect(screen.getByText('Welcome To 5 Star Hotel')).toBeInTheDocument()
  })

  it('renders the Book Now CTA', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('renders the scroll down link', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Scroll down' })).toBeInTheDocument()
  })

  it('has a background image with dark overlay', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section') as HTMLElement
    expect(section).not.toBeNull()

    const bgImage = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(bgImage.style.backgroundImage).toContain('picsum.photos')
  })
})
