import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about section with image and text', () => {
    render(<About />)
    expect(screen.getByAltText('Law office')).toBeDefined()
    expect(screen.getByText(/dedicated team of legal professionals/)).toBeDefined()
  })

  it('renders three columns of content', () => {
    const { container } = render(<About />)
    const cols = container.querySelectorAll('.grid > div')
    expect(cols.length).toBe(3)
  })
})
