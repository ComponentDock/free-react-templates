import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsSection } from './NewsSection'

describe('NewsSection', () => {
  it('renders three white post cards with date, title, and excerpt', () => {
    const { container } = render(<NewsSection />)

    expect(screen.getByRole('heading', { level: 2, name: 'News & Events' })).toBeInTheDocument()

    expect(screen.getAllByText('Jan 20th, 2032')).toHaveLength(3)
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles).toHaveLength(3)
    expect(titles[0]).toHaveTextContent('Art Gossip by Mike Charles')

    expect(container.querySelectorAll('article')).toHaveLength(3)
    expect(screen.getAllByText(/takes us behind the scenes/i)).toHaveLength(1)
  })
})
