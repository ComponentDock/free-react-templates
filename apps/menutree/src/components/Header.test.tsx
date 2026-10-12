import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

function setWidth(value: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value })
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}

describe('Header', () => {
  afterEach(() => {
    setScrollY(0)
    setWidth(1024)
  })

  it('floats transparent over the band, then pins a solid white bar and thaws again', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header') as HTMLElement

    expect(header).toHaveAttribute('data-stuck', 'false')
    expect(header).toHaveClass('absolute', 'top-0', 'left-0', 'w-full', 'border-white/10')
    expect(header).not.toHaveClass('bg-white')

    setScrollY(20)

    expect(header).toHaveAttribute('data-stuck', 'true')
    expect(header).toHaveClass('fixed', 'bg-white', 'shadow-stuck', 'border-transparent')
    expect(screen.getByRole('link', { name: 'Menutree, back to the top' })).toHaveClass(
      'text-brand',
    )

    setScrollY(0)

    expect(header).toHaveAttribute('data-stuck', 'false')
    expect(header).toHaveClass('absolute')
  })

  it('keeps the desktop row behind a hamburger below the wide breakpoint', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav.parentElement).toHaveClass('hidden', 'xl:block')

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu')
    expect(toggle.parentElement).toHaveClass('ml-auto', 'xl:hidden')
    expect(toggle.querySelector('svg')).toHaveClass('h-7', 'w-7')
  })

  it('opens the drawer from the hamburger and hands focus back when it closes', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close the menu')

    const drawer = screen.getByRole('dialog', { name: 'Site menu' })
    const glyph = within(drawer).getByRole('button', { name: 'Close the menu' })

    expect(document.activeElement).toBe(glyph)

    await user.click(glyph)

    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(toggle)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the drawer once the viewport is wide enough for the row, and only then', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))
    setWidth(1000)
    expect(screen.getByRole('dialog', { name: 'Site menu' })).toBeInTheDocument()

    setWidth(1300)
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
  })
})
