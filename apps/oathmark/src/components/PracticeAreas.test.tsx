import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders heading Practice Areas', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas' })).toBeInTheDocument()
  })

  it('renders 6 practice area cards', () => {
    render(<PracticeAreas />)
    const titles = [
      'Bankruptcy Law',
      'Business Law',
      'Civil Rights Law',
      'Criminal Law',
      'Immigration Law',
      'Family Law',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('each card has a title', () => {
    render(<PracticeAreas />)
    // Verify all 6 titles exist
    expect(screen.getByText('Bankruptcy Law')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('Civil Rights Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
    expect(screen.getByText('Immigration Law')).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
  })
})
