import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section heading and all projects initially', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Projects')
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('renders filter buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('button', { name: 'All Fields' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Branding' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Editorial Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Graphic Design' })).toBeInTheDocument()
  })

  it('filters projects when Branding is selected', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('filters projects when Editorial Design is selected', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: 'Editorial Design' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('shows all projects when All Fields is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: 'All Fields' }))
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('marks active filter with aria-pressed', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    expect(screen.getByRole('button', { name: 'All Fields' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    expect(screen.getByRole('button', { name: 'Branding' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All Fields' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })
})
