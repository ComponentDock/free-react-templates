import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SiteHeader } from './SiteHeader'
import { HEADLINE_ID, MENU_LABEL, NAV_ID, NAV_LINKS } from '../data/site'

describe('SiteHeader', () => {
  it('renders the two-run wordmark and four links, one of them current', () => {
    const { container } = render(<SiteHeader />)
    const logo = screen.getByRole('link', { name: /epistle/i })

    expect(logo.textContent).toBe('The Epistle')
    expect(logo).toHaveAttribute('href', `#${HEADLINE_ID}`)

    const links = screen.getAllByRole('link')
    // the wordmark plus the four nav entries
    expect(links).toHaveLength(NAV_LINKS.length + 1)
    expect(container.querySelectorAll('[aria-current="page"]')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveAttribute('id', NAV_ID)
  })

  it('opens and closes the disclosure from the button', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', NAV_ID)
    expect(container.querySelector('.ep-bar')?.className).not.toContain('is-open')

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button).toHaveAccessibleName(MENU_LABEL.close)
    expect(container.querySelector('.ep-bar')?.className).toContain('is-open')

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAccessibleName(MENU_LABEL.open)
  })

  it('closes on Escape and returns focus to the button', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })

    await user.click(button)
    await user.keyboard('{Escape}')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveFocus()
  })

  it('closes on a press outside the bar', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })

    await user.click(button)
    await user.click(document.body)

    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes when a link in the panel is followed', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })

    await user.click(button)

    // A native once-only preventDefault keeps jsdom from hash-navigating, so the
    // React handler still runs and the test is not silently dropped.
    const link = screen.getByRole('link', { name: 'Sponsor' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
