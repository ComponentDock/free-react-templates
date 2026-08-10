import { afterEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  brandName,
  categoryLinks,
  menuOpenLabel,
  navLinks,
  searchLabel,
  siteSearchPlaceholder,
  socials,
} from '../data'

describe('Navbar', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('renders the centered brand, search input, social icons and links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    expect(screen.getByLabelText(searchLabel)).toHaveAttribute('type', 'search')
    expect(screen.getByPlaceholderText(siteSearchPlaceholder)).toBeInTheDocument()
    for (const link of navLinks) {
      // "Categories" is a dropdown trigger button, the rest are links
      if (link === 'Categories') {
        expect(screen.getByRole('button', { name: link })).toBeInTheDocument()
      } else {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('marks Home as the current page', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the categories dropdown with category links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /categories/i })
    await user.click(trigger)
    for (const category of categoryLinks) {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('link', { name: categoryLinks[0] }))
    expect(screen.queryByRole('link', { name: categoryLinks[1] })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu with links and categories', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(mobile).getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const category of categoryLinks) {
      expect(within(mobile).getByRole('link', { name: category })).toBeInTheDocument()
    }

    await user.click(within(mobile).getByRole('link', { name: 'About' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a category link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobile).getByRole('link', { name: 'Travel' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('turns the navbar solid black when the page is scrolled', () => {
    const { rerender } = render(<Navbar />)
    const header = screen.getByRole('banner')

    expect(header).toHaveClass('bg-white')
    expect(header).not.toHaveClass('bg-black')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    rerender(<Navbar />)
    expect(header).toHaveClass('bg-black')
    expect(header).not.toHaveClass('bg-white')
  })
})
