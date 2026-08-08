import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('renders the heading and four numbered process steps', () => {
    render(<Process />)

    expect(screen.getByText('Our Process')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'How We Build' })).toBeInTheDocument()

    const steps = ['Consultation', 'Planning', 'Construction', 'Handover']
    for (const step of steps) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
    expect(screen.getByText(/We meet to discuss your vision/)).toBeInTheDocument()
    expect(screen.getByText(/Final inspection, quality assurance walkthrough/)).toBeInTheDocument()
  })
})
