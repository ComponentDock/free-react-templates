import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section heading and filter buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Projects')
    for (const cat of ['All', 'Web', 'Design', 'Brand']) {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows all projects by default', () => {
    render(<Projects />)
    expect(screen.getAllByRole('img')).toHaveLength(12)
  })

  it('filters projects when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Web' }))
    expect(screen.getAllByRole('img')).toHaveLength(5)

    await user.click(screen.getByRole('button', { name: 'Design' }))
    expect(screen.getAllByRole('img')).toHaveLength(4)

    await user.click(screen.getByRole('button', { name: 'Brand' }))
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('shows all projects when "All" is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Web' }))
    expect(screen.getAllByRole('img')).toHaveLength(5)

    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img')).toHaveLength(12)
  })
})
