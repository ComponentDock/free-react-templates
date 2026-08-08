import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading, sub, filter tabs, and all eight cards', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Selected Work' })).toBeInTheDocument()
    for (const tab of ['All', 'Weddings', 'Portraits', 'Nature', 'Editorial']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'View Golden Hour Ceremony' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Studio Portrait' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Mountain Dawn' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Fashion Editorial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Coastal Vows' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Environmental Portrait' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Autumn Forest' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Brand Campaign' })).toBeInTheDocument()
  })

  it('filters the grid by category and highlights the active tab', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    const weddingsTab = screen.getByRole('button', { name: 'Weddings' })
    expect(weddingsTab).toHaveAttribute('aria-pressed', 'false')
    await user.click(weddingsTab)
    expect(weddingsTab).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'View Golden Hour Ceremony' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Coastal Vows' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'View Mountain Dawn' })).not.toBeInTheDocument()
  })

  it('opens a lightbox on card activation and closes via Escape', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'View Mountain Dawn' }))
    const dialog = screen.getByRole('dialog', { name: 'Mountain Dawn' })
    expect(dialog).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the lightbox via the close button and keeps it open on figure clicks', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'View Studio Portrait' }))
    fireEvent.click(screen.getByRole('figure'))
    expect(screen.getByRole('dialog', { name: 'Studio Portrait' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close lightbox' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the lightbox when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'View Brand Campaign' }))
    const dialog = screen.getByRole('dialog', { name: 'Brand Campaign' })
    fireEvent.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('ignores non-Escape keys while the lightbox is open', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'View Golden Hour Ceremony' }))
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('dialog', { name: 'Golden Hour Ceremony' })).toBeInTheDocument()
  })
})
