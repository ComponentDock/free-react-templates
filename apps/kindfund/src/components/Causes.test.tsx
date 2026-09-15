import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the section heading', () => {
    render(<Causes />)
    expect(screen.getByText('Popular Causes')).toBeInTheDocument()
  })

  it('renders all 3 cause cards', () => {
    render(<Causes />)
    expect(screen.getByText('Help us to Send Food')).toBeInTheDocument()
    expect(screen.getByText('Clothes For Everyone')).toBeInTheDocument()
    expect(screen.getByText('Water For All Children')).toBeInTheDocument()
  })

  it('renders progress information for each cause', () => {
    render(<Causes />)
    expect(screen.getByText('Raised: $5,000.00')).toBeInTheDocument()
    expect(screen.getByText('Goal: $9,000.00')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Causes />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })
})
