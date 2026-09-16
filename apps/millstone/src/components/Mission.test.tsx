import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mission } from './Mission'

describe('Mission', () => {
  it('renders the heading', () => {
    render(<Mission />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Our Mission/i)
  })

  it('renders 4 mission cards', () => {
    render(<Mission />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
  })

  it('renders mission titles', () => {
    render(<Mission />)
    const titles = ['Quality Control', 'Safety First', 'Innovation', 'Sustainability']
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})
