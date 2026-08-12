import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { PHONE } from '../data'

describe('Navbar', () => {
  it('renders brand, nav links, dropdowns, and the phone CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Swole home/i })).toBeInTheDocument()

    // Desktop nav is `hidden lg:block` — jsdom does not match the lg: media
    // query, so the links sit in a display:none list and need { hidden: true }.
    expect(screen.getByRole('link', { name: 'Home', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Courses', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact', hidden: true })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Pages/i })).toBeInTheDocument()

    const phone = screen.getByRole('link', { name: (n) => n.includes('1234 654 953') })
    expect(phone).toHaveAttribute('href', 'tel:' + PHONE.replace(/[^\d+]/g, ''))
  })

  it('opens and closes the Blog and Pages dropdowns', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blogButton = screen.getByRole('button', { name: /Blog/i })
    await user.click(blogButton)
    expect(screen.getByRole('link', { name: 'Single Blog', hidden: true })).toBeInTheDocument()

    const pagesButton = screen.getByRole('button', { name: /Pages/i })
    await user.click(pagesButton)
    expect(screen.getByRole('link', { name: 'Gallery', hidden: true })).toBeInTheDocument()
    // Opening Pages closes Blog.
    expect(
      screen.queryByRole('link', { name: 'Single Blog', hidden: true }),
    ).not.toBeInTheDocument()
  })

  it('becomes fixed with a red background after scrolling', () => {
    render(<Navbar />)

    const header = document.querySelector('header')
    expect(header?.className).toContain('absolute')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
    fireEvent.scroll(window)

    expect(header?.className).toContain('fixed')
    expect(header?.className).toContain('bg-brand')
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    // Desktop nav link is always present; the mobile menu adds a second copy.
    expect(screen.getAllByRole('link', { name: 'Courses' })).toHaveLength(1)
    expect(screen.queryByRole('link', { name: 'Home' })).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'Courses' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    // Mobile dropdowns open and close within the menu.
    await user.click(screen.getAllByRole('button', { name: /Blog/i })[1]!)
    expect(screen.getAllByRole('link', { name: 'Single Blog' })).toHaveLength(2)
    await user.click(screen.getAllByRole('button', { name: /Pages/i })[1]!)
    expect(screen.getAllByRole('link', { name: 'Gallery' })).toHaveLength(2)

    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'Courses' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link or the phone CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)

    // In-page anchor: neutralize jsdom hash navigation so the React onClick
    // still fires (native listeners run before React's delegated handler).
    const about = screen.getAllByRole('link', { name: 'About' })[1]!
    about.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(about)
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)

    // Open Blog dropdown and click an item — also closes the menu.
    await user.click(toggle)
    await user.click(screen.getAllByRole('button', { name: /Blog/i })[1]!)
    const singleBlog = screen.getAllByRole('link', { name: 'Single Blog' })[1]!
    singleBlog.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(singleBlog)
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)

    // Open Pages dropdown and click an item — also closes the menu.
    await user.click(toggle)
    await user.click(screen.getAllByRole('button', { name: /Pages/i })[1]!)
    const elements = screen.getAllByRole('link', { name: 'Elements' })[1]!
    elements.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(elements)
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)

    // Mobile phone CTA closes the menu too. (Desktop CTA is also in the
    // a11y tree in jsdom — the mobile copy is last.)
    await user.click(toggle)
    const phones = screen.getAllByRole('link', { name: (n) => n.includes('1234 654 953') })
    const phone = phones[phones.length - 1]!
    expect(phone).toBeInTheDocument()
    phone.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(phone)
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)
  })
})
