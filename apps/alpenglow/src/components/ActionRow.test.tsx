import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SHOP } from '../data/site'
import { ActionRow } from './ActionRow'

const renderRow = () => {
  const onPlay = vi.fn()
  const playRef = createRef<HTMLButtonElement>()
  render(<ActionRow onPlay={onPlay} playRef={playRef} />)
  return { onPlay, playRef }
}

describe('ActionRow', () => {
  it('wires the play control to the dialog it opens', () => {
    const { playRef } = renderRow()

    const play = screen.getByRole('button', { name: /Watch the film/ })
    expect(play).toHaveAttribute('type', 'button')
    expect(play).toHaveAttribute('aria-haspopup', 'dialog')
    expect(play).toHaveAttribute('aria-controls', 'ap-dialog')
    expect(playRef.current).toBe(play)
  })

  it('labels the control with the film and its duration', () => {
    renderRow()

    const play = screen.getByRole('button', { name: /Watch the film/ })
    expect(play).toHaveTextContent('Watch the film')
    expect(play).toHaveTextContent('3:40')
    expect(play.querySelector('.ap-play-disc')).toHaveAttribute('aria-hidden', 'true')
  })

  it('calls the open callback on click', async () => {
    const user = userEvent.setup()
    const { onPlay } = renderRow()

    await user.click(screen.getByRole('button', { name: /Watch the film/ }))

    expect(onPlay).toHaveBeenCalledTimes(1)
  })

  it('sends the shop pill to the marketplace in a new tab', () => {
    renderRow()

    const shop = screen.getByRole('link', { name: SHOP.label })
    expect(shop).toHaveAttribute('href', SHOP.href)
    expect(shop).toHaveAttribute('target', '_blank')
    expect(shop).toHaveAttribute('rel', 'noreferrer noopener')
  })
})
