import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

/** user-event clicks on in-page anchors trigger jsdom hash navigation which
 *  can race the React handler and silently drop tests — neutralize it. */
function neutraliseAnchor(element: HTMLElement) {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('Navbar', () => {
  it('renders the wordmark, section links and appointment CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Statecraft' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Cases', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Make an Appointment' }).length).toBeGreaterThan(0)
  })

  it('toggles the mobile menu and closes it after choosing a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const ctas = screen.getAllByRole('link', { name: 'Make an Appointment' })
    neutraliseAnchor(ctas[ctas.length - 1]!)
    await user.click(ctas[ctas.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu after choosing a section link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileLinks = screen.getAllByRole('link', { name: 'Services' })
    neutraliseAnchor(mobileLinks[mobileLinks.length - 1]!)
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
