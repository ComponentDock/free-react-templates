import { afterEach, describe, expect, it, vi } from 'vitest'
import type { RefObject } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { SubscribeModal } from './SubscribeModal'

function renderModal(
  options: {
    onClose?: () => void
    returnFocusTo?: RefObject<HTMLElement | null>
    /** Scrollbar gap to simulate (px). */
    gap?: number
  } = {},
) {
  // jsdom reports clientWidth 0; pin it to the viewport so "no scrollbar gap"
  // is the default path and the gap case can be forced per test.
  vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(
    window.innerWidth - (options.gap ?? 0),
  )

  const onClose = options.onClose ?? vi.fn()
  const returnFocusTo = options.returnFocusTo ?? { current: null }
  const utils = render(<SubscribeModal onClose={onClose} returnFocusTo={returnFocusTo} />)

  return { ...utils, onClose }
}

describe('SubscribeModal', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders the white card 1:1 and slides it in', () => {
    vi.useFakeTimers()
    const { container } = renderModal()
    const overlay = container.firstElementChild
    const card = screen.getByRole('dialog')

    expect(overlay).toHaveClass(
      'fixed',
      'inset-0',
      'z-[1160]',
      'overflow-y-auto',
      'opacity-0',
      'duration-150',
      'ease-linear',
    )
    expect(card).toHaveAttribute('aria-modal', 'true')
    expect(card).toHaveAttribute('aria-labelledby', 'eve-subscribe-title')
    expect(card).toHaveClass(
      'w-[686px]',
      'max-w-full',
      'rounded-card',
      'bg-white',
      'px-[15px]',
      'pt-[54px]',
      'pb-[100px]',
      '-translate-y-1/4',
      'duration-300',
      'ease-out',
    )

    act(() => {
      vi.advanceTimersByTime(0)
    })

    expect(overlay).toHaveClass('opacity-100')
    expect(card).toHaveClass('translate-y-0')
  })

  it('renders the close affordance and the form content', () => {
    const { onClose } = renderModal()

    const close = screen.getByRole('button', { name: 'Close subscribe dialog' })
    expect(close).toHaveAttribute('data-dismiss', 'modal')
    expect(close).toHaveClass('-top-[40px]', 'right-[5px]', 'text-white/50', 'hover:text-white')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Subscribe')
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Updates' })).toBeInTheDocument()
    expect(onClose).not.toHaveBeenCalled()
  })

  it('focuses the first field and locks body scroll while open', () => {
    const { unmount } = renderModal()

    expect(screen.getByLabelText('Name')).toHaveFocus()
    expect(document.body.style.overflow).toBe('hidden')

    unmount()

    expect(document.body.style.overflow).toBe('')
  })

  it('compensates the scrollbar gap only when the page has one', () => {
    const plain = renderModal()

    expect(document.body.style.paddingRight).toBe('')

    plain.unmount()

    renderModal({ gap: 24 })

    expect(document.body.style.paddingRight).toBe('24px')
  })

  it('closes on Escape after the teardown delay and returns focus to the opener', () => {
    vi.useFakeTimers()
    const opener = document.createElement('button')
    document.body.appendChild(opener)
    const returnFocusTo: RefObject<HTMLElement | null> = { current: opener }
    const { onClose, unmount } = renderModal({ returnFocusTo })

    act(() => {
      vi.advanceTimersByTime(0)
    })
    expect(screen.getByRole('dialog')).toHaveClass('translate-y-0')

    fireEvent.keyDown(screen.getByLabelText('Name'), { key: 'Escape' })

    expect(onClose).not.toHaveBeenCalled()
    act(() => {
      vi.advanceTimersByTime(150)
    })
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('dialog')).toHaveClass('-translate-y-1/4')

    unmount()

    expect(opener).toHaveFocus()
    opener.remove()
  })

  it('ignores a second close request while it is already closing', () => {
    vi.useFakeTimers()
    const { onClose } = renderModal()

    fireEvent.keyDown(screen.getByLabelText('Name'), { key: 'Escape' })
    fireEvent.keyDown(screen.getByLabelText('Email'), { key: 'Escape' })

    act(() => {
      vi.advanceTimersByTime(150)
    })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on the close button and on an outside click', () => {
    vi.useFakeTimers()
    const { onClose } = renderModal()

    fireEvent.click(screen.getByRole('button', { name: 'Close subscribe dialog' }))
    fireEvent.click(screen.getByRole('dialog').parentElement as HTMLElement)

    act(() => {
      vi.advanceTimersByTime(150)
    })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('never closes when the click stays inside the card', () => {
    vi.useFakeTimers()
    const { onClose } = renderModal()

    fireEvent.click(screen.getByRole('dialog'))
    fireEvent.click(screen.getByText('No spam, ever. You can unsubscribe at any time.'))

    act(() => {
      vi.advanceTimersByTime(150)
    })

    expect(onClose).not.toHaveBeenCalled()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('keeps Tab inside the dialog', () => {
    renderModal()

    const close = screen.getByRole('button', { name: 'Close subscribe dialog' })
    const submit = screen.getByRole('button', { name: 'Get Updates' })

    submit.focus()
    fireEvent.keyDown(submit, { key: 'Tab' })
    expect(close).toHaveFocus()

    fireEvent.keyDown(close, { key: 'Tab', shiftKey: true })
    expect(submit).toHaveFocus()

    const name = screen.getByLabelText('Name')
    name.focus()
    fireEvent.keyDown(name, { key: 'Tab' })
    expect(name).toHaveFocus()
  })

  it('leaves other keys alone', () => {
    const { onClose } = renderModal()

    fireEvent.keyDown(screen.getByLabelText('Name'), { key: 'a' })

    expect(onClose).not.toHaveBeenCalled()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('drops its entry timer when it unmounts before the reveal', () => {
    vi.useFakeTimers()
    const clear = vi.spyOn(globalThis, 'clearTimeout')
    const { unmount } = renderModal()

    unmount()

    expect(clear).toHaveBeenCalled()
    clear.mockRestore()
  })
})
