import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

const TITLES = [
  'Instant Activation',
  'Fully Redundant',
  'Powerful Automation',
  'High Performance',
  'Dedicated Support',
  'Managed Protection',
]

describe('Features', () => {
  it('renders the centred title and blurb on the light band', () => {
    render(<Features />)
    expect(screen.getByRole('region', { name: 'Platform features' })).toHaveClass('lg:pt-[160px]')
    expect(screen.getByRole('heading', { level: 2, name: 'Cloud load balancing' })).toBeVisible()
    expect(screen.getByText(/Traffic is spread across every region we run/)).toBeInTheDocument()
  })

  it('renders six distinct items in a three-column grid', () => {
    render(<Features />)
    const list = screen
      .getByRole('heading', { level: 2 })
      .closest('div')!
      .parentElement!.querySelector('ul') as HTMLElement
    expect(list).toHaveClass('md:grid-cols-2', 'lg:grid-cols-3')

    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(6)

    const headings = screen.getAllByRole('heading', { level: 3 }).map((node) => node.textContent)
    expect(headings).toEqual(TITLES)
    expect(new Set(headings).size).toBe(6)
  })

  it('gives every item an icon and a caption body', () => {
    render(<Features />)
    for (const title of TITLES) {
      const heading = screen.getByRole('heading', { level: 3, name: title })
      expect(heading).toHaveClass('text-[25px]', 'text-ink')
      const item = heading.closest('li')!
      expect(item.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
      expect(within(item as HTMLElement).getByText(/./, { selector: 'p' }).textContent).toBeTruthy()
    }
  })
})
