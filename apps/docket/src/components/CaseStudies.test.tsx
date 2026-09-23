import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders section heading', () => {
    render(<CaseStudies />)
    expect(screen.getByRole('heading', { name: /recent case studies/i })).toBeInTheDocument()
  })

  it('renders all seven case study items', () => {
    render(<CaseStudies />)
    const titles = [
      'Major Fraud Case Dismissed',
      'Child Custody Victory',
      'Corporate Merger Success',
      'Maximum Compensation Awarded',
      'Property Dispute Resolved',
      'DUI Charges Reduced',
      'Appeal Successfully Won',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders category tags', () => {
    render(<CaseStudies />)
    expect(screen.getAllByText('Criminal Defense').length).toBe(2)
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('Personal Injury')).toBeInTheDocument()
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Judicial Law')).toBeInTheDocument()
  })
})
