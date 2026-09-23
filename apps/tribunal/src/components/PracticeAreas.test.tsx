import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { level: 2, name: /what we do/i })).toBeInTheDocument()
  })

  it('renders six practice area cards', () => {
    render(<PracticeAreas />)
    expect(screen.getByText('Case Investigation')).toBeInTheDocument()
    expect(screen.getByText('Personal Injury')).toBeInTheDocument()
    expect(screen.getByText('Legal Counseling')).toBeInTheDocument()
    expect(screen.getByText('Civil Litigation')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('Insurance Defense')).toBeInTheDocument()
  })
})
