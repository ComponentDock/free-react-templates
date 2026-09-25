import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders section heading', () => {
    render(<News />)
    expect(screen.getByText('News')).toBeInTheDocument()
  })

  it('renders all three news cards', () => {
    render(<News />)
    expect(screen.getByText('We Have Delicious Food')).toBeInTheDocument()
    expect(screen.getByText('Chef Special Menu')).toBeInTheDocument()
    expect(screen.getByText('Marriage Celebrations')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<News />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#news')
    })
  })
})
