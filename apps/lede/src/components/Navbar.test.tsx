import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { menuCloseLabel, menuOpenLabel, navLinks, postTypeLinks, searchPlaceholder } from '../data'

describe('Navbar', () => {
  it('shows the navigation links and a search control', () => {
    render(<Navbar />)

    for (const link of navLinks.filter((item) => item !== 'Post Types')) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByLabelText(searchPlaceholder)).toBeInTheDocument()
  })

  it('opens the Post Types dropdown and lists the post type entries', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Post Types' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    for (const item of postTypeLinks) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('opens the mobile menu from the toggler and closes it again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: menuOpenLabel })
    await user.click(trigger)
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.getByRole('button', { name: menuOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a mobile link is selected', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('region', { name: 'Mobile menu' })

    await user.click(within(mobile).getByRole('link', { name: 'Archive' }))
    expect(screen.queryByRole('region', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })

  it('opens the Post Types dropdown inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('region', { name: 'Mobile menu' })

    const toggle = within(mobile).getByRole('button', { name: 'Post Types' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    for (const item of postTypeLinks) {
      expect(within(mobile).getByRole('link', { name: item })).toBeInTheDocument()
    }

    await user.click(within(mobile).getByRole('link', { name: 'Gallery Post' }))
    expect(screen.queryByRole('region', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })
})
