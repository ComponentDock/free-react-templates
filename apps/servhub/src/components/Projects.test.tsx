import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders heading and filter buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Brand' })).toBeInTheDocument()
  })

  it('shows all projects initially', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img', { name: /Project \d+/ })
    expect(images).toHaveLength(11)
  })

  it('filters projects by category', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Web' }))
    const webImages = screen.getAllByRole('img', { name: /Project \d+/ })
    expect(webImages.length).toBeLessThan(11)
    expect(webImages.length).toBeGreaterThan(0)

    await user.click(screen.getByRole('button', { name: 'Design' }))
    const designImages = screen.getAllByRole('img', { name: /Project \d+/ })
    expect(designImages.length).toBeLessThan(11)

    await user.click(screen.getByRole('button', { name: 'All' }))
    const allImages = screen.getAllByRole('img', { name: /Project \d+/ })
    expect(allImages).toHaveLength(11)
  })

  it('highlights the active filter button', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    const allBtn = screen.getByRole('button', { name: 'All' })
    expect(allBtn).toHaveClass('bg-lime-400')

    await user.click(screen.getByRole('button', { name: 'Web' }))
    expect(allBtn).not.toHaveClass('bg-lime-400')
    expect(screen.getByRole('button', { name: 'Web' })).toHaveClass('bg-lime-400')
  })
})
