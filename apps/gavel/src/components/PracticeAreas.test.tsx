import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'
import { practiceAreas } from '../data'

describe('PracticeAreas', () => {
  it('renders the section heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas' })).toBeInTheDocument()
  })

  it('renders eight tiles with icon, title, and description', () => {
    const { container } = render(<PracticeAreas />)
    expect(practiceAreas).toHaveLength(8)
    expect(container.querySelectorAll('svg')).toHaveLength(8)
    for (const area of practiceAreas) {
      expect(screen.getByRole('heading', { level: 3, name: area.title })).toBeInTheDocument()
      expect(screen.getByText(area.description)).toBeInTheDocument()
    }
  })
})
