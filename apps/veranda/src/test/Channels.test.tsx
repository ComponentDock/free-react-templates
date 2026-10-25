import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Channels } from '../components/Channels'
import { CHANNELS } from '../data'

describe('Channels', () => {
  it('lists the six rooms in the reference order with their two numbers', () => {
    render(<Channels />)

    expect(
      screen.getByRole('heading', { name: 'Find the room where your problem is normal' }),
    ).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.map((heading) => heading.textContent)).toEqual(
      CHANNELS.map((channel) => channel.name),
    )

    expect(screen.getByText('4,120')).toBeInTheDocument()
    expect(screen.getAllByText('members')).toHaveLength(CHANNELS.length)
    expect(screen.getAllByText('posts/wk')).toHaveLength(CHANNELS.length)
    expect(screen.getByRole('link', { name: 'Design Critique' })).toHaveAttribute(
      'href',
      '#discussions',
    )
  })
})
