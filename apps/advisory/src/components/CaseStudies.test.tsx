import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders the section heading', () => {
    render(<CaseStudies />)
    expect(screen.getByText('Case studies')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Some great stuffs we have done',
    )
  })

  it('renders all three case study cards', () => {
    render(<CaseStudies />)
    expect(screen.getByText('Starts the automated process.')).toBeInTheDocument()
    expect(screen.getByText('Media planning strategy.')).toBeInTheDocument()
    expect(screen.getByText('Professional HR solutions.')).toBeInTheDocument()
  })

  it('renders case study tags', () => {
    render(<CaseStudies />)
    expect(screen.getByText('Urban')).toBeInTheDocument()
    expect(screen.getByText('Corporate')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
  })

  it('renders case study images with alt text', () => {
    render(<CaseStudies />)
    expect(screen.getByRole('img', { name: 'Starts the automated process.' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Media planning strategy.' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Professional HR solutions.' })).toBeInTheDocument()
  })
})
