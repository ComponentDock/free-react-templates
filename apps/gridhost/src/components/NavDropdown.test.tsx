import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavDropdown } from './NavDropdown'
import type { NavLink } from '../lib/site'

const LINK: NavLink & { children: { label: string; href: string }[] } = {
  label: 'Blog',
  href: '#blog',
  children: [
    { label: 'Blog', href: '#blog' },
    { label: 'Blog details', href: '#blog-details' },
  ],
}

describe('NavDropdown', () => {
  it('opens its panel on hover and closes it when the pointer leaves', async () => {
    const user = userEvent.setup()
    render(<NavDropdown link={LINK} active={false} compact={false} onSelect={vi.fn()} />)

    const trigger = screen.getByRole('button', { name: 'Show the Blog links' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog details' })).toBeNull()

    const section = screen.getByRole('link', { name: 'Blog' })
    await user.hover(section)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog details' })).toBeInTheDocument()

    await user.unhover(section)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens from the chevron trigger and reports the picked item', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(<NavDropdown link={LINK} active compact onSelect={onSelect} />)

    const trigger = screen.getByRole('button', { name: 'Show the Blog links' })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    // Reached by keyboard: the panel sits outside the item's own box, so a
    // pointer path that jsdom reports as leaving the item would close it.
    const child = screen.getByRole('link', { name: 'Blog details' })
    child.focus()
    await user.keyboard('{Enter}')

    expect(onSelect).toHaveBeenCalledWith('Blog')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('marks the current page and lets the section link be followed', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(<NavDropdown link={LINK} active onSelect={onSelect} compact={false} />)

    const section = screen.getByRole('link', { name: 'Blog' })
    expect(section).toHaveAttribute('aria-current', 'page')
    expect(section).toHaveClass('px-[19px]', 'py-[39px]')

    await user.click(section)
    expect(onSelect).toHaveBeenCalledWith('Blog')
  })

  it('closes on Escape and keeps other keys untouched', async () => {
    const user = userEvent.setup()
    render(<NavDropdown link={LINK} active={false} compact onSelect={vi.fn()} />)

    const trigger = screen.getByRole('button', { name: 'Show the Blog links' })
    await user.click(trigger)

    trigger.focus()
    await user.keyboard('a')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()
  })
})
