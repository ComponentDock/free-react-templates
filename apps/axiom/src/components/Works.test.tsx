import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Works } from './Works'

describe('Works', () => {
  it('renders the Projects / Our Works title block', () => {
    render(<Works />)

    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Works' })).toBeInTheDocument()
  })

  it('renders four work cards with images, yellow heading bars, and hover overlays', () => {
    const { container } = render(<Works />)

    const section = screen.getByRole('region', { name: 'Works' })
    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(4)

    expect(container.querySelectorAll('img')).toHaveLength(4)
    expect(within(cards[0]!).getByRole('heading', { level: 3, name: 'Social App' })).toHaveClass(
      'before:bg-yellow',
    )

    const overlay = cards[0]!.querySelector('.bg-accent\\/20') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay).toHaveClass('group-hover:opacity-100')
    expect(
      within(cards[0]!).getByRole('link', { name: 'View details of Social App' }),
    ).toHaveAttribute('href', '#work')
  })

  it('offsets the second row with an 80px top gap', () => {
    render(<Works />)

    const section = screen.getByRole('region', { name: 'Works' })
    const columns = section.querySelectorAll('.space-y-10')
    expect(columns[1]).toHaveClass('lg:ml-[16.66%]', 'lg:pt-20')
  })

  it('renders the More Products outline button', () => {
    render(<Works />)

    const more = screen.getByRole('link', { name: 'More Products' })
    expect(more).toHaveClass('border-accent', 'rounded-[30px]', 'hover:bg-accent')
  })
})
