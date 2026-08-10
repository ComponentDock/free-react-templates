import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  brandName,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchCloseLabel,
  searchFieldLabel,
  searchPlaceholder,
  searchSubmitLabel,
  searchToggleLabel,
} from '../data'

describe('Navbar', () => {
  it('renders the brand and all nav links with Home marked active', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()

    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of navLinks) {
      expect(within(mainNav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('opens and closes the search form via the search toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.queryByRole('search')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: searchToggleLabel }))
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByLabelText(searchFieldLabel)).toHaveAttribute(
      'placeholder',
      searchPlaceholder,
    )
    expect(screen.getByRole('button', { name: searchSubmitLabel })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: searchCloseLabel }))
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('submits the search form without navigating', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: searchToggleLabel }))
    await user.type(screen.getByLabelText(searchFieldLabel), 'news')
    await user.click(screen.getByRole('button', { name: searchSubmitLabel }))

    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('opens and closes the mobile off-canvas menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    const mobileNav = within(dialog).getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(mobileNav).getByRole('link', { name: link })).toBeInTheDocument()
    }

    await user.click(within(dialog).getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const dialog = screen.getByRole('dialog')
    await user.click(within(dialog).getByRole('link', { name: 'Sports' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the dark backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('dialog').firstElementChild!)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('reflects open state on the toggle buttons via aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuToggle = screen.getByRole('button', { name: menuOpenLabel })
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(menuToggle)
    // the header toggle relabels to "Close menu" while open; the off-canvas
    // panel adds its own close button with the same label
    const closeButtons = screen.getAllByRole('button', { name: menuCloseLabel })
    expect(closeButtons).toHaveLength(2)
    expect(
      closeButtons.filter((button) => button.getAttribute('aria-expanded') === 'true'),
    ).toHaveLength(1)

    const searchToggle = screen.getByRole('button', { name: searchToggleLabel })
    expect(searchToggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(searchToggle)
    expect(screen.getByRole('button', { name: searchCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
