import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Education } from './Education'

describe('Education', () => {
  it('renders the section heading', () => {
    render(<Education />)

    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
    expect(screen.getByText('ACADEMIC CAREER')).toBeInTheDocument()
  })

  it('renders all three education entries', () => {
    render(<Education />)

    expect(screen.getByText('Master Degree')).toBeInTheDocument()
    expect(screen.getByText('Course on Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Valedictorian')).toBeInTheDocument()
  })

  it('renders institutions and descriptions', () => {
    render(<Education />)

    expect(screen.getByText('University of Technology')).toBeInTheDocument()
    expect(screen.getByText('Online Academy')).toBeInTheDocument()
    expect(screen.getByText('Springfield High School')).toBeInTheDocument()
  })
})
