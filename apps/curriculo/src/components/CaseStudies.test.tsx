import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders section heading', () => {
    render(<CaseStudies />)
    expect(screen.getByText(/featured/i)).toBeInTheDocument()
    expect(screen.getByText(/case studies/i)).toBeInTheDocument()
  })

  it('renders all case study cards', () => {
    render(<CaseStudies />)
    expect(screen.getByText('E-commerce Platform Redesign')).toBeInTheDocument()
    expect(screen.getByText('Fitness App User Experience')).toBeInTheDocument()
    expect(screen.getByText('Tech Startup Brand Identity')).toBeInTheDocument()
  })

  it('renders metrics', () => {
    render(<CaseStudies />)
    expect(screen.getByText('45%')).toBeInTheDocument()
    expect(screen.getByText('500K+')).toBeInTheDocument()
    expect(screen.getByText('$12M')).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<CaseStudies />)
    expect(screen.getByText('UX Design')).toBeInTheDocument()
    expect(screen.getByText('Mobile Design')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })

  it('renders View Case Study links', () => {
    render(<CaseStudies />)
    const links = screen.getAllByText('View Case Study')
    expect(links).toHaveLength(3)
  })
})
