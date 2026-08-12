import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the centered heading with a short subtext', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest From Our Blog' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders four cards with image, date badge, title link, excerpt, and meta', () => {
    const { container } = render(<Blog />)

    const section = screen.getByRole('region', { name: 'Blog' })
    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(4)

    expect(container.querySelectorAll('img')).toHaveLength(4)

    const first = cards[0] as HTMLElement
    expect(within(first).getByText('10 Jan 2018')).toHaveClass('bg-black', 'text-white')
    const titleLink = within(first).getByRole('link', {
      name: 'Addiction When Gambling Becomes A Problem',
    })
    expect(titleLink).toHaveAttribute('href', '#blog')
    expect(within(first).getByText(/warning signs early/i)).toBeInTheDocument()
    expect(within(first).getByText('15 Likes')).toBeInTheDocument()
    expect(within(first).getByText('02 Comments')).toBeInTheDocument()
    expect(first.querySelectorAll('svg')).toHaveLength(2)
  })
})
