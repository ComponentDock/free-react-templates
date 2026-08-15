import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('shows the heading, three class cards with images, and an explore button', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: 'All in one Yoga classes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Yoga Program' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cardio Program' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Body Building' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(screen.getByRole('link', { name: 'Explore our classes' })).toHaveAttribute(
      'href',
      '#schedule',
    )
  })
})
