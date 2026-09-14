import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Us')
  })

  it('renders descriptive text', () => {
    render(<About />)
    expect(screen.getAllByText(/all-powerful Pointing/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about fulcrum/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('fulcrum-about'))
  })
})
