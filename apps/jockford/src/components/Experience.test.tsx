import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders the heading', () => {
    render(<Experience />)
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
  })

  it('renders all 5 experience entries', () => {
    render(<Experience />)
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
    expect(screen.getByText('Front End Developer')).toBeInTheDocument()
    expect(screen.getByText('System Analyst')).toBeInTheDocument()
    expect(screen.getByText('Creative Designer')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
  })

  it('renders company names', () => {
    render(<Experience />)
    expect(screen.getByText('TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Google Company')).toBeInTheDocument()
  })

  it('renders date ranges', () => {
    render(<Experience />)
    const dates = screen.getAllByText('2028 - 2030')
    expect(dates.length).toBe(5)
  })
})
