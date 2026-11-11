import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useFilmPlayer } from './useFilmPlayer'
import { removeDialogMethods, stubDialogMethods } from '../test/dialog'

interface HarnessProps {
  readonly withDialog?: boolean
  readonly withClose?: boolean
  readonly withPlay?: boolean
}

function Player({ withDialog = true, withClose = true, withPlay = true }: HarnessProps) {
  const { paused, open, close, onBackdropClick, onClose, dialogRef, playRef, closeRef } =
    useFilmPlayer()

  return (
    <div>
      <span data-testid="paused">{String(paused)}</span>
      {withDialog ? (
        <dialog ref={dialogRef} onClose={onClose} onClick={onBackdropClick} data-testid="dialog">
          <p data-testid="inner">inner</p>
          {withClose ? (
            <button type="button" ref={closeRef} onClick={close}>
              close
            </button>
          ) : null}
        </dialog>
      ) : null}
      {withPlay ? (
        <button type="button" ref={playRef} onClick={open}>
          play
        </button>
      ) : null}
      <button type="button" onClick={open}>
        trigger
      </button>
      <button type="button" onClick={close}>
        shutdown
      </button>
    </div>
  )
}

const dialog = () => screen.getByTestId('dialog') as HTMLDialogElement
const paused = () => screen.getByTestId('paused').textContent

describe('useFilmPlayer', () => {
  beforeEach(() => {
    stubDialogMethods()
  })

  afterEach(() => {
    removeDialogMethods()
  })

  it('opens the dialog, pauses the scene and focuses the close button', () => {
    render(<Player />)

    fireEvent.click(screen.getByRole('button', { name: 'play' }))

    expect(dialog()).toHaveAttribute('open')
    expect(paused()).toBe('true')
    expect(screen.getByRole('button', { name: 'close' })).toHaveFocus()
  })

  it('does nothing when the browser has no showModal', () => {
    removeDialogMethods()
    render(<Player />)

    fireEvent.click(screen.getByRole('button', { name: 'play' }))

    expect(dialog()).not.toHaveAttribute('open')
    expect(paused()).toBe('false')
  })

  it('does nothing when the dialog is not mounted', () => {
    render(<Player withDialog={false} />)

    fireEvent.click(screen.getByRole('button', { name: 'play' }))

    expect(paused()).toBe('false')
  })

  it('opens without a close button in the dialog', () => {
    render(<Player withClose={false} />)

    fireEvent.click(screen.getByRole('button', { name: 'play' }))

    expect(dialog()).toHaveAttribute('open')
    expect(paused()).toBe('true')
  })

  it('closes from the close button and releases the scene', () => {
    render(<Player />)

    fireEvent.click(screen.getByRole('button', { name: 'play' }))
    fireEvent.click(screen.getByRole('button', { name: 'close' }))

    expect(dialog()).not.toHaveAttribute('open')
    expect(paused()).toBe('false')
    expect(screen.getByRole('button', { name: 'play' })).toHaveFocus()
  })

  it('treats a press inside the dialog as content, not backdrop', () => {
    render(<Player />)
    fireEvent.click(screen.getByRole('button', { name: 'play' }))

    // jsdom reports a zero-size rect, so 0,0 is the only point inside it.
    fireEvent.click(screen.getByTestId('inner'))
    fireEvent.click(dialog(), { clientX: 0, clientY: 0 })

    expect(dialog()).toHaveAttribute('open')
  })

  it('closes when the press on the dialog element falls outside its rect', () => {
    render(<Player />)
    fireEvent.click(screen.getByRole('button', { name: 'play' }))

    fireEvent.click(dialog(), { clientX: 500, clientY: 500 })

    expect(dialog()).not.toHaveAttribute('open')
    expect(paused()).toBe('false')
  })

  it('survives a close event with no play button to return to', () => {
    render(<Player withPlay={false} />)

    fireEvent.click(screen.getByRole('button', { name: 'trigger' }))
    fireEvent.click(dialog(), { clientX: 500, clientY: 500 })

    expect(paused()).toBe('false')
  })

  it('exposes a close callback that is inert without a dialog and when already shut', () => {
    render(<Player withDialog={false} />)

    fireEvent.click(screen.getByRole('button', { name: 'shutdown' }))
    expect(paused()).toBe('false')
  })

  it('does not fire a second close event when the dialog is already shut', () => {
    render(<Player />)

    fireEvent.click(screen.getByRole('button', { name: 'shutdown' }))

    expect(dialog()).not.toHaveAttribute('open')
    expect(paused()).toBe('false')
  })
})
