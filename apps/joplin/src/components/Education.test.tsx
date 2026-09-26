import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Education } from './Education'

describe('Education', () => {
  it('renders the Education section', () => {
    render(<Education />)
    expect(screen.getByTestId('education')).toBeInTheDocument()
  })

  it('displays the Education heading', () => {
    render(<Education />)
    expect(screen.getByRole('heading', { level: 2, name: 'Education' })).toBeInTheDocument()
  })

  it('lists at least 2 education entries', () => {
    render(<Education />)
    expect(screen.getByText('BSc Computer Science')).toBeInTheDocument()
    expect(screen.getByText('MSc Interaction Design')).toBeInTheDocument()
  })

  it('shows date ranges', () => {
    render(<Education />)
    expect(screen.getByText('2012 — 2016')).toBeInTheDocument()
    expect(screen.getByText('2016 — 2018')).toBeInTheDocument()
  })

  it('shows institution names', () => {
    render(<Education />)
    expect(screen.getByText('State University')).toBeInTheDocument()
    expect(screen.getByText('Tech Institute')).toBeInTheDocument()
  })
})
