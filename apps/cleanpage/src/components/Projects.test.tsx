import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading', () => {
    render(<Projects />)
    expect(screen.getByText('Recent Projects')).toBeInTheDocument()
  })

  it('renders 6 project cards', () => {
    render(<Projects />)
    const titles = screen.getAllByText('Branding & Illustration Design')
    expect(titles).toHaveLength(6)
  })

  it('renders category tags', () => {
    render(<Projects />)
    const cats = screen.getAllByText('Web Design')
    expect(cats).toHaveLength(6)
  })
})
