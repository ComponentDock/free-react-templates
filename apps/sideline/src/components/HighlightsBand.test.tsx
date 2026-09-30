import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HighlightsBand } from './HighlightsBand'

describe('HighlightsBand', () => {
  it('renders the red band heading and the play button', () => {
    render(<HighlightsBand />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'More Game Highlights' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    // First window of three cards.
    expect(screen.getByText('Continental Cup Championship')).toBeInTheDocument()
    expect(screen.getByText('Harbor Derby Highlights')).toBeInTheDocument()
    expect(screen.getByText('Academy Cup Final')).toBeInTheDocument()
    expect(screen.queryByText('Away Day in Madrid')).not.toBeInTheDocument()
  })

  it('opens and closes the video dialog', async () => {
    const user = userEvent.setup()
    render(<HighlightsBand />)

    await user.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog', { name: 'Game highlights video' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'Game highlights video' })).not.toBeInTheDocument()
  })

  it('closes the video dialog from the backdrop', async () => {
    const user = userEvent.setup()
    const { container } = render(<HighlightsBand />)

    await user.click(screen.getByRole('button', { name: 'Play video' }))
    const backdrop = container.ownerDocument.querySelector('[role="presentation"]') as HTMLElement
    await user.click(backdrop)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('advances the carousel to the next window of cards', async () => {
    const user = userEvent.setup()
    render(<HighlightsBand />)
    const prev = screen.getByRole('button', { name: 'Previous highlights' })
    const next = screen.getByRole('button', { name: 'Next highlights' })

    expect(prev).toBeDisabled()
    await user.click(next)
    expect(screen.getByText('Away Day in Madrid')).toBeInTheDocument()
    expect(screen.queryByText('Continental Cup Championship')).not.toBeInTheDocument()
    expect(next).toBeDisabled()

    await user.click(prev)
    expect(screen.getByText('Continental Cup Championship')).toBeInTheDocument()
  })
})
