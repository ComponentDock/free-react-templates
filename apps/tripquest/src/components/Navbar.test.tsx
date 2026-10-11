import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

/* In-page anchors: jsdom follows the hash on a native click, which races the
   React handler — neutralise the default action before clicking. */
function neutraliseAnchor(element: HTMLElement) {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

function setScroll(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
  fireEvent.scroll(window)
}

const NAV_LABELS = ['Home', 'About', 'Packages', 'Hotels', 'Insurance', 'Blog', 'Pages', 'Contact']

describe('Navbar', () => {
  it('renders the utility bar, round logo mark and uppercase menu links over the hero', () => {
    render(<Navbar />)

    const header = document.getElementById('header')
    expect(header).not.toBeNull()
    expect(header).toHaveAttribute('data-variant', 'top')
    expect(header?.className).toContain('fixed')

    expect(screen.getByTestId('utility-bar')).toBeInTheDocument()
    expect(screen.getByText('Visit Us')).toBeInTheDocument()
    expect(screen.getByText('Buy Tickets')).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }

    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of NAV_LABELS) {
      expect(within(nav).getByText(label)).toBeInTheDocument()
    }
  })

  it('hides the utility bar and paints charcoal once the page scrolls past the hero', () => {
    render(<Navbar />)

    setScroll(120)
    expect(screen.queryByTestId('utility-bar')).toBeNull()
    const header = document.getElementById('header')
    expect(header).toHaveAttribute('data-variant', 'scrolled')
    expect(header?.className).toContain('header-scrolled')

    setScroll(0)
    expect(screen.getByTestId('utility-bar')).toBeInTheDocument()
    expect(document.getElementById('header')).toHaveAttribute('data-variant', 'top')
  })

  it('opens the Blog and Pages dropdowns by click and hover, including nested items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blog = screen.getByRole('button', { name: 'Blog' })
    expect(blog).toHaveAttribute('aria-expanded', 'false')

    const blogItem = blog.closest('li')
    expect(blogItem).not.toBeNull()

    fireEvent.mouseEnter(blogItem as HTMLLIElement)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Single' })).toBeInTheDocument()

    fireEvent.mouseLeave(blogItem as HTMLLIElement)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Home' })).toBeNull()

    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Home' })).toBeInTheDocument()

    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')

    const pagesItem = screen.getByRole('button', { name: 'Pages' }).closest('li')
    expect(pagesItem).not.toBeNull()
    fireEvent.mouseEnter(pagesItem as HTMLLIElement)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Level 2' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Item One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Item Two' })).toBeInTheDocument()
    fireEvent.mouseLeave(pagesItem as HTMLLIElement)
    expect(screen.queryByRole('link', { name: 'Item One' })).toBeNull()

    const homeItem = screen.getByRole('link', { name: 'Home' }).closest('li')
    expect(homeItem).not.toBeNull()
    fireEvent.mouseEnter(homeItem as HTMLLIElement)
    fireEvent.mouseLeave(homeItem as HTMLLIElement)
    expect(screen.queryByRole('link', { name: 'Blog Home' })).toBeNull()
  })

  it('toggles the mobile panel and closes it from any link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    for (const label of [...NAV_LABELS, 'Blog Home', 'Level 2', 'Item One']) {
      expect(within(mobile).getByText(label)).toBeInTheDocument()
    }

    const leaf = within(mobile).getByText('Item One')
    neutraliseAnchor(leaf)
    await user.click(leaf)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const child = within(screen.getByRole('navigation', { name: 'Mobile' })).getByText(
      'Blog Single',
    )
    neutraliseAnchor(child)
    await user.click(child)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const topLevel = within(screen.getByRole('navigation', { name: 'Mobile' })).getByText(
      'Packages',
    )
    neutraliseAnchor(topLevel)
    await user.click(topLevel)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()
  })
})
