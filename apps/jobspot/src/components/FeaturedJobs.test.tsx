import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedJobs } from './FeaturedJobs'

describe('FeaturedJobs', () => {
  it('renders the section heading', () => {
    render(<FeaturedJobs />)
    expect(screen.getByRole('heading', { name: /Featured Jobs Posts/i })).toBeInTheDocument()
  })

  it('renders job cards', () => {
    render(<FeaturedJobs />)
    const fe = screen.getAllByText('Frontend Development')
    expect(fe.length).toBe(2)
    const fs = screen.getAllByText('Full Stack Developer')
    expect(fs.length).toBe(2)
    const os = screen.getAllByText('Open Source Interactive Developer')
    expect(os.length).toBe(2)
  })

  it('renders job type badges', () => {
    render(<FeaturedJobs />)
    const partime = screen.getAllByText('Partime')
    expect(partime.length).toBe(2)
    const fulltime = screen.getAllByText('Fulltime')
    expect(fulltime.length).toBe(2)
    expect(screen.getByText('Freelance')).toBeInTheDocument()
    expect(screen.getByText('Temporary')).toBeInTheDocument()
  })

  it('renders Apply Job buttons', () => {
    render(<FeaturedJobs />)
    const buttons = screen.getAllByText('Apply Job')
    expect(buttons.length).toBe(6)
  })

  it('renders heart/save icons', () => {
    render(<FeaturedJobs />)
    const hearts = screen.getAllByLabelText('Save job')
    expect(hearts.length).toBe(6)
  })

  it('shows company names and salaries', () => {
    render(<FeaturedJobs />)
    const fb = screen.getAllByText('Facebook, Inc.')
    expect(fb.length).toBe(2)
    const google = screen.getAllByText('Google, Inc.')
    expect(google.length).toBe(2)
    const nyt = screen.getAllByText('New York Times')
    expect(nyt.length).toBe(2)
    expect(screen.getAllByText('$2,000').length).toBe(6)
  })
})
