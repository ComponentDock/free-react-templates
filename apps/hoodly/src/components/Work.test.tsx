import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Work } from './Work'
import { work } from '../data'

describe('Work', () => {
  it('renders the white heading over the cover photo', () => {
    const { container } = render(<Work />)
    expect(screen.getByRole('heading', { level: 2, name: work.eyebrow })).toBeInTheDocument()
    expect(screen.getByText(work.subline)).toBeInTheDocument()
    expect(container.querySelector('.bg-black\\/50')).toBeInTheDocument()
  })

  it('renders three steps with number squares, titles, and descriptions', () => {
    const { container } = render(<Work />)
    for (const step of work.steps) {
      expect(screen.getByText(step.number)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.description)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('.bg-number-dark').length).toBe(3)
  })
})
