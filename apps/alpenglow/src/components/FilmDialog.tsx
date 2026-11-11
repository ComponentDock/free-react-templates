import type { MouseEvent, RefObject } from 'react'
import { Play, X } from 'lucide-react'
import { DIALOG, DIALOG_ID, DIALOG_TITLE_ID } from '../data/site'

interface FilmDialogProps {
  readonly dialogRef: RefObject<HTMLDialogElement | null>
  readonly closeRef: RefObject<HTMLButtonElement | null>
  readonly onDismiss: () => void
  readonly onBackdropClick: (event: MouseEvent<HTMLDialogElement>) => void
  readonly onClose: () => void
}

/**
 * A native `<dialog>` opened with `showModal()`, so focus trapping, Escape and
 * inertness are the platform's job. What is drawn inside is a picture of a
 * player rather than a player: the control bar is `aria-hidden` and the note
 * says where a real `<video>` would go.
 */
export function FilmDialog({
  dialogRef,
  closeRef,
  onDismiss,
  onBackdropClick,
  onClose,
}: FilmDialogProps) {
  return (
    <dialog
      ref={dialogRef}
      className="ap-dialog"
      id={DIALOG_ID}
      aria-labelledby={DIALOG_TITLE_ID}
      onClick={onBackdropClick}
      onClose={onClose}
    >
      <div className="ap-dialog-head">
        <h2 className="ap-dialog-title" id={DIALOG_TITLE_ID}>
          {DIALOG.title}
        </h2>
        <button
          type="button"
          ref={closeRef}
          className="ap-close"
          aria-label={DIALOG.closeLabel}
          onClick={onDismiss}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="ap-player">
        <div className="ap-screen">
          <span className="ap-screen-label">{DIALOG.screenLabel}</span>
          <p className="ap-screen-note">
            {DIALOG.noteBefore} <code>{DIALOG.noteCode}</code> {DIALOG.noteAfter}
          </p>
        </div>

        <div className="ap-controls" aria-hidden="true">
          <span className="ap-ctl-play">
            <Play size={14} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="ap-ctl-track">
            <span />
          </span>
          <span className="ap-ctl-time">{DIALOG.time}</span>
        </div>
      </div>
    </dialog>
  )
}
