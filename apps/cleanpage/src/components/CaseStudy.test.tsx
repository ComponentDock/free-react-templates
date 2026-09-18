import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudy } from './CaseStudy'

describe('CaseStudy', () => {
  it('renders the heading', () => {
    render(<CaseStudy />)
    expect(screen.getByText('Case Study')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<CaseStudy />)
    expect(screen.getByText('Our latest update')).toBeInTheDocument()
  })

  it('renders 3 case study cards', () => {
    render(<CaseStudy />)
    const titles = screen.getAllByText(/Even the all-powerful Pointing/)
    expect(titles).toHaveLength(3)
  })

  it('shows dates and authors', () => {
    render(<CaseStudy />)
    const dates = screen.getAllByText('Oct. 12, 2018')
    expect(dates).toHaveLength(3)
    const authors = screen.getAllByText('Admin')
    expect(authors).toHaveLength(3)
  })
})
