import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and a featured project', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Casa la perla nera/i })).toBeInTheDocument()
  })

  it('shows a project image and a learn-more button', () => {
    render(<Projects />)
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
  })
})
