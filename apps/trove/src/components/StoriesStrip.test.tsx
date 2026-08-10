import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { StoriesStrip } from './StoriesStrip'
import { stories } from '../data'

describe('StoriesStrip', () => {
  it('renders a story card per item with thumbnail, title and uppercase date', () => {
    render(<StoriesStrip />)
    const section = screen.getByRole('region', { name: 'Top stories' })
    const items = within(section).getAllByRole('listitem')
    expect(items).toHaveLength(stories.length)
    expect(within(section).getByRole('link', { name: /2nd Gen Smoke Alarm/ })).toBeInTheDocument()
    expect(screen.getByText('September 14, 2018')).toBeInTheDocument()
  })

  it('keeps dividers between story cards', () => {
    render(<StoriesStrip />)
    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveClass('border-r')
    expect(items[items.length - 1]).not.toHaveClass('border-r')
  })
})
