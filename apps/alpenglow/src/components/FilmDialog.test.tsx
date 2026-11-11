import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { HEADLINE } from '../data/site'
import { FilmDialog } from './FilmDialog'

function setup() {
  const dialogRef = createRef<HTMLDialogElement>()
  const closeRef = createRef<HTMLButtonElement>()
  const onDismiss = vi.fn()
  const onClose = vi.fn()
  const onBackdropClick = vi.fn()

  render(
    <FilmDialog
      dialogRef={dialogRef}
      closeRef={closeRef}
      onDismiss={onDismiss}
      onBackdropClick={onBackdropClick}
      onClose={onClose}
    />,
  )

  return { dialogRef, closeRef, onDismiss, onClose, onBackdropClick }
}

describe('FilmDialog', () => {
  it('is a dialog named by its own heading', () => {
    const { dialogRef } = setup()

    const dialog = screen.getByRole('dialog', { hidden: true })
    const heading = screen.getByRole('heading', { level: 2, hidden: true })

    expect(dialog).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading).toHaveTextContent(HEADLINE)
    expect(dialogRef.current).toBe(dialog)
  })

  it('wires the close button to its own ref and label', () => {
    const { closeRef } = setup()

    const close = screen.getByRole('button', { name: 'Close video', hidden: true })
    expect(closeRef.current).toBe(close)
  })

  it('hides the fake control bar from assistive tech but keeps the timecode', () => {
    setup()

    const controls = document.querySelector('.ap-controls')
    expect(controls).toHaveAttribute('aria-hidden', 'true')
    expect(controls).toHaveTextContent('0:38 / 3:40')
    expect(screen.getByText('Video placeholder')).toHaveClass('ap-screen-label')
    expect(document.querySelectorAll('code')).toHaveLength(1)
  })

  it('closes from the button and reports backdrop presses upward', async () => {
    const user = userEvent.setup()
    const { onDismiss, onBackdropClick } = setup()

    await user.click(screen.getByRole('button', { name: 'Close video', hidden: true }))
    expect(onDismiss).toHaveBeenCalledTimes(1)

    onBackdropClick.mockClear()
    fireEvent.click(screen.getByRole('dialog', { hidden: true }))
    expect(onBackdropClick).toHaveBeenCalledTimes(1)
  })

  it('reports the native close event upward', () => {
    const { onClose } = setup()

    fireEvent(screen.getByRole('dialog', { hidden: true }), new Event('close'))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
