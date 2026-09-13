import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section heading and filter tabs', () => {
    render(<Projects />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buildings' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Rebuild' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Architecture' })).toBeInTheDocument()
  })

  it('shows all projects by default', () => {
    render(<Projects />)
    expect(screen.getByText('Skyline Tower')).toBeInTheDocument()
    expect(screen.getByText('Harbor Renovation')).toBeInTheDocument()
    expect(screen.getByText('Urban Blueprint')).toBeInTheDocument()
  })

  it('filters projects when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: 'Buildings' }))
    expect(screen.getByText('Skyline Tower')).toBeInTheDocument()
    expect(screen.queryByText('Harbor Renovation')).not.toBeInTheDocument()
    expect(screen.queryByText('Urban Blueprint')).not.toBeInTheDocument()
  })

  it('shows all projects when All is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: 'Architecture' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Skyline Tower')).toBeInTheDocument()
    expect(screen.getByText('Harbor Renovation')).toBeInTheDocument()
    expect(screen.getByText('Urban Blueprint')).toBeInTheDocument()
  })
})
