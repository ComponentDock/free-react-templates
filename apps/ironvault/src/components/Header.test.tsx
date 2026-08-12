import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('shows the brand on the left and a hamburger trigger on the right', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /Ironvault home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('opens the full-screen overlay menu with section links and closes it via the close button', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    expect(screen.getByRole('navigation', { name: 'Overlay' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Skills', 'Gallery', 'Testimonials', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Overlay' })).not.toBeInTheDocument()
  })

  it('closes the overlay when the Escape key is pressed', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Overlay' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: 'Overlay' })).not.toBeInTheDocument()
  })

  it('closes the overlay when a menu link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const aboutLink = screen.getByRole('link', { name: 'About' })
    // Neutralize jsdom hash-navigation (it can race the React handler and
    // silently drop the test) — the onClick still fires.
    aboutLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(aboutLink)

    expect(screen.queryByRole('navigation', { name: 'Overlay' })).not.toBeInTheDocument()
  })
})
