import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/We Love To Build/)).toBeInTheDocument()
  })

  it('renders Watch Video CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
