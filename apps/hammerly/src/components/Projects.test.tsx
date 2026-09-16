import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders heading', () => {
    render(<Projects />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
  })

  it('renders filter buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buildings' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Interior' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Isolation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Plumbing' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tiling' })).toBeInTheDocument()
  })

  it('shows all projects initially', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(8)
  })

  it('filters projects by category', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: 'Buildings' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
