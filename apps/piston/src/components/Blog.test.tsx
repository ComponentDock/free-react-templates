import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders heading and all 3 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Recent From Our Blog')).toBeInTheDocument()
    expect(screen.getByText('How to Start Your Fitness Journey')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Tips for Muscle Growth')).toBeInTheDocument()
    expect(screen.getByText('The Power of Recovery Days')).toBeInTheDocument()
  })

  it('renders metadata for blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Jan 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('Coach Oscar')).toBeInTheDocument()
  })
})
