import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToTop } from './CallToTop'

describe('CallToTop', () => {
  it('renders all three feature cards', () => {
    render(<CallToTop />)
    expect(screen.getByText('Visa Consultation')).toBeInTheDocument()
    expect(screen.getByText('Fast Processing')).toBeInTheDocument()
    expect(screen.getByText('Worldwide Access')).toBeInTheDocument()
  })

  it('renders the descriptions for each card', () => {
    render(<CallToTop />)
    expect(screen.getByText(/Get expert advice on visa applications/)).toBeInTheDocument()
    expect(screen.getByText(/quick and efficient processing/)).toBeInTheDocument()
    expect(screen.getByText(/immigration services for destinations/)).toBeInTheDocument()
  })
})
