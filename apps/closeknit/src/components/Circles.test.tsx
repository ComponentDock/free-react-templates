import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Circles } from './Circles'
import { CIRCLES } from '../content'

describe('Circles', () => {
  it('renders six cards with access pills, member counts and activity', () => {
    render(<Circles />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(6)

    CIRCLES.forEach((circle, index) => {
      const item = items[index] as HTMLElement
      expect(within(item).getByRole('heading', { level: 3 })).toHaveTextContent(circle.name)
      expect(within(item).getByText(circle.access)).toBeInTheDocument()
      expect(within(item).getByText(`${circle.members} members`)).toBeInTheDocument()
      expect(within(item).getByText(circle.activity)).toBeInTheDocument()
    })

    expect(screen.getAllByText('Private')).toHaveLength(4)
    expect(screen.getAllByText('Invite only')).toHaveLength(2)
    expect(screen.getByText('17 members')).toBeInTheDocument()
  })

  it('makes each card one link target that resolves to the band', () => {
    render(<Circles />)

    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('href', '#circles')
    }
    expect(screen.getAllByRole('link')).toHaveLength(6)
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })
})
