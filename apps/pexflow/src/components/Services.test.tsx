import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what we offer/i })).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Better Future')).toBeInTheDocument()
    expect(screen.getByText('Qualified Trainers')).toBeInTheDocument()
    expect(screen.getByText('Job Opportunity')).toBeInTheDocument()
  })

  it('renders read more links for each service', () => {
    render(<Services />)
    const readMoreLinks = screen.getAllByText(/read more/i)
    expect(readMoreLinks).toHaveLength(3)
  })
})
