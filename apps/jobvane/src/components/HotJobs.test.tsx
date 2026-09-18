import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HotJobs } from './HotJobs'

describe('HotJobs', () => {
  it('renders job listings and sidebar', () => {
    render(<HotJobs />)
    expect(screen.getByText('Hot Jobs')).toBeInTheDocument()
    expect(screen.getByText('Frontend Development')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
    expect(screen.getByText('Open Source Interactive Developer')).toBeInTheDocument()
    expect(screen.getByText('Top Recruitments')).toBeInTheDocument()
    expect(screen.getByText('Google Company')).toBeInTheDocument()
    expect(screen.getByText('Facebook Company')).toBeInTheDocument()
    expect(screen.getByText('IT Programming INC')).toBeInTheDocument()
  })

  it('shows apply buttons for each job', () => {
    render(<HotJobs />)
    const applyButtons = screen.getAllByText('Apply Job')
    expect(applyButtons.length).toBe(3)
  })

  it('shows open positions count for agencies', () => {
    render(<HotJobs />)
    expect(screen.getByText('23 open positions')).toBeInTheDocument()
    expect(screen.getByText('18 open positions')).toBeInTheDocument()
    expect(screen.getByText('31 open positions')).toBeInTheDocument()
  })
})
