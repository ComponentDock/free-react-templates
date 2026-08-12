import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('shows the section title and three course slides with price badge and meta', () => {
    render(<PopularCourses />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Popular Courses/)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(
      cards.map((card) => within(card).getByRole('heading', { level: 3 }).textContent),
    ).toEqual(['Custom Product Design', 'Social Media Network', 'Visual Arts & Design'])

    const first = cards[0]!
    expect(within(first).getByText('$25')).toHaveClass('rounded-full', 'bg-accent', 'text-primary')
    expect(within(first).getByText('design')).toBeInTheDocument()
    expect(within(first).getByText('Cameron')).toBeInTheDocument()
    expect(within(first).getByText('25')).toBeInTheDocument()
    expect(within(first).getByText('35')).toBeInTheDocument()
    expect(first.querySelector('svg.lucide-users')).toBeInTheDocument()
    expect(first.querySelector('svg.lucide-heart')).toBeInTheDocument()
    expect(first.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('quad-course'),
    )
  })

  it('rotates the slides forward with the next control', async () => {
    const user = userEvent.setup()
    render(<PopularCourses />)

    await user.click(screen.getByRole('button', { name: 'Next courses' }))

    const headings = screen
      .getAllByRole('article')
      .map((card) => within(card).getByRole('heading', { level: 3 }).textContent)
    expect(headings[0]).toBe('Social Media Network')
  })

  it('wraps back to the last slide with the previous control', async () => {
    const user = userEvent.setup()
    render(<PopularCourses />)

    await user.click(screen.getByRole('button', { name: 'Previous courses' }))

    const headings = screen
      .getAllByRole('article')
      .map((card) => within(card).getByRole('heading', { level: 3 }).textContent)
    expect(headings[0]).toBe('Visual Arts & Design')
  })
})
