import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the transparent header with the wordmark, nav and both auth controls', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByText('Ecohive')).toBeInTheDocument()
    for (const label of ['Home', 'Packages', 'Help', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('marks the current page and leaves the other items unmarked', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Packages' })).not.toHaveAttribute('aria-current')
  })

  it('opens the Blog dropdown on click and closes it on a second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getByRole('link', { name: /Blog/ })

    expect(blog).toHaveAttribute('aria-expanded', 'false')
    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('opens the Blog dropdown on hover and closes it when the pointer leaves', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getByRole('link', { name: /Blog/ })

    await user.hover(blog)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    await user.unhover(blog)
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('does not render the submenu for items without children', () => {
    render(<Navbar />)
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('toggles the mobile panel and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    await user.click(toggle)
    const close = screen.getByRole('button', { name: 'Close menu' })
    expect(close).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getAllByRole('link', { name: 'Packages' })[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile panel from its sub-links, Sign Up and Sign In items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Blog Details' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getAllByRole('link', { name: 'Sign Up' })[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getAllByRole('link', { name: 'Sign In' })[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes the mobile panel on Escape but ignores other keys and stays inert when closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Closed: the Escape listener is not attached, so the panel stays closed.
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.keyboard('a')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
