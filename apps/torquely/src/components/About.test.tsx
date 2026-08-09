import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the headline, image, and the three value columns', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /45 years serving customer car/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mechanic repairing an engine/i })).toBeInTheDocument()
    for (const column of ['Our Mission', 'Our Vision', 'Our Value']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }
  })
})
