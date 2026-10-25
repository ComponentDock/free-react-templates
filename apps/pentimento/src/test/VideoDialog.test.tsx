import { fireEvent, render, screen } from '@testing-library/react'
import { useRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { VideoDialog } from '../components/VideoDialog'

const URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

function Harness({ withTrigger = true }: { withTrigger?: boolean }) {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const onClose = vi.fn()
  return (
    <>
      <button type="button" ref={triggerRef}>
        Watch
      </button>
      <VideoDialog
        open
        onClose={onClose}
        url={URL}
        trigger={withTrigger ? triggerRef : undefined}
      />
    </>
  )
}

describe('VideoDialog', () => {
  it('renders nothing while closed', () => {
    render(<VideoDialog open={false} onClose={vi.fn()} url={URL} />)
    expect(screen.queryByTestId('video-dialog')).toBeNull()
  })

  it('opens a 16:9 overlay and puts focus on the close control', () => {
    render(<Harness />)

    const dialog = screen.getByRole('dialog', { name: 'Studio film' })
    expect(dialog).toHaveClass('fixed', 'inset-0', 'bg-black/80', 'backdrop-blur-sm')
    expect(screen.getByTitle('Studio film')).toHaveAttribute('src', URL)
    expect(screen.getByRole('button', { name: 'Close the film' })).toHaveFocus()
  })

  it('keeps Tab inside the dialog and ignores other keys', () => {
    render(<Harness />)
    const close = screen.getByRole('button', { name: 'Close the film' })

    fireEvent.keyDown(document, { key: 'Tab' })
    expect(close).toHaveFocus()

    fireEvent.keyDown(document, { key: 'a' })
    expect(close).toHaveFocus()
  })

  it('closes on the close button and returns focus to its trigger', () => {
    const onClose = vi.fn()
    const trigger = { current: null as HTMLButtonElement | null }
    const { rerender } = render(
      <VideoDialog open onClose={onClose} url={URL} trigger={trigger} />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Close the film' }))
    expect(onClose).toHaveBeenCalled()

    rerender(<VideoDialog open={false} onClose={onClose} url={URL} trigger={trigger} />)
    expect(screen.queryByTestId('video-dialog')).toBeNull()
  })

  it('closes on Escape', () => {
    const onClose = vi.fn()
    render(<VideoDialog open onClose={onClose} url={URL} />)

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('closes on the backdrop but not on the frame itself', () => {
    const onClose = vi.fn()
    render(<VideoDialog open onClose={onClose} url={URL} />)

    fireEvent.click(screen.getByTitle('Studio film'))
    expect(onClose).not.toHaveBeenCalled()

    fireEvent.click(screen.getByTestId('video-dialog'))
    expect(onClose).toHaveBeenCalled()
  })
})
