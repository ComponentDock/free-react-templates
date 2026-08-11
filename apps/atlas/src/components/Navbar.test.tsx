import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  closeSearchLabel,
  menuCloseLabel,
  menuOpenLabel,
  navLabel,
  navSections,
  openSearchLabel,
  searchPlaceholder,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the logo, nav links, and search trigger', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    navSections
      .filter((section) => !section.children)
      .forEach((section) => {
        expect(screen.getByRole('link', { name: section.label })).toBeInTheDocument()
      })
    expect(screen.getByRole('button', { name: openSearchLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesButton = screen.getByRole('button', { name: 'Pages' })
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Catagory' })).not.toBeInTheDocument()

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Catagory' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Single Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Regular Page' })).toBeInTheDocument()

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Catagory' })).not.toBeInTheDocument()
  })

  it('opens the search overlay, focuses the input, and closes it via the button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: openSearchLabel }))
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toHaveFocus()
    expect(screen.getByRole('searchbox')).toHaveAttribute('placeholder', searchPlaceholder)

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('closes the search overlay with Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: openSearchLabel }))
    expect(screen.getByRole('search')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.getAllByRole('navigation', { name: navLabel })).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('navigation', { name: navLabel })).toHaveLength(2)
    // The mobile panel lists the dropdown children (the desktop dropdown is
    // closed, so "Catagory" appears only once).
    expect(screen.getByRole('link', { name: 'Catagory' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.getByRole('button', { name: menuOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByRole('navigation', { name: navLabel })).toHaveLength(1)
  })
})
