import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders category circles and CTA button', () => {
    render(<Categories />)
    expect(screen.getByText('Browse Online Course Category')).toBeInTheDocument()
    for (const cat of [
      'IT & Software',
      'Music',
      'Photography',
      'Marketing',
      'Health',
      'Audio Video',
    ]) {
      expect(screen.getAllByText(cat).length).toBeGreaterThan(0)
    }
    expect(screen.getByText('See All Courses')).toBeInTheDocument()
  })
})
