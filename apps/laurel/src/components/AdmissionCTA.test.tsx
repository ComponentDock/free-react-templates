import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AdmissionCTA } from './AdmissionCTA'

describe('AdmissionCTA', () => {
  it('renders the heading', () => {
    render(<AdmissionCTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Ready to start your journey/i,
    )
  })

  it('renders the description', () => {
    render(<AdmissionCTA />)
    expect(screen.getByText(/Take the first step/)).toBeInTheDocument()
  })

  it('renders the Apply Now button', () => {
    render(<AdmissionCTA />)
    const link = screen.getByRole('link', { name: /apply now/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })
})
