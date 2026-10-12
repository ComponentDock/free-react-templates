import { render, screen, within } from '@testing-library/react'
import { NAV, isParent } from '../lib/site'
import { NavRow } from './NavRow'

describe('NavRow', () => {
  it('renders the six items right-aligned in one row, in the reference order', () => {
    render(<NavRow />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const row = nav.querySelector('ul') as HTMLUListElement
    const labels = Array.from(row.children).map((item) =>
      item.querySelector('a, button')?.textContent?.trim(),
    )

    expect(nav).toHaveClass('relative', 'text-right')
    expect(labels).toEqual(['Home', 'Explore', 'Showcase', 'About', 'Blog', 'Contact'])
    expect(row.children).toHaveLength(6)
  })

  it('makes each label a pill, filled only on the current item', () => {
    render(<NavRow />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const row = nav.querySelector('ul') as HTMLUListElement
    const labels = Array.from(row.querySelectorAll('a > span')) as HTMLElement[]

    expect(labels).toHaveLength(5)

    for (const label of labels) {
      expect(label.className.split(' ')).toEqual(
        expect.arrayContaining(['inline-block', 'rounded-[30px]', 'px-5', 'py-[5px]']),
      )
    }

    const home = labels[0] as HTMLElement
    expect(home.className.split(' ')).toEqual(expect.arrayContaining(['bg-accent', 'text-white']))
    expect(home.textContent).toBe('Home')

    for (const label of labels.slice(1)) {
      expect(label.className.split(' ')).not.toContain('bg-accent')
    }

    const homeLink = row.querySelector('a')
    expect(homeLink).toHaveAttribute('href', '#top')
    expect(homeLink).toHaveAttribute('aria-current', 'page')
  })

  it('gives every leaf a dead-in-app anchor and no second-level markup of its own', () => {
    render(<NavRow />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const links = within(nav).getAllByRole('link')

    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Home',
      'Showcase',
      'About',
      'Blog',
      'Contact',
    ])
    expect(nav.querySelectorAll(':scope > ul > li > a')).toHaveLength(5)
    expect(nav.querySelectorAll(':scope > ul > li > button')).toHaveLength(1)
    expect(nav.querySelectorAll('[aria-haspopup="true"]')).toHaveLength(2)
  })

  it('keeps the source model: only one top-level item carries a submenu', () => {
    const parents = NAV.filter(isParent)

    expect(parents.map((node) => node.label)).toEqual(['Explore'])
  })
})
