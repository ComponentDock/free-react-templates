import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and subtext', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Our Helping to Save the World',
    )
    expect(screen.getByText(/Together we can make a difference/)).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Our Causes')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const section = container.firstElementChild as HTMLElement
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
