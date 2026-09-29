import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a background image section', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('has no text overlay', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.querySelector('h1')).not.toBeInTheDocument()
    expect(section?.querySelector('p')).not.toBeInTheDocument()
  })
})
