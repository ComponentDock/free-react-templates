import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the title and a 2x2 grid of four feature cards', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /How Vinyasa can change your life/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Properties' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Legal Notice' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Programs' })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
  })
})
