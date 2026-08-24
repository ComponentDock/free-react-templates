import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByText('Explore Our Categories & Places')).toBeInTheDocument()
  })

  it('renders all 4 category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Land')).toBeInTheDocument()
    expect(screen.getByText('Residential')).toBeInTheDocument()
    expect(screen.getByText('Commercial')).toBeInTheDocument()
    expect(screen.getByText('Industrial')).toBeInTheDocument()
  })

  it('renders property counts for each category', () => {
    render(<Categories />)
    expect(screen.getByText('24 Properties')).toBeInTheDocument()
    expect(screen.getByText('48 Properties')).toBeInTheDocument()
    expect(screen.getByText('32 Properties')).toBeInTheDocument()
    expect(screen.getByText('16 Properties')).toBeInTheDocument()
  })
})
