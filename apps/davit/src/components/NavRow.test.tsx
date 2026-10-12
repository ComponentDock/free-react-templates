import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavRow } from './NavRow'
import { NAV } from '../lib/site'

const current = NAV[0]!
const plain = NAV[1]!

/** An in-page anchor click is neutralised natively, so the test never races jsdom's own hash navigation. */
function neutralise(link: HTMLElement) {
  link.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('NavRow — one destination, in either presentation', () => {
  it('wears the amber accent on the row the page is already on', () => {
    render(<NavRow item={current} variant="desktop" />)

    const row = screen.getByRole('link', { name: current.label })

    expect(row).toHaveAttribute('href', current.href)
    expect(row).toHaveAttribute('aria-current', 'page')
    expect(row.className).toContain('text-accent')
    expect(row.className).toContain('py-[19.2px]')
    expect(row.className).toContain('text-[13px]')
    expect(row.className).toContain('tracking-[1px]')
    expect(row.className).toContain('uppercase')
  })

  it('turns the accent on for every other row only when it is hovered or focused', () => {
    render(<NavRow item={plain} variant="desktop" />)

    const row = screen.getByRole('link', { name: plain.label })

    expect(row).not.toHaveAttribute('aria-current')
    expect(row.className).toContain('hover:text-accent')
    expect(row.className).toContain('focus-visible:text-accent')
    expect(row.className).not.toContain('underline')
  })

  it('rests at 70% white inside the panel, and white where the page is', () => {
    const { unmount } = render(<NavRow item={plain} variant="panel" />)

    expect(screen.getByRole('link', { name: plain.label }).className).toContain('text-panel-row')

    unmount()
    render(<NavRow item={current} variant="panel" />)

    expect(screen.getByRole('link', { name: current.label }).className).toContain('text-white')
  })

  it('reports an activation when it is followed out of the panel', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<NavRow item={plain} variant="panel" onNavigate={onNavigate} />)

    neutralise(screen.getByRole('link', { name: plain.label }))
    await user.click(screen.getByRole('link', { name: plain.label }))

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('has nothing to report on the wide card, where nothing needs folding away', async () => {
    const user = userEvent.setup()

    render(<NavRow item={plain} variant="desktop" />)

    neutralise(screen.getByRole('link', { name: plain.label }))
    await user.click(screen.getByRole('link', { name: plain.label }))

    expect(screen.getByRole('link', { name: plain.label })).toBeInTheDocument()
  })
})
