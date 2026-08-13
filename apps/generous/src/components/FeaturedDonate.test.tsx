import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedDonate } from './FeaturedDonate'

describe('FeaturedDonate', () => {
  it('shows the meta, title, copy and last-donation line', () => {
    render(<FeaturedDonate />)
    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'School in Africa Need Renovations' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('Last donation 1w ago')).toBeInTheDocument()
  })

  it('shows a yellow progress fill and the raised caption', () => {
    const { container } = render(<FeaturedDonate />)
    const fill = container.querySelector('.bg-warning')
    expect(fill).toHaveStyle({ width: '27%' })
    expect(screen.getByText('$8,100 raised of $30,000')).toBeInTheDocument()
  })

  it('shows a large Donate Now button and a photo under the green overlay', () => {
    const { container } = render(<FeaturedDonate />)
    const donate = screen.getByRole('link', { name: 'Donate Now' })
    expect(donate).toHaveAttribute('href', '#donate')
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(container.querySelector('.bg-success\\/90')).toBeInTheDocument()
  })
})
