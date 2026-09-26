import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSkills } from './AboutSkills'

describe('AboutSkills', () => {
  it('displays the bold headline', () => {
    render(<AboutSkills />)
    expect(
      screen.getByRole('heading', {
        name: /Creative director based on New York/i,
      }),
    ).toBeInTheDocument()
  })

  it('displays descriptive paragraphs', () => {
    render(<AboutSkills />)
    expect(screen.getByText(/passionate creative director/)).toBeInTheDocument()
    expect(screen.getByText(/brand identity to digital experiences/)).toBeInTheDocument()
  })

  it('displays a Download CV outlined button', () => {
    render(<AboutSkills />)
    const btn = screen.getByRole('link', { name: /Download CV/i })
    expect(btn).toBeInTheDocument()
  })

  it('displays 3 skill progress bars with correct percentages', () => {
    render(<AboutSkills />)
    expect(screen.getByText('Wireframing')).toBeInTheDocument()
    expect(screen.getByText('UI/UX')).toBeInTheDocument()
    expect(screen.getByText('Interaction design')).toBeInTheDocument()

    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(3)
    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '90')
    expect(progressBars[1]).toHaveAttribute('aria-valuenow', '70')
    expect(progressBars[2]).toHaveAttribute('aria-valuenow', '45')
  })

  it('displays percentage labels next to skill names', () => {
    render(<AboutSkills />)
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getByText('45%')).toBeInTheDocument()
  })
})
