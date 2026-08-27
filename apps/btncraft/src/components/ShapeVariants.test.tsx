import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShapeVariants } from './ShapeVariants'

describe('ShapeVariants', () => {
  it('renders section heading', () => {
    render(<ShapeVariants />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Pill & Square/)
  })

  it('renders pill and square sub-headings', () => {
    render(<ShapeVariants />)
    expect(screen.getByText('Pill Buttons')).toBeInTheDocument()
    expect(screen.getByText('Square Buttons')).toBeInTheDocument()
  })

  it('renders pill and square button variants', () => {
    render(<ShapeVariants />)
    const pillBtns = screen.getAllByText('Primary')
    expect(pillBtns.length).toBeGreaterThanOrEqual(2)
  })
})
