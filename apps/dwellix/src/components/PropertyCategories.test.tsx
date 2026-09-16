import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PropertyCategories } from './PropertyCategories'

describe('PropertyCategories', () => {
  it('renders the section heading', () => {
    render(<PropertyCategories />)
    expect(screen.getByText(/Categories By/)).toBeInTheDocument()
  })

  it('renders all 5 category cards', () => {
    render(<PropertyCategories />)
    expect(screen.getByText('Villa In New York')).toBeInTheDocument()
    expect(screen.getByText('Home In LA')).toBeInTheDocument()
    expect(screen.getByText('Home In Landport')).toBeInTheDocument()
    expect(screen.getByText('Home In Springfield')).toBeInTheDocument()
    expect(screen.getByText('Villa In Sydney')).toBeInTheDocument()
  })

  it('displays property counts', () => {
    render(<PropertyCategories />)
    const counts = screen.getAllByText(/Properties/)
    expect(counts.length).toBe(5)
  })

  it('displays starting prices', () => {
    render(<PropertyCategories />)
    expect(screen.getByText('From $28,000')).toBeInTheDocument()
    expect(screen.getByText('From $10,000')).toBeInTheDocument()
    expect(screen.getByText('From $36,000')).toBeInTheDocument()
  })
})
