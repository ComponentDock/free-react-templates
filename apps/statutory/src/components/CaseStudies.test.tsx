import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders heading and case cards', () => {
    render(<CaseStudies />)
    expect(screen.getByText('Recent Case Studies')).toBeInTheDocument()
    expect(screen.getAllByText('Business Law').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Criminal Offense')).toBeInTheDocument()
    expect(screen.getByText('Dispute Resolution')).toBeInTheDocument()
    expect(screen.getAllByText('Family Law').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Personal Injury')).toBeInTheDocument()
  })
})
