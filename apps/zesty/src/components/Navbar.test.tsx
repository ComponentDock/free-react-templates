import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  closeSearchLabel,
  menuCloseLabel,
  menuOpenLabel,
  navSections,
  openSearchLabel,
  searchPlaceholder,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the logo, nav links and controls', () => {
    render(<Navbar />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const section of navSections) {
      if (!section.children) {
        expect(screen.getByRole('link', { name: section.label })).toBeInTheDocument()
      }
    }
    expect(screen.getByRole('button', { name: openSearchLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Categories' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Recipe' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'About Me' })).not.toBeInTheDocument()
  })

  it('opens the search overlay from the trigger and closes it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByPlaceholderText(searchPlaceholder)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: openSearchLabel }))
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(screen.queryByPlaceholderText(searchPlaceholder)).not.toBeInTheDocument()
  })

  it('reveals the mobile menu from the hamburger and closes it again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: menuOpenLabel })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    await user.click(hamburger)
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.getByRole('button', { name: menuOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })
})
