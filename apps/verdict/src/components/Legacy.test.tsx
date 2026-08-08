import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Legacy } from './Legacy'

describe('Legacy', () => {
  it('shows the founded stat and the section heading', () => {
    render(<Legacy />)

    expect(screen.getByText('1985')).toBeInTheDocument()
    expect(screen.getByText('Year Founded')).toBeInTheDocument()
    expect(screen.getByText('About Our Firm')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'A Legacy of Legal Excellence' }),
    ).toBeInTheDocument()
  })

  it('shows the four value cards', () => {
    render(<Legacy />)

    for (const value of [
      'Proven Track Record',
      'Client-Focused Approach',
      'Industry Recognition',
      'Transparent Communication',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: value })).toBeInTheDocument()
    }
  })

  it('shows the stats row', () => {
    render(<Legacy />)

    for (const stat of ['40+', '500+', '98%', '25+']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    for (const label of [
      'Years of Excellence',
      'Cases Won',
      'Client Satisfaction',
      'Expert Attorneys',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
