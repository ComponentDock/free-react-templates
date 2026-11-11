import { useCallback, useRef, useState, type MouseEvent, type RefObject } from 'react'

export interface FilmPlayer {
  readonly paused: boolean
  readonly open: () => void
  readonly close: () => void
  readonly onBackdropClick: (event: MouseEvent<HTMLDialogElement>) => void
  readonly onClose: () => void
  readonly dialogRef: RefObject<HTMLDialogElement | null>
  readonly playRef: RefObject<HTMLButtonElement | null>
  readonly closeRef: RefObject<HTMLButtonElement | null>
}

/**
 * The film's open/close contract, in one place. Opening pauses the scene by
 * putting `is-paused` on the shell (every background animation reads its state
 * from that one class) and moves focus into the dialog; closing releases the
 * scene and hands focus back to the control that opened it.
 *
 * A press on the backdrop targets the <dialog> element itself rather than the
 * panel, so the click handler re-tests the point against the dialog's own rect
 * before closing — otherwise a drag that ends on the panel would shut the film.
 */
export function useFilmPlayer(): FilmPlayer {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const playRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const [paused, setPaused] = useState(false)

  const open = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || typeof dialog.showModal !== 'function') return
    dialog.showModal()
    setPaused(true)
    closeRef.current?.focus()
  }, [])

  const close = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  const onBackdropClick = useCallback((event: MouseEvent<HTMLDialogElement>) => {
    const dialog = event.currentTarget
    if (event.target !== dialog) return
    const rect = dialog.getBoundingClientRect()
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    if (!inside) dialog.close()
  }, [])

  const onClose = useCallback(() => {
    setPaused(false)
    playRef.current?.focus()
  }, [])

  return { paused, open, close, onBackdropClick, onClose, dialogRef, playRef, closeRef }
}
