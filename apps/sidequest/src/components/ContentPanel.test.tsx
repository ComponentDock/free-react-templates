import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContentPanel from './ContentPanel'

describe('ContentPanel', () => {
  it('renders close button', () => {
    render(<ContentPanel onClose={() => {}} />)
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ContentPanel onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('renders blog post rows', () => {
    render(<ContentPanel onClose={() => {}} />)
    expect(
      screen.getAllByText(/How the gut microbes you're born with affect your lifelong health/),
    ).toHaveLength(8) // 4 rows × 2 sides each
  })

  it('renders avatar images', () => {
    render(<ContentPanel onClose={() => {}} />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
