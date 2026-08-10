import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import {
  brandName,
  brandTagline,
  categoryMenu,
  megamenu,
  navSearchPlaceholder,
  newsletterModalCloseLabel,
  newsletterModalTitle,
  pagesMenu,
} from '../data'
import { Navbar } from './Navbar'

/** Items unique to the Pages dropdown (Home/About Us/Contact also exist as
 *  plain nav links, so those render twice while the dropdown is open). */
const pagesUnique = pagesMenu.filter((item) => !['Home', 'About Us', 'Contact'].includes(item))

describe('Navbar', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the wordmark, tagline, nav links, subscribe button and search', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: new RegExp(brandName) })).toBeInTheDocument()
    expect(screen.getByText(brandTagline)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('button', { name: 'Pages' })).toBeInTheDocument()
    expect(within(nav).getByRole('button', { name: 'Catagory' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(within(nav).getByRole('button', { name: 'Megamenu' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Pages' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    for (const item of pagesUnique) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Single Post' })).not.toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('opens the Catagory dropdown with a two-level nested menu', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Catagory' }))

    const firstGroup = categoryMenu[0]!
    const secondGroup = categoryMenu[1]!
    expect(screen.getByRole('button', { name: firstGroup.label })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: firstGroup.items[0]! })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: firstGroup.label }))
    for (const item of firstGroup.items) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }

    fireEvent.click(screen.getByRole('button', { name: firstGroup.label }))
    expect(screen.queryByRole('link', { name: firstGroup.items[0]! })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: secondGroup.label }))
    expect(screen.getByRole('link', { name: secondGroup.items[0]! })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Catagory' }))
    expect(screen.queryByRole('link', { name: firstGroup.items[0]! })).not.toBeInTheDocument()
  })

  it('opens the Megamenu with four columns of five items', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Megamenu' }))

    for (const column of megamenu) {
      expect(screen.getByText(column.headline)).toBeInTheDocument()
      for (const item of column.items) {
        expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
      }
    }

    fireEvent.click(screen.getByRole('button', { name: 'Megamenu' }))
    expect(screen.queryByRole('link', { name: megamenu[0]!.items[0]! })).not.toBeInTheDocument()
  })

  it('expands and collapses the search input', () => {
    render(<Navbar />)

    expect(screen.queryByPlaceholderText(navSearchPlaceholder)).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByPlaceholderText(navSearchPlaceholder)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByPlaceholderText(navSearchPlaceholder)).not.toBeInTheDocument()
  })

  it('sticks the nav bar with a white background on scroll and restores it', () => {
    const scrollSpy = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(150)
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav.className).toContain('bg-nearblack')

    fireEvent.scroll(window)
    expect(nav.className).toContain('bg-white')
    expect(nav.className).toContain('shadow')

    // The sticky search close button renders with the light link color.
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    const closeSearch = screen.getByRole('button', { name: 'Close search' })
    expect(closeSearch.className).toContain('text-body')
    fireEvent.click(closeSearch)

    scrollSpy.mockReturnValue(0)
    fireEvent.scroll(window)
    expect(nav.className).toContain('bg-nearblack')
    expect(nav.className).not.toContain('bg-white')
  })

  it('opens the mobile menu, exercises every close path and restores', () => {
    render(<Navbar />)

    const openMenu = () => fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = () =>
      within(screen.getByRole('dialog', { name: 'Menu' })).getByRole('navigation', {
        name: 'Mobile',
      })

    // Open → close via the in-panel close button.
    openMenu()
    fireEvent.click(
      within(screen.getByRole('dialog', { name: 'Menu' })).getByRole('button', {
        name: 'Close menu',
      }),
    )
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()

    // Open → close via the backdrop.
    openMenu()
    expect(within(mobileNav()).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav()).getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    const backdrop = document.querySelector('div[aria-hidden="true"]')
    expect(backdrop).not.toBeNull()
    fireEvent.click(backdrop!)
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()

    // Pages accordion: open, toggle closed, reopen, close via a link.
    openMenu()
    const pagesToggle = within(mobileNav()).getByRole('button', { name: 'Pages' })
    fireEvent.click(pagesToggle)
    for (const item of pagesUnique) {
      expect(within(mobileNav()).getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(within(mobileNav()).getAllByRole('link', { name: 'Home' })).toHaveLength(2)
    fireEvent.click(pagesToggle)
    expect(within(mobileNav()).queryByRole('link', { name: 'Single Post' })).not.toBeInTheDocument()
    fireEvent.click(pagesToggle)
    fireEvent.click(within(mobileNav()).getByRole('link', { name: 'Single Post' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()

    // Catagory accordion with nested groups, close via a nested link.
    openMenu()
    fireEvent.click(within(mobileNav()).getByRole('button', { name: 'Catagory' }))
    const firstGroup = categoryMenu[0]!
    fireEvent.click(within(mobileNav()).getByRole('button', { name: firstGroup.label }))
    expect(
      within(mobileNav()).getByRole('link', { name: firstGroup.items[0]! }),
    ).toBeInTheDocument()
    fireEvent.click(within(mobileNav()).getByRole('button', { name: firstGroup.label }))
    expect(
      within(mobileNav()).queryByRole('link', { name: firstGroup.items[0]! }),
    ).not.toBeInTheDocument()
    fireEvent.click(within(mobileNav()).getByRole('button', { name: firstGroup.label }))
    fireEvent.click(within(mobileNav()).getByRole('link', { name: firstGroup.items[0]! }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()

    // Megamenu accordion, close via a column item.
    openMenu()
    fireEvent.click(within(mobileNav()).getByRole('button', { name: 'Megamenu' }))
    expect(within(mobileNav()).getByText(megamenu[0]!.headline)).toBeInTheDocument()
    fireEvent.click(within(mobileNav()).getByRole('link', { name: megamenu[0]!.items[0]! }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()

    // Close via the About Us, Contact and Home links.
    openMenu()
    fireEvent.click(within(mobileNav()).getByRole('link', { name: 'About Us' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
    openMenu()
    fireEvent.click(within(mobileNav()).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
    openMenu()
    fireEvent.click(within(mobileNav()).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('opens the newsletter modal from the Subscribe button and closes it', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    const modal = screen.getByRole('dialog', { name: newsletterModalTitle })
    expect(within(modal).getByRole('heading', { name: newsletterModalTitle })).toBeInTheDocument()
    expect(within(modal).getByLabelText('Email address')).toBeInTheDocument()

    fireEvent.click(within(modal).getByRole('button', { name: newsletterModalCloseLabel }))
    expect(screen.queryByRole('dialog', { name: newsletterModalTitle })).not.toBeInTheDocument()
  })

  it('closes the newsletter modal when the backdrop is clicked', () => {
    const { container } = render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('dialog', { name: newsletterModalTitle })).toBeInTheDocument()

    const backdrop = container.querySelector('div[aria-hidden="true"]')
    expect(backdrop).not.toBeNull()
    fireEvent.click(backdrop!)
    expect(screen.queryByRole('dialog', { name: newsletterModalTitle })).not.toBeInTheDocument()
  })
})
