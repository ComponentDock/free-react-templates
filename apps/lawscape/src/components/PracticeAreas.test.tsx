import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders section heading and all four practice areas', () => {
    render(<PracticeAreas />)
    expect(screen.getByText('Our Practice Area')).toBeInTheDocument()
    expect(screen.getByText('Employment Law')).toBeInTheDocument()
    expect(screen.getByText('Personal Injury')).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Bank & Financial')).toBeInTheDocument()
  })

  it('shows the View All Practices button', () => {
    render(<PracticeAreas />)
    expect(screen.getByText('View All Practices →')).toBeInTheDocument()
  })
})
