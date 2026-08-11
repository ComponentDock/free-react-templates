import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
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
  tagline,
} from '../data'

describe('Navbar', () => {
  it('renders the serif-italic wordmark logo with the tagline and an icon', () => {
    const { container } = render(<Navbar />)
    const logo = screen.getByRole('link', { name: new RegExp(siteName) })
    expect(logo).toBeInTheDocument()
    expect(logo.textContent).toContain(tagline)
    expect(logo.querySelector('svg')).not.toBeNull()
    expect(container.querySelector('[data-logo-wordmark]')).toHaveClass('font-logo')
  })

  it('renders the nav links with Home active in pink', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const section of navSections) {
      if (section.children) {
        expect(within(nav).getByRole('button', { name: /Pages/ })).toBeInTheDocument()
      } else {
        expect(within(nav).getByRole('link', { name: section.label })).toBeInTheDocument()
      }
    }
    const home = within(nav).getByRole('link', { name: 'Home' })
    expect(home).toHaveClass('text-brand')
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    const pages = within(nav).getByRole('button', { name: /Pages/ })

    expect(screen.queryByRole('link', { name: 'About Me' })).not.toBeInTheDocument()
    await user.click(pages)
    expect(pages).toHaveAttribute('aria-expanded', 'true')
    const dropdown = pages.closest('li') as HTMLLIElement
    expect(within(dropdown).getByRole('link', { name: 'About Me' })).toBeInTheDocument()
    expect(within(dropdown).getByRole('link', { name: 'Categories' })).toBeInTheDocument()
    expect(within(dropdown).getByRole('link', { name: 'Recipe' })).toBeInTheDocument()
    expect(within(dropdown).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(dropdown).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    await user.click(pages)
    expect(screen.queryByRole('link', { name: 'About Me' })).not.toBeInTheDocument()
  })

  it('closes the Pages dropdown on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    const pages = within(nav).getByRole('button', { name: /Pages/ })

    await user.click(pages)
    expect(screen.getByRole('link', { name: 'About Me' })).toBeInTheDocument()
    // A non-Escape key leaves the dropdown open.
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('link', { name: 'About Me' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('link', { name: 'About Me' })).not.toBeInTheDocument()
  })

  it('opens and dismisses the search input', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByPlaceholderText(searchPlaceholder)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: openSearchLabel }))
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(screen.queryByPlaceholderText(searchPlaceholder)).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: menuOpenLabel })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: `${navLabel} (mobile)` })
    expect(within(mobile).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'Recipes' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(
      screen.queryByRole('navigation', { name: `${navLabel} (mobile)` }),
    ).not.toBeInTheDocument()
  })
})
