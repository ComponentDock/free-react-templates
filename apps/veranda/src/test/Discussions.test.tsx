import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Discussions } from '../components/Discussions'
import { DISCUSSIONS } from '../data'

describe('Discussions', () => {
  it('renders five rows with votes, tags, answered marks and meta', () => {
    render(<Discussions />)

    expect(
      screen.getByRole('heading', { name: 'What the community is working through today' }),
    ).toBeInTheDocument()

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(DISCUSSIONS.length)

    expect(within(items[0]!).getByText('Ask the Room')).toBeInTheDocument()
    expect(within(items[0]!).getByText('Answered')).toBeInTheDocument()
    expect(within(items[1]!).queryByText('Answered')).not.toBeInTheDocument()

    expect(screen.getAllByText('Answered')).toHaveLength(3)
    expect(screen.getByRole('link', { name: /How do you price a redesign/ })).toHaveAttribute(
      'href',
      '#discussions',
    )
    expect(screen.getByText('Nadia Ferreira')).toBeInTheDocument()
    expect(screen.getByText('34 replies')).toBeInTheDocument()
    expect(screen.getByText('2 days ago')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See all discussions' })).toHaveAttribute(
      'href',
      '#pricing',
    )
  })
})
