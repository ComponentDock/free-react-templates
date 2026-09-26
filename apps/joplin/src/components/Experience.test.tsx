import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders the Experience section', () => {
    render(<Experience />)
    expect(screen.getByTestId('experience')).toBeInTheDocument()
  })

  it('displays the Experience heading', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
  })

  it('lists at least 2 experience entries', () => {
    render(<Experience />)
    expect(screen.getByText('User Experience Designer')).toBeInTheDocument()
    expect(screen.getByText('Product Designer')).toBeInTheDocument()
    expect(screen.getByText('Senior UX Designer')).toBeInTheDocument()
  })

  it('shows date ranges for each entry', () => {
    render(<Experience />)
    expect(screen.getByText('Jan 18 — Feb 20')).toBeInTheDocument()
    expect(screen.getByText('Mar 20 — Dec 22')).toBeInTheDocument()
    expect(screen.getByText('Jan 23 — Present')).toBeInTheDocument()
  })

  it('shows company names with external link icons', () => {
    render(<Experience />)
    expect(screen.getByText('DesignCo')).toBeInTheDocument()
    expect(screen.getByText('InnoLab')).toBeInTheDocument()
    expect(screen.getByText('CraftStudio')).toBeInTheDocument()
  })
})
