import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  it('renders heading and all skill cards', () => {
    render(<Skills />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getByText('jQuery')).toBeInTheDocument()
    expect(screen.getByText('Photoshop')).toBeInTheDocument()
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('SEO')).toBeInTheDocument()
  })

  it('renders skill percentages', () => {
    render(<Skills />)
    const pct95 = screen.getAllByText('95%')
    expect(pct95.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('68%')).toBeInTheDocument()
    expect(screen.getByText('92%')).toBeInTheDocument()
    expect(screen.getByText('83%')).toBeInTheDocument()
  })

  it('renders week/month stats', () => {
    render(<Skills />)
    const lastWeeks = screen.getAllByText('28%')
    expect(lastWeeks.length).toBeGreaterThan(0)
    const lastMonths = screen.getAllByText('60%')
    expect(lastMonths.length).toBeGreaterThan(0)
  })
})
