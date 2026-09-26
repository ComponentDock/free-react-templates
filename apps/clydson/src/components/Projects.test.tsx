import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from './Projects'

describe('Projects', () => {
  it('renders heading and 8 project items', () => {
    render(<Projects />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    const items = screen.getAllByText('Branding & Illustration Design')
    expect(items).toHaveLength(8)
  })

  it('renders category labels', () => {
    render(<Projects />)
    const cats = screen.getAllByText('Web Design')
    expect(cats.length).toBeGreaterThan(0)
  })
})
