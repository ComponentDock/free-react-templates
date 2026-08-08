import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and six service cards with descriptions', () => {
    render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What We Build' })).toBeInTheDocument()

    const titles = [
      'Residential Construction',
      'Commercial Buildings',
      'Renovation & Remodeling',
      'Interior Design',
      'Project Management',
      'Green Building',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/Custom homes built to your specifications/)).toBeInTheDocument()
    expect(screen.getByText(/Sustainable construction practices/)).toBeInTheDocument()
  })
})
