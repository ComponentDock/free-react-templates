import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OverlayClose } from './OverlayClose'
import { CLOSE_LABEL } from '../lib/site'
import { CLOSE_BAR_PARTS, closeBarClass, closeClass, closeGlyphClass } from '../lib/styles'

describe('OverlayClose — the sheet’s own way out', () => {
  it('rests invisible and out of the tab order until it settles in', () => {
    render(<OverlayClose isVisible={false} onClose={() => {}} />)

    const close = screen.getByTestId('close')

    expect(close.tagName).toBe('BUTTON')
    expect(close.className).toBe(closeClass(false))
    expect(close.className).toContain('invisible')
    expect(close.className).toContain('opacity-0')
    expect(close).toHaveAttribute('aria-hidden', 'true')
    expect(close).toHaveAttribute('tabindex', '-1')
  })

  it('is a real, named, keyboard-operable control once it has settled', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<OverlayClose isVisible onClose={onClose} />)

    const close = screen.getByRole('button', { name: CLOSE_LABEL })

    expect(close.className).toBe(closeClass(true))
    expect(close.className).toContain('visible')
    expect(close.className).toContain('opacity-100')
    expect(close.className).toContain('h-11')
    expect(close.className).toContain('w-11')
    expect(close.className).toContain('top-10')
    expect(close.className).toContain('right-10')
    expect(close).toHaveAttribute('aria-hidden', 'false')

    await user.click(close)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('draws two crossed white bars over a transparent one', () => {
    render(<OverlayClose isVisible onClose={() => {}} />)

    expect(screen.getByTestId('close-glyph').className).toBe(closeGlyphClass)

    for (const part of CLOSE_BAR_PARTS) {
      const bar = screen.getByTestId(`close-bar-${part}`)

      expect(bar.className).toBe(closeBarClass(part))
      expect(bar.className).toContain('h-[2px]')
      expect(bar.className).toContain('w-[30px]')
      expect(bar.className).toContain('top-[18px]')
    }

    expect(screen.getByTestId('close-bar-top').className).toContain('rotate-45')
    expect(screen.getByTestId('close-bar-top').className).toContain('bg-on-dark')
    expect(screen.getByTestId('close-bar-middle').className).toContain('bg-transparent')
    expect(screen.getByTestId('close-bar-bottom').className).toContain('-rotate-45')
    expect(screen.getByTestId('close-bar-bottom').className).toContain('bg-on-dark')
  })
})
