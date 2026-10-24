import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('shows the Architecture projects and the visible count by default', () => {
    render(<Projects />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
    expect(screen.getByText('4 projects in Architecture')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Architecture' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getAllByText('Etiam tortor aliquet habitant')).toHaveLength(4)
  })

  it('filters the grid by category and moves the pressed state', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Interior' }))
    expect(screen.getByRole('button', { name: 'Interior' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Architecture' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(screen.getByText('3 projects in Interior')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Drafting Landing' }))
    expect(screen.getAllByRole('img')).toHaveLength(1)
    expect(screen.getByText('1 projects in Drafting Landing')).toBeInTheDocument()
  })

  it('labels each project card with its badge, title and caption', () => {
    render(<Projects />)
    expect(screen.getAllByText('Exclusive Project').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('New Project').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: 'Harbour Terraces' })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Harbour Terraces — architecture project' }),
    ).toBeInTheDocument()
  })
})
