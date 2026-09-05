import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders the heading and all case study cards', () => {
    render(<CaseStudies />)
    expect(screen.getByRole('heading', { name: /Recent Case Study/i })).toBeInTheDocument()
    expect(screen.getByText('Corporate Litigation Victory')).toBeInTheDocument()
    expect(screen.getByText('Family Law Resolution')).toBeInTheDocument()
    expect(screen.getByText('Criminal Defense Success')).toBeInTheDocument()
  })
})
