import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, meta bar and author information', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /A Discount Toner Cartridge Is Better Than Ever/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('15 Likes')).toBeInTheDocument()
    expect(screen.getByText('02 Comments')).toBeInTheDocument()
    expect(screen.getByText('Mark wiens')).toBeInTheDocument()
    expect(screen.getByText('12 Dec, 2017 11:21 am')).toBeInTheDocument()
    expect(screen.getByAltText('Portrait of the author Mark wiens')).toBeInTheDocument()
  })
})
