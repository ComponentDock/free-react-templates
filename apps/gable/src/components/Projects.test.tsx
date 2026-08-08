import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading and project cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Home Interior Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Office Interior Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Apartment Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Dining Table/i })).toBeInTheDocument()
  })

  it('renders a View All Projects button', () => {
    render(<Projects />)
    expect(screen.getByRole('link', { name: /View All Projects/i })).toBeInTheDocument()
  })
})
