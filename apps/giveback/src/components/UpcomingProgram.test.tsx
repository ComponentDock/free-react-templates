import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UpcomingProgram } from './UpcomingProgram'
import { upcoming } from '../data'

describe('UpcomingProgram', () => {
  it('shows the label, heading, copy, and both CTAs', () => {
    render(<UpcomingProgram />)
    expect(screen.getByText(upcoming.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: upcoming.title })).toBeInTheDocument()
    expect(screen.getByText(upcoming.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: upcoming.donateLabel })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: upcoming.viewLabel })).toHaveAttribute(
      'href',
      '#causes',
    )
  })

  it('renders the program photo', () => {
    render(<UpcomingProgram />)
    expect(screen.getByAltText(/vitamin supplies/i)).toHaveAttribute('src', upcoming.image)
  })
})
