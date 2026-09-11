import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudy } from './CaseStudy'

describe('CaseStudy', () => {
  it('renders the section heading', () => {
    render(<CaseStudy />)
    expect(screen.getByRole('heading', { name: 'Case Study' })).toBeInTheDocument()
  })

  it('renders 4 case study cards', () => {
    render(<CaseStudy />)
    const headings = [
      'Consumer Products Consulting',
      'Digital Growth Strategy',
      'Enterprise Restructuring',
      'Launch & Scale Program',
    ]
    for (const h of headings) {
      expect(screen.getByRole('heading', { name: h })).toBeInTheDocument()
    }
  })

  it('renders category labels', () => {
    render(<CaseStudy />)
    expect(screen.getByText('Finance Solution')).toBeInTheDocument()
    expect(screen.getByText('Marketing & SEO')).toBeInTheDocument()
  })

  it('renders the More Cases button', () => {
    render(<CaseStudy />)
    expect(screen.getByRole('link', { name: 'More Cases' })).toBeInTheDocument()
  })

  it('renders case study images', () => {
    render(<CaseStudy />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
