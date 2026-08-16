import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { describe, expect, it } from 'vitest'

/** Native preventDefault so user-event anchor clicks don't hash-navigate
 *  (jsdom race can silently drop tests; native target listeners run first). */
function neutralizeAnchor(element: HTMLElement) {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('Header', () => {
  it('renders the brand, nav links, and Appointment CTA', () => {
    render(<Header />)
    expect(screen.getAllByRole('link', { name: 'Spotless home' }).length).toBeGreaterThanOrEqual(1)
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact', 'Pages']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getAllByRole('link', { name: 'Appointment' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Appointment' })[0]).toHaveClass('btn-pill')
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')
    for (const label of ['Pricing', 'Services Details', 'Blog Details']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Pricing' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it on link click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    const drawerLink = (name: string, index = 1) => {
      const link = screen.getAllByRole('link', { name })[index]!
      neutralizeAnchor(link)
      return link
    }

    // Open, then close via a section link (drawer duplicates desktop links)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(drawerLink('About'))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // Open, then close via the drawer Pages link
    await user.click(toggle)
    expect(screen.getByRole('link', { name: 'Pages' })).toBeInTheDocument()
    await user.click(drawerLink('Pages', 0))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // Open, then close via the drawer Appointment CTA
    await user.click(toggle)
    await user.click(drawerLink('Appointment'))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the dropdown closed and the mobile menu hidden by default', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('#mobile-menu')).toHaveClass('hidden')
    expect(screen.queryByRole('link', { name: 'Pricing' })).not.toBeInTheDocument()
  })
})
