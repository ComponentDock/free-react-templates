import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { blogMenu, headerCta, navLinks } from '../data'

describe('Header', () => {
  it('floats transparently over the hero with the wordmark and six nav items', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toHaveClass('absolute')
    expect(screen.getByRole('link', { name: 'Barstone' })).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = within(nav).getAllByRole('link', { name: /Home|About|Service|Attorneys|Blog|Contact/ })
    expect(links).toHaveLength(navLinks.length)
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('keeps every nav href an in-page anchor and offers the pill', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main' })

    for (const link of within(nav).getAllByRole('link')) {
      expect(link.getAttribute('href')).not.toBe('#')
    }

    const pill = within(nav).getByRole('link', { name: headerCta.label })
    expect(pill).toHaveAttribute('href', '#contact')
    expect(pill.className).toContain('rounded-[50px]')
  })

  it('opens the Blog dropdown on hover and closes it when the pointer leaves', () => {
    render(<Header />)
    const item = screen.getByRole('link', { name: /^Blog$/ }).closest('li') as HTMLElement

    expect(screen.queryByRole('list', { name: 'Blog' })).not.toBeInTheDocument()

    fireEvent.mouseEnter(item)
    const panel = screen.getByRole('list', { name: 'Blog' })
    expect(within(panel).getAllByRole('link')).toHaveLength(blogMenu.length)

    fireEvent.mouseLeave(item)
    expect(screen.queryByRole('list', { name: 'Blog' })).not.toBeInTheDocument()
  })

  it('opens the dropdown on keyboard focus and holds it while focus stays inside', () => {
    render(<Header />)
    const item = screen.getByRole('link', { name: /^Blog$/ }).closest('li') as HTMLElement

    fireEvent.focus(item)
    const panel = screen.getByRole('list', { name: 'Blog' })
    const firstChild = within(panel).getAllByRole('link')[0] as HTMLElement

    fireEvent.blur(item, { relatedTarget: firstChild })
    expect(screen.getByRole('list', { name: 'Blog' })).toBeInTheDocument()

    fireEvent.blur(item, { relatedTarget: null })
    expect(screen.queryByRole('list', { name: 'Blog' })).not.toBeInTheDocument()
  })

  it('collapses the six items into a drawer behind a 33px toggle on mobile', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle.className).toContain('size-[33px]')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const drawer = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(drawer).getAllByRole('link')).toHaveLength(navLinks.length + blogMenu.length)

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the drawer when a link inside it is chosen', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }))

    const drawer = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(drawer).getByRole('link', { name: 'About' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the drawer when a nested blog item is chosen', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }))

    const drawer = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(drawer).getByRole('link', { name: 'Elements' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
