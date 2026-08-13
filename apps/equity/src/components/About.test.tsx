import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the video figure with a play button and the welcome copy', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'Welcome to Equity' })).toBeInTheDocument()
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/).length).toBeGreaterThanOrEqual(3)

    const play = screen.getByRole('link', { name: 'Watch our video' })
    expect(play).toHaveAttribute('href', 'https://www.youtube.com/watch?v=wbnaHgSttVo')
  })

  it('shows four stat counters with purple numbers and captions', () => {
    render(<About />)

    const counters = screen.getByText('Year of Experience').closest('div')!.parentElement!
    expect(within(counters).getByText('25')).toBeInTheDocument()
    expect(within(counters).getByText('160')).toBeInTheDocument()
    expect(within(counters).getByText('320')).toBeInTheDocument()
    expect(within(counters).getByText('12')).toBeInTheDocument()

    for (const label of [
      'Year of Experience',
      'Number of Engineers',
      'Number of Employees',
      'Number of Golds',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
