import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the lavender band, title, and five project cards', () => {
    render(<Projects />)
    const section = screen.getByRole('region', { name: 'Projects' })
    expect(section).toHaveClass('bg-lavender')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Latest Project on the go')
    expect(screen.getAllByText('Vector Illustration')).toHaveLength(5)
    expect(screen.getAllByRole('img')).toHaveLength(5)
  })

  it('moves the carousel with next/prev state and clamps at the ends', () => {
    render(<Projects />)
    const track = screen.getByRole('region', { name: 'Project carousel' })
    const prev = screen.getByRole('button', { name: 'Previous project' })
    const next = screen.getByRole('button', { name: 'Next project' })
    expect(track).toHaveAttribute('data-index', '0')
    expect(prev).toBeDisabled()
    fireEvent.click(next)
    expect(track).toHaveAttribute('data-index', '1')
    expect(prev).toBeEnabled()
    fireEvent.click(next)
    expect(track).toHaveAttribute('data-index', '2')
    expect(next).toBeDisabled()
    fireEvent.click(prev)
    expect(track).toHaveAttribute('data-index', '1')
    fireEvent.click(prev)
    expect(track).toHaveAttribute('data-index', '0')
    expect(prev).toBeDisabled()
  })
})
