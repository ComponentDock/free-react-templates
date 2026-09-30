import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

function setScrollY(value: number) {
  act(() => {
    Object.defineProperty(window, 'scrollY', { value, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('Header', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the top bar with utility links, LIVE badge and ticker', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'GET Tickets' })).toHaveAttribute('href', '#tickets')
    expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute('href', '#shop')
    expect(screen.getByText('Live')).toBeInTheDocument()
    expect(screen.getByText('Ravens seal a late winner at the Den')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('renders split navigation around the club crest', () => {
    render(<Header />)
    for (const label of ['Home', 'About the Club', 'Media']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    for (const label of ['Tickets', 'News', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Matchday FC — home' })).toBeInTheDocument()
  })

  it('rotates the top-bar ticker headline over time', () => {
    vi.useFakeTimers()
    render(<Header />)
    expect(screen.getByText('Ravens seal a late winner at the Den')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByText('Tickets for the Hawks fixture are on sale now')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('compacts the header when the page is scrolled', () => {
    render(<Header />)
    setScrollY(300)
    const crestLink = screen.getByRole('link', { name: 'Matchday FC — home' })
    expect(crestLink.className).toContain('h-[170px]')
    setScrollY(0)
    expect(crestLink.className).toContain('h-[200px]')
  })

  it('toggles the fullscreen mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    const dialogScope = within(dialog)
    expect(dialogScope.getByRole('link', { name: 'Sign up' })).toBeInTheDocument()
    expect(dialogScope.getByRole('link', { name: 'GET Tickets' })).toBeInTheDocument()
    for (const label of ['Home', 'About Us', 'The Team', 'News', 'Contact']) {
      expect(dialogScope.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu from the backdrop, a menu link or the utility buttons', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    const backdrop = dialog.firstElementChild!
    await user.click(backdrop)
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialogLinks = within(screen.getByRole('dialog', { name: 'Site menu' })).getAllByRole(
      'link',
      { name: 'News' },
    )
    await user.click(dialogLinks[dialogLinks.length - 1]!)
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const shopLink = within(screen.getByRole('dialog', { name: 'Site menu' })).getByRole('link', {
      name: 'Shop',
    })
    shopLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(shopLink)
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const ticketsLink = within(screen.getByRole('dialog', { name: 'Site menu' })).getByRole(
      'link',
      { name: 'GET Tickets' },
    )
    ticketsLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(ticketsLink)
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).not.toBeInTheDocument()
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })
})
