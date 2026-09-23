import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders heading and all four practice areas', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { name: /what we cover/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /bank & financial/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /personal injury/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /family law/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /criminal law/i })).toBeInTheDocument()
  })

  it('renders description text for each area', () => {
    render(<PracticeAreas />)
    expect(screen.getByText(/banking regulations/i)).toBeInTheDocument()
    expect(screen.getByText(/accident victims/i)).toBeInTheDocument()
    expect(screen.getByText(/divorce, custody/i)).toBeInTheDocument()
    expect(screen.getByText(/criminal proceedings/i)).toBeInTheDocument()
  })

  it('renders images for each area', () => {
    render(<PracticeAreas />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
