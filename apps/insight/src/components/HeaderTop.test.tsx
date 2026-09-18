import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderTop } from './HeaderTop'

describe('HeaderTop', () => {
  it('renders address and email', () => {
    render(<HeaderTop />)
    expect(screen.getByText(/Kings land, New York/)).toBeInTheDocument()
    expect(screen.getByText(/info@insight.com/)).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<HeaderTop />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })
})
