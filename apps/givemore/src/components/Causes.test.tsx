import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the section heading', () => {
    render(<Causes />)
    expect(screen.getByText('Featured Causes')).toBeInTheDocument()
    expect(screen.getByText('Donation shows Passion')).toBeInTheDocument()
  })

  it('renders all 3 cause cards', () => {
    render(<Causes />)
    expect(screen.getByText('Clean Water for Rural Communities')).toBeInTheDocument()
    expect(screen.getByText('Building Schools in Underserved Areas')).toBeInTheDocument()
    expect(screen.getByText('Emergency Medical Relief Fund')).toBeInTheDocument()
  })

  it('renders progress information for each cause', () => {
    render(<Causes />)
    expect(screen.getByText('Goal: $25,000')).toBeInTheDocument()
    expect(screen.getByText('Raised: $15,330')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Causes />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })
})
