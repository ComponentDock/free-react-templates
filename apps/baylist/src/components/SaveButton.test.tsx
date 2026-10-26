import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SaveButton } from './SaveButton'

describe('SaveButton', () => {
  it('is a named icon-only toggle at the card corner', () => {
    render(<SaveButton address="14 Seaview Terrace" saved={false} onToggle={() => {}} />)

    const button = screen.getByRole('button', { name: 'Save 14 Seaview Terrace to favourites' })
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(button.className).toContain('absolute')
    expect(button.className).toContain('top-2.5')
    expect(button.className).toContain('right-2.5')
    expect(button.className).toContain('z-[2]')
    expect(button.className).toContain('size-11')
    expect(button.className).toContain('rounded-full')
    expect(button.className).toContain('bg-white/95')
    expect(button.className).toContain('focus-visible:outline-gold-soft')
    expect(button.className).toContain('hover:scale-[1.08]')

    const glyph = button.querySelector('svg')!
    expect(glyph).toHaveAttribute('aria-hidden', 'true')
    expect(glyph).toHaveAttribute('width', '22')
    expect(glyph).toHaveAttribute('fill', 'none')
  })

  it('fills the heart and flips the label when the listing is saved', () => {
    render(<SaveButton address="7 Banyan Lane" saved onToggle={() => {}} />)

    const button = screen.getByRole('button', { name: 'Remove 7 Banyan Lane from favourites' })
    expect(button).toHaveAttribute('aria-pressed', 'true')

    const glyph = button.querySelector('svg')!
    expect(glyph).toHaveAttribute('fill', 'currentColor')
    expect(glyph.getAttribute('class')).toContain('text-heart')
  })

  it('hands the press to its owner', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<SaveButton address="22 Lagoon Drive" saved={false} onToggle={onToggle} />)

    await user.click(screen.getByRole('button', { name: /^Save 22 Lagoon Drive/ }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('plays the pop on a save and clears it when the animation ends', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SaveButton address="14 Seaview Terrace" saved={false} onToggle={() => {}} />,
    )

    const before = container.querySelector('svg')!
    expect(before.getAttribute('class')).not.toContain('baylist-pop')

    await user.click(screen.getByRole('button', { name: /^Save 14 Seaview Terrace/ }))

    const popping = container.querySelector('svg')!
    expect(popping.getAttribute('class')).toContain('baylist-pop')
    expect(popping).not.toBe(before)

    fireEvent.animationEnd(popping)
    expect(container.querySelector('svg')!.getAttribute('class')).not.toContain('baylist-pop')
  })

  it('replays the pop on the un-save direction too', async () => {
    const user = userEvent.setup()
    const { container } = render(<SaveButton address="7 Banyan Lane" saved onToggle={() => {}} />)

    const first = container.querySelector('svg')!
    await user.click(screen.getByRole('button', { name: /^Remove 7 Banyan Lane/ }))
    fireEvent.animationEnd(container.querySelector('svg')!)

    const quiet = container.querySelector('svg')!
    expect(quiet.getAttribute('class')).not.toContain('baylist-pop')

    await user.click(screen.getByRole('button', { name: /^Remove 7 Banyan Lane/ }))
    expect(container.querySelector('svg')!.getAttribute('class')).toContain('baylist-pop')
    expect(container.querySelector('svg')).not.toBe(quiet)
    expect(container.querySelector('svg')).not.toBe(first)
  })

  it('detaches its animation listener when the card goes away', () => {
    const { unmount } = render(
      <SaveButton address="22 Lagoon Drive" saved={false} onToggle={() => {}} />,
    )
    const button = screen.getByRole('button')
    unmount()

    expect(() => button.dispatchEvent(new Event('animationend', { bubbles: true }))).not.toThrow()
  })
})
