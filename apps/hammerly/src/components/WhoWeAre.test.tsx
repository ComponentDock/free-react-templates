import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhoWeAre } from './WhoWeAre'

describe('WhoWeAre', () => {
  it('renders heading', () => {
    render(<WhoWeAre />)
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
  })

  it('renders content text', () => {
    render(<WhoWeAre />)
    const matches = screen.getAllByText(/Lorem ipsum dolor sit amet/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders image', () => {
    render(<WhoWeAre />)
    expect(screen.getByRole('img', { name: /our construction team/i })).toBeInTheDocument()
  })
})
