import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the lead line and the corrected headline', () => {
    render(<Hero />)
    expect(screen.getByText('Find Job, Employment, and Career Opportunities')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'The Easiest Way to Get Your New Job' }),
    ).toBeInTheDocument()
  })

  it('renders the three stat counters with values and labels', () => {
    render(<Hero />)
    expect(screen.getByText('46')).toBeInTheDocument()
    expect(screen.getByText('Countries')).toBeInTheDocument()
    expect(screen.getByText('450')).toBeInTheDocument()
    expect(screen.getByText('Companies')).toBeInTheDocument()
    expect(screen.getByText('80000')).toBeInTheDocument()
    expect(screen.getByText('Active Employees')).toBeInTheDocument()
  })

  it('embeds the tabbed search widget', () => {
    render(<Hero />)
    expect(screen.getByRole('tab', { name: 'Find a Job' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Find a Candidate' })).toBeInTheDocument()
  })
})
