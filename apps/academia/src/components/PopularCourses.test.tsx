import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('shows the title, subtitle and nine category tabs with All Courses active', () => {
    render(<PopularCourses />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Popular Courses/)

    for (const tab of [
      'All Courses',
      'Photoshop',
      'UI/UX',
      'Web Design',
      'Web dev',
      'Wordpress',
      'Adobe XD',
      'Sketch App',
      'Illustrator',
    ]) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }

    const allTab = screen.getByRole('button', { name: 'All Courses' })
    expect(allTab).toHaveAttribute('aria-current', 'true')
    expect(allTab.className).toMatch(/after:bg-brand/)
  })

  it('shows six course cards by default with image, category, title, rating and prices', () => {
    const { container } = render(<PopularCourses />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
    expect(container.querySelectorAll('img')).toHaveLength(6)

    const first = cards[0]!
    expect(within(first).getByText('Photoshop')).toBeInTheDocument()
    expect(within(first).getByText(/Mobile App design step by step/)).toBeInTheDocument()
    expect(within(first).getByText('4.5')).toBeInTheDocument()
    expect(within(first).getByText('$89.00').className).toMatch(/line-through/)
    expect(within(first).getByText('$49').className).toMatch(/text-brand/)
  })

  it('filters the grid when a category tab is clicked', async () => {
    const user = userEvent.setup()
    render(<PopularCourses />)

    await user.click(screen.getByRole('button', { name: 'Photoshop' }))
    expect(screen.getByRole('button', { name: 'Photoshop' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'All Courses' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
    const photoshopCards = screen.getAllByRole('article')
    expect(photoshopCards).toHaveLength(2)
    for (const card of photoshopCards) {
      expect(within(card).getByText('Photoshop')).toBeInTheDocument()
    }

    await user.click(screen.getByRole('button', { name: 'Web dev' }))
    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(
      within(screen.getAllByRole('article')[0]!).getByText(/Full-stack web development/),
    ).toBeInTheDocument()
  })

  it('shows the More Courses outline pill', () => {
    render(<PopularCourses />)
    const more = screen.getByRole('link', { name: 'More Courses' })
    expect(more).toHaveAttribute('href', '#courses')
    expect(more.className).toMatch(/border/)
    expect(more.className).toMatch(/text-brand/)
  })
})
