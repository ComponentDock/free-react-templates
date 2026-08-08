import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('shows the heading, filter tabs, and eight project cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2, name: /Featured Projects/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All Work' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Interior' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Exterior' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Landscape' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(8)
  })

  it('filters projects by category and restores them with All Work', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: 'Exterior' }))
    const exterior = screen.getAllByRole('article')
    expect(exterior.length).toBeGreaterThan(0)
    expect(exterior.length).toBeLessThan(8)
    await user.click(screen.getByRole('button', { name: 'All Work' }))
    expect(screen.getAllByRole('article')).toHaveLength(8)
  })
})
