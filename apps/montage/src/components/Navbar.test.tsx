import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchPlaceholder,
} from '../data'

describe('Navbar', () => {
  it('renders the top-level links with Home active and a search field', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      expect(within(nav).getByText(item.label)).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('searchbox', { name: searchPlaceholder })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    const pages = within(nav).getByRole('button', { name: 'Pages' })
    await user.click(pages)
    expect(within(nav).getByRole('link', { name: 'Catagory' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Video Post' })).toBeInTheDocument()
    await user.click(pages)
    expect(within(nav).queryByRole('link', { name: 'Catagory' })).not.toBeInTheDocument()
  })

  it('submits the search form and clears the query', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    const input = within(nav).getByRole('searchbox', { name: searchPlaceholder })
    await user.type(input, 'cats')
    expect(input).toHaveValue('cats')
    await user.click(within(nav).getByRole('button', { name: 'Submit search' }))
    expect(input).toHaveValue('')
  })

  it('toggles the mobile menu panel', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    await user.click(toggle)
    const mobile = screen.getByRole('navigation', { name: mobileNavLabel })
    expect(within(mobile).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('opens the Pages submenu inside the mobile panel', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: mobileNavLabel })
    await user.click(within(mobile).getByRole('button', { name: 'Pages' }))
    expect(within(mobile).getByRole('link', { name: 'Single Post' })).toBeInTheDocument()
  })

  it('closes the mobile panel when a top-level link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: mobileNavLabel })
    const music = within(mobile).getByRole('link', { name: 'Music' })
    music.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(music)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
