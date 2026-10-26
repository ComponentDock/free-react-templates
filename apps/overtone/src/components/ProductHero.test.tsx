import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductHero } from './ProductHero'
import { COLOURS } from '../data/site'

const [MIDNIGHT, STONE, BLUSH] = COLOURS as [
  (typeof COLOURS)[0],
  (typeof COLOURS)[0],
  (typeof COLOURS)[0],
]
const noop = () => {}

afterEach(() => {
  vi.unstubAllGlobals()
})

function photograph() {
  return screen.getByRole('img')
}

describe('ProductHero', () => {
  it('opens on Midnight with its photograph, caption, legend and stock line', () => {
    render(<ProductHero onAddToCart={noop} />)

    expect(photograph()).toHaveAttribute('src', MIDNIGHT.src)
    expect(photograph()).toHaveAttribute('alt', MIDNIGHT.alt)
    expect(screen.getByText('Midnight', { selector: '.ot-caption' })).toBeInTheDocument()
    expect(screen.getByText('Colour:', { selector: '.ot-legend' }).textContent).toBe(
      'Colour: Midnight',
    )
    expect(screen.getByText('Midnight: In stock, ships tomorrow')).toBeInTheDocument()
    expect(screen.getByText('Midnight: In stock, ships tomorrow').className).toBe('ot-stock')
  })

  it('fades the photograph out, then swaps it and every dependent string', async () => {
    const user = userEvent.setup()
    const { container } = render(<ProductHero onAddToCart={noop} />)

    await user.click(screen.getByRole('radio', { name: 'Blush' }))

    // the 180ms fade runs before the src changes
    expect(container.querySelector('.ot-frame')?.className).toContain('is-swapping')
    expect(photograph()).toHaveAttribute('src', MIDNIGHT.src)

    await waitFor(() => expect(photograph()).toHaveAttribute('src', BLUSH.src))
    expect(photograph()).toHaveAttribute('alt', BLUSH.alt)
    expect(container.querySelector('.ot-frame')?.className).toBe('ot-frame')
    expect(screen.getByText('Blush', { selector: '.ot-caption' })).toBeInTheDocument()
    expect(screen.getByText('Colour:', { selector: '.ot-legend' }).textContent).toBe(
      'Colour: Blush',
    )

    const stock = screen.getByText('Blush: Only 4 left, ships in 3 days')
    // Only 4 left — the `/only/i` match is what makes the line low
    expect(stock.className).toBe('ot-stock is-low')
    expect(stock).toHaveAttribute('aria-live', 'polite')
    expect(container.querySelector('.ot-caption-dot')).toHaveStyle(`background: ${BLUSH.sw}`)
    expect(screen.getByRole('radio', { name: 'Blush' })).toBeChecked()
  })

  it('swaps synchronously when motion is reduced', async () => {
    const { installMatchMedia } = await import('../test/match-media')
    const media = installMatchMedia({ reduce: true })
    const user = userEvent.setup()
    const { container } = render(<ProductHero onAddToCart={noop} />)

    await user.click(screen.getByRole('radio', { name: 'Stone' }))

    expect(photograph()).toHaveAttribute('src', STONE.src)
    expect(photograph()).toHaveAttribute('alt', STONE.alt)
    expect(container.querySelector('.ot-frame')?.className).toBe('ot-frame')
    expect(screen.getByText('Stone: In stock, ships tomorrow').className).toBe('ot-stock')
    media.restore()
  })

  it('restarts the fade when a second finish is chosen mid-swap', async () => {
    const user = userEvent.setup()
    render(<ProductHero onAddToCart={noop} />)

    await user.click(screen.getByRole('radio', { name: 'Stone' }))
    await user.click(screen.getByRole('radio', { name: 'Blush' }))

    await waitFor(() => expect(photograph()).toHaveAttribute('src', BLUSH.src))
  })

  it('clears a pending swap when it unmounts', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<ProductHero onAddToCart={noop} />)

    await user.click(screen.getByRole('radio', { name: 'Stone' }))
    unmount()

    // the timer is gone, so nothing fires against an unmounted tree
    await new Promise((resolve) => setTimeout(resolve, 240))
  })

  it('falls back to the fade when the engine has no matchMedia', async () => {
    vi.stubGlobal('matchMedia', undefined)
    const user = userEvent.setup()
    render(<ProductHero onAddToCart={noop} />)

    await user.click(screen.getByRole('radio', { name: 'Blush' }))

    await waitFor(() => expect(photograph()).toHaveAttribute('src', BLUSH.src))
  })
})
