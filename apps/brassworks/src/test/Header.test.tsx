import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from '../components/Header'

afterEach(() => {
  vi.restoreAllMocks()
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})

function setScroll(scrollY: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('Header', () => {
  it('renders the wordmark, the catalogue search and the five rail links', () => {
    render(<Header dark={false} onToggleTheme={vi.fn()} />)

    expect(screen.getByRole('link', { name: 'Brassworks home' })).toBeInTheDocument()
    expect(screen.getByLabelText('Search the catalogue')).toHaveAttribute(
      'placeholder',
      'Search fixtures, heaters, fittings…',
    )

    const rail = screen.getByRole('navigation', { name: 'Catalogue navigation' })
    for (const label of ['Catalogue', 'Brands', 'Trade accounts', 'Showroom', 'Contact']) {
      expect(within(rail).getByRole('link', { name: label })).toHaveAttribute('data-nav-link')
    }
  })

  it('never submits the catalogue search — there is no catalogue page', () => {
    render(<Header dark={false} onToggleTheme={vi.fn()} />)

    const form = screen.getByRole('search')
    const submit = new Event('submit', { bubbles: true, cancelable: true })
    act(() => {
      form.dispatchEvent(submit)
    })

    expect(submit.defaultPrevented).toBe(true)
  })

  it('gains its shadow only past 50 px of scroll', () => {
    render(<Header dark={false} onToggleTheme={vi.fn()} />)
    const header = screen.getByRole('banner')

    expect(header).not.toHaveClass('shadow-lg')

    setScroll(51)
    expect(header).toHaveClass('shadow-lg')

    setScroll(10)
    expect(header).not.toHaveClass('shadow-lg')
  })

  it('opens the mobile panel and closes it from a link inside it', async () => {
    const user = userEvent.setup()
    render(<Header dark={false} onToggleTheme={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByLabelText('Search the catalogue')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Search the catalogue…')).toBeNull()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const panel = screen.getByRole('navigation', { name: 'Menu' })
    expect(within(panel).getByPlaceholderText('Search the catalogue…')).toBeInTheDocument()
    expect(within(panel).getByRole('link', { name: 'Request a quote' })).toHaveAttribute(
      'href',
      '#contact',
    )

    await user.click(within(panel).getByRole('link', { name: 'Showroom' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByPlaceholderText('Search the catalogue…')).toBeNull()
  })

  it('closes the panel from its own quote CTA', async () => {
    const user = userEvent.setup()
    render(<Header dark={false} onToggleTheme={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    const panel = screen.getByRole('navigation', { name: 'Menu' })
    await user.click(within(panel).getByRole('link', { name: 'Request a quote' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the panel on Escape and hands focus back to the menu button', async () => {
    const user = userEvent.setup()
    render(<Header dark={false} onToggleTheme={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(toggle)
  })

  it('keeps the panel open when another key is pressed', async () => {
    const user = userEvent.setup()
    render(<Header dark={false} onToggleTheme={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    await user.keyboard('a')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('hands the theme toggle to the app and swaps its icon with the theme', async () => {
    const user = userEvent.setup()
    const onToggleTheme = vi.fn()
    const { rerender } = render(<Header dark={false} onToggleTheme={onToggleTheme} />)

    const button = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(button.innerHTML).toContain('lucide-moon')

    await user.click(button)
    expect(onToggleTheme).toHaveBeenCalledTimes(1)

    rerender(<Header dark onToggleTheme={onToggleTheme} />)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' }).innerHTML).toContain(
      'lucide-sun',
    )
  })

  it('shows the quote CTA in the header row for wide viewports', () => {
    render(<Header dark={false} onToggleTheme={vi.fn()} />)

    const cta = screen.getByRole('link', { name: 'Request a quote' })
    expect(cta).toHaveClass('hidden', 'xl:inline-flex')
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
