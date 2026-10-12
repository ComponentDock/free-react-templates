import { useRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { MobileMenu } from './MobileMenu'

function Harness({ onClose }: { onClose: () => void }) {
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button ref={triggerRef} type="button">
        Hamburger
      </button>
      <MobileMenu open onClose={onClose} triggerRef={triggerRef} />
    </>
  )
}

describe('MobileMenu', () => {
  it('renders nothing while the menu is closed', () => {
    const triggerRef = { current: null }

    const { container } = render(<MobileMenu open={false} onClose={vi.fn()} triggerRef={triggerRef} />)

    expect(container).toBeEmptyDOMElement()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the panel with the auth pair and the five destinations', () => {
    render(<MobileMenu open onClose={vi.fn()} triggerRef={{ current: null }} />)

    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveClass('w-[350px]', 'bg-night', 'pt-[50px]')

    expect(within(dialog).getByRole('link', { name: 'Login' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Register' })).toBeInTheDocument()

    const nav = within(dialog).getByRole('navigation', { name: 'Mobile' })
    expect(within(nav).getAllByRole('link')).toHaveLength(5)
    expect(within(nav).getByRole('link', { name: 'News' })).toHaveClass('hover:text-mint')
  })

  it('focuses the close control as soon as it opens', () => {
    render(<MobileMenu open onClose={vi.fn()} triggerRef={{ current: null }} />)

    expect(screen.getByRole('button', { name: 'Close panel' })).toHaveFocus()
  })

  it('closes from the overlay, the close control and the panel links', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Harness onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close the menu overlay' }))
    await user.click(screen.getByRole('button', { name: 'Close panel' }))
    await user.click(screen.getByRole('link', { name: 'Services' }))

    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('closes on Escape and returns focus to the hamburger', () => {
    const onClose = vi.fn()
    render(<Harness onClose={onClose} />)

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button', { name: 'Hamburger' })).toHaveFocus()
  })

  it('keeps Tab inside the panel and leaves other keys alone', () => {
    render(<MobileMenu open onClose={vi.fn()} triggerRef={{ current: null }} />)

    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    const close = screen.getByRole('button', { name: 'Close panel' })
    const last = within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
      name: 'Contact',
    })

    fireEvent.keyDown(dialog, { key: 'a' })
    expect(close).toHaveFocus()

    last.focus()
    fireEvent.keyDown(dialog, { key: 'Tab' })
    expect(close).toHaveFocus()

    last.focus()
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true })
    expect(last).toHaveFocus()

    close.focus()
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true })
    expect(last).toHaveFocus()
  })
})
