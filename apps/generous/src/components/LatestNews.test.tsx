import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('shows the heading and three post cards with dates and titles', () => {
    const { container } = render(<LatestNews />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getAllByText('July 26, 2018')).toHaveLength(3)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Be A Volunteer Today' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'You May Save The Life of A Child' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Children That Needs Care' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })

  it('shows a Read More link on each card and sits on the light background', () => {
    const { container } = render(<LatestNews />)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
    expect(container.querySelector('section')).toHaveClass('bg-light')
  })
})
