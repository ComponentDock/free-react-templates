import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

function setWidth(value: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value })
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}

describe('Header', () => {
  afterEach(() => {
    setWidth(1024)
  })

  it('floats absolutely and transparently over the band, with no hairline and no pinned state', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header') as HTMLElement

    expect(header).toHaveClass(
      'absolute',
      'inset-x-0',
      'top-0',
      'z-[1999]',
      'w-full',
      'bg-transparent',
      'py-12',
      'lg:py-4',
    )
    expect(header.className).not.toMatch(/sticky|fixed|border|shadow/)
    expect(container.querySelectorAll('header')).toHaveLength(1)
  })

  it('keeps the six-item row behind a hamburger below the wide breakpoint', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav.parentElement).toHaveClass('hidden', 'w-9/12', 'lg:block')

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu')
    expect(toggle.parentElement).toHaveClass('ml-auto', 'lg:hidden')
    expect(toggle.querySelector('svg')).toHaveClass('h-7', 'w-7')
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('opens the drawer from the hamburger, toggles it shut and hands focus back on close', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close the menu')

    const drawer = screen.getByRole('dialog', { name: 'Site menu' })
    expect(document.activeElement).toBe(within(drawer).getByRole('button', { name: 'Close the menu' }))

    await user.click(within(drawer).getByRole('button', { name: 'Close the menu' }))

    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(toggle)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer once the viewport is wide enough for the row, and only then', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))

    setWidth(700)
    expect(screen.getByRole('dialog', { name: 'Site menu' })).toBeInTheDocument()

    setWidth(992)
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
  })
})
