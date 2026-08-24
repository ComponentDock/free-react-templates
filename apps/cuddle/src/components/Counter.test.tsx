import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders four stat cards with correct values', () => {
    render(<Counter />)

    expect(screen.getByText('$60M')).toBeInTheDocument()
    expect(screen.getByText('9200')).toBeInTheDocument()
    expect(screen.getByText('5800')).toBeInTheDocument()
    expect(screen.getByText('2750')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counter />)

    expect(screen.getByText('Funds Raised')).toBeInTheDocument()
    expect(screen.getByText('Happy Donors')).toBeInTheDocument()
    expect(screen.getByText('Completed Projects')).toBeInTheDocument()
    expect(screen.getByText('Volunteers')).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<Counter />)

    const img = screen.getByAltText('Charity event background')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/cuddle-counter'))
  })

  it('has section with id counter', () => {
    const { container } = render(<Counter />)

    const section = container.querySelector('#counter')
    expect(section).toBeInTheDocument()
  })
})
