import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SiteHeader } from './SiteHeader'
import { installMatchMedia, stopAnchorNavigation } from '../test/match-media'
import { NAV_ID } from '../data/site'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('SiteHeader', () => {
  it('renders the two-tone wordmark, four links and a labelled cart', () => {
    const { container } = render(<SiteHeader cartCount={2} />)

    expect(screen.getByRole('link', { name: 'Overtoneaudio' })).toBeInTheDocument()
    const links = screen.getAllByRole('link').filter((link) => link.className === 'ot-link')
    expect(links).toHaveLength(4)
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[1]).not.toHaveAttribute('aria-current')
    expect(screen.getByLabelText('Cart, 2 items')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveAttribute('id', NAV_ID)
    // tools: search, cart, menu
    expect(container.querySelectorAll('.ot-icon-btn')).toHaveLength(2)
  })

  it('opens and closes the panel from the button', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader cartCount={0} />)
    const button = screen.getByRole('button', { name: 'Open menu' })

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button).toHaveAttribute('aria-label', 'Close menu')
    expect(button).toHaveAttribute('aria-controls', NAV_ID)
    expect(container.querySelector('header')?.className).toContain('is-open')

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-label', 'Open menu')
    expect(container.querySelector('header')?.className).not.toContain('is-open')
  })

  it('closes on Escape and returns focus to the button, ignoring other keys', async () => {
    const user = userEvent.setup()
    render(<SiteHeader cartCount={0} />)
    const button = screen.getByRole('button', { name: 'Open menu' })

    await user.click(button)
    fireEvent.keyDown(document, { key: 'a' })
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveFocus()
  })

  it('closes on a press outside the bar and stays open on one inside it', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader cartCount={0} />)
    const button = screen.getByRole('button', { name: 'Open menu' })
    const header = container.querySelector('header') as HTMLElement

    await user.click(button)
    fireEvent.mouseDown(header)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseDown(document.body)

    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes when a link inside the panel is chosen', async () => {
    const user = userEvent.setup()
    render(<SiteHeader cartCount={0} />)
    const button = screen.getByRole('button', { name: 'Open menu' })

    await user.click(button)
    const link = screen.getByRole('link', { name: 'Earbuds' })
    stopAnchorNavigation(link)
    await user.click(link)

    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes when the viewport crosses 861px, but not when it crosses back', async () => {
    const media = installMatchMedia({ desktop: false })
    const user = userEvent.setup()
    render(<SiteHeader cartCount={0} />)
    const button = screen.getByRole('button', { name: 'Open menu' })

    await user.click(button)
    act(() => media.fire(false))
    expect(button).toHaveAttribute('aria-expanded', 'true')

    act(() => media.fire(true))
    expect(button).toHaveAttribute('aria-expanded', 'false')

    media.restore()
  })

  it('renders and toggles without matchMedia', async () => {
    vi.stubGlobal('matchMedia', undefined)
    const user = userEvent.setup()
    render(<SiteHeader cartCount={3} />)
    const button = screen.getByRole('button', { name: 'Open menu' })

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByLabelText('Cart, 3 items')).toBeInTheDocument()
  })
})
