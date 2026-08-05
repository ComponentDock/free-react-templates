import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section heading and three news article cards', () => {
    render(<News />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Benjamin Franklin Method Of Habit Formation',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Designing For Mobile-First Audiences' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'The Art Of Reliable Software Releases' }),
    ).toBeInTheDocument()

    expect(screen.getByText('10 April, 2018')).toBeInTheDocument()
    expect(
      screen.getByText(/Science is driven by evidence gathered in experiments/),
    ).toBeInTheDocument()
  })
})
