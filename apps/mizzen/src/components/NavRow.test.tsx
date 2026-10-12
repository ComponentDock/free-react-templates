import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavRow } from './NavRow'
import { NAV } from '../lib/site'
import { navRowClass } from '../lib/styles'

const current = NAV[0]!
const plain = NAV[1]!

describe('NavRow — one row of the bar, in either presentation', () => {
  it('paints the row the page is on in the accent red, under no underline at all', () => {
    render(
      <ul>
        <NavRow item={current} variant="desktop" />
      </ul>,
    )

    const row = screen.getByRole('link', { name: current.label })

    expect(row).toHaveAttribute('href', current.href)
    expect(row).toHaveAttribute('aria-current', 'page')
    expect(row.className).toBe(navRowClass({ variant: 'desktop', current: true }))
    expect(row.className).toContain('text-accent')
    expect(row.className).not.toContain('underline')
    // Nothing marks the current row out on hover alone: the underline is a hover treatment.
    expect(row.className).toContain('hover:before:w-full')
  })

  it('wipes a 2px accent bar in along the bottom edge of every other row', () => {
    render(
      <ul>
        <NavRow item={plain} variant="desktop" />
      </ul>,
    )

    const row = screen.getByRole('link', { name: plain.label })

    expect(row).not.toHaveAttribute('aria-current')
    expect(row.className).toContain('text-row')
    expect(row.className).toContain('before:absolute')
    expect(row.className).toContain('before:bottom-0')
    expect(row.className).toContain('before:left-0')
    expect(row.className).toContain('before:h-[2px]')
    expect(row.className).toContain('before:w-0')
    expect(row.className).toContain('before:bg-accent')
    expect(row.className).toContain('before:duration-300')
    expect(row.className).toContain('hover:text-accent')
    expect(row.className).toContain('hover:before:w-full')
    // The design's own 24px 20px padding on an 11px tracked-out line — 67.8px tall.
    expect(row.className).toContain('px-5')
    expect(row.className).toContain('py-6')
    expect(row.className).toContain('text-[11px]')
    expect(row.className).toContain('tracking-[2px]')
    expect(row.className).toContain('uppercase')
    expect(row.className).not.toContain('before:h-full')
  })

  it('draws the same row as a 43.2px block inside the panel', () => {
    render(
      <ul>
        <NavRow item={plain} variant="panel" />
      </ul>,
    )

    const row = screen.getByRole('link', { name: plain.label })

    expect(row.className).toBe(navRowClass({ variant: 'panel', current: false }))
    expect(row.className).toContain('py-[11.2px]')
    expect(row.className).toContain('leading-[20.8px]')
    expect(row.className).toContain('text-white/70')
    expect(row.className).toContain('hover:text-white')
    expect(row.className).toContain('max-md:border-b')
    expect(row.className).toContain('max-md:border-white/20')
    expect(row.className).not.toContain('bg-accent')
  })

  it('solidifies the current row inside the panel as well', () => {
    render(
      <ul>
        <NavRow item={current} variant="panel" />
      </ul>,
    )

    const row = screen.getByRole('link', { name: current.label })

    expect(row.className).toContain('text-white')
    expect(row.className).not.toContain('text-white/70')
  })

  it('reports an activation, so the surface that owns it can fold itself away', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(
      <ul>
        <NavRow item={plain} variant="panel" onNavigate={onNavigate} />
      </ul>,
    )

    const row = screen.getByRole('link', { name: plain.label })

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
