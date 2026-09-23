import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { level: 2, name: /area of practice/i })).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<PracticeAreas />)
    expect(screen.getByText('Our Practicing area')).toBeInTheDocument()
  })

  it('renders three practice area cards', () => {
    render(<PracticeAreas />)
    expect(screen.getByText('Health Law')).toBeInTheDocument()
    expect(screen.getByText('Insurance Law')).toBeInTheDocument()
    expect(screen.getByText('Vehicle Accident')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<PracticeAreas />)
    const links = screen.getAllByText(/read more/i)
    expect(links).toHaveLength(3)
  })
})
