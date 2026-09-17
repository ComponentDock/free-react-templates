import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Our Portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /All/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Haircuts/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Dye/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Shave/i })).toBeInTheDocument()
  })

  it('shows all images initially', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('filters portfolio items when a filter button is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: /Haircuts/i }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

  it('resets to all items when All is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: /Dye/i }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: /All/i }))
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
