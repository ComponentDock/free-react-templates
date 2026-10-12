import { render, screen, within } from '@testing-library/react'
import { DesktopNav } from './DesktopNav'

describe('DesktopNav', () => {
  it('renders exactly six 15px links in the reference order, flat and unadorned', () => {
    render(<DesktopNav />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = within(nav).getAllByRole('link')

    expect(links.map((link) => link.textContent)).toEqual([
      'Home',
      'Portfolio',
      'About',
      'Services',
      'Blog',
      'Contact',
    ])

    for (const link of links) {
      expect(link).toHaveClass('text-[15px]', 'py-5', 'mx-[15px]')
      expect(link).toHaveAttribute('href', expect.stringMatching(/^#/))
    }

    expect(nav.querySelectorAll('ul ul')).toHaveLength(0)
    expect(nav.querySelectorAll('[aria-haspopup]')).toHaveLength(0)
    expect(within(nav).queryAllByRole('button')).toHaveLength(0)
    expect(within(nav).queryAllByRole('link', { name: /opens in a new tab/ })).toHaveLength(0)
  })

  it('marks the current item with aria-current and the scaled-up underline, and only that one', () => {
    render(<DesktopNav />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const [home, portfolio] = within(nav).getAllByRole('link')

    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home?.className.split(' ')).toContain('after:scale-x-100')
    expect(home).toHaveClass('text-white')

    expect(portfolio).not.toHaveAttribute('aria-current')
    expect(portfolio?.className.split(' ')).toContain('after:scale-x-0')
    expect(portfolio).toHaveClass('text-white/70')
  })
})
