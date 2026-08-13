import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'
import { cases } from '../data'

describe('CaseStudies', () => {
  it('renders the section heading', () => {
    render(<CaseStudies />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: '1000+ Completed Cases Successfully',
      }),
    ).toBeInTheDocument()
  })

  it('renders six case cards with category and title', () => {
    render(<CaseStudies />)
    expect(cases).toHaveLength(6)
    for (const caseStudy of cases) {
      expect(screen.getByRole('heading', { level: 3, name: caseStudy.title })).toBeInTheDocument()
      expect(screen.getByText(caseStudy.category)).toBeInTheDocument()
    }
  })
})
