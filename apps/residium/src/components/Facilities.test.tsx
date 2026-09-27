import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('renders three facility cards with learn more links', () => {
    render(<Facilities />)
    expect(screen.getByText(/Our Facilities/)).toBeInTheDocument()

    const learnMoreLinks = screen.getAllByText('Learn more')
    expect(learnMoreLinks).toHaveLength(3)

    expect(screen.getByText('Planning Stage')).toBeInTheDocument()
    expect(screen.getByText('Property Development')).toBeInTheDocument()
    expect(screen.getByText('Support Center')).toBeInTheDocument()
  })
})
