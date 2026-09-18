import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryTiles } from './CategoryTiles'

describe('CategoryTiles', () => {
  it('renders both category tiles', () => {
    render(<CategoryTiles />)
    expect(screen.getByText('Agency')).toBeInTheDocument()
    expect(screen.getByText('What We Do?')).toBeInTheDocument()
  })

  it('renders links for each tile', () => {
    render(<CategoryTiles />)
    const agencyLink = screen.getByText('Agency')
    const whatWeDoLink = screen.getByText('What We Do?')
    expect(agencyLink.closest('a')).toHaveAttribute('href', '#')
    expect(whatWeDoLink.closest('a')).toHaveAttribute('href', '#')
  })
})
