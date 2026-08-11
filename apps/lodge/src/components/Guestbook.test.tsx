import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Guestbook } from './Guestbook'
import {
  guestbookSectionLabel,
  guestbookTitle,
  ratingLabel,
  tablistLabel,
  testimonials,
} from '../data'

describe('Guestbook', () => {
  it('renders the title, author tabs, and the first testimonial by default', () => {
    const { container } = render(<Guestbook />)
    expect(screen.getByRole('region', { name: guestbookSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(guestbookTitle)

    const tablist = screen.getByRole('tablist', { name: tablistLabel })
    expect(tablist).toBeInTheDocument()
    for (const item of testimonials) {
      // The author name is the tab's accessible name via the photo alt.
      expect(screen.getByRole('tab', { name: item.author })).toBeInTheDocument()
    }

    const first = testimonials[0]!
    expect(screen.getByRole('tab', { name: first.author })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(first.date)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: first.title })).toBeInTheDocument()
    expect(screen.getByText(first.text)).toBeInTheDocument()

    const rating = container.querySelector(`[aria-label="${ratingLabel}"]`)!
    expect(rating.querySelectorAll('svg')).toHaveLength(5)
  })

  it('switches the visible testimonial when another author tab is activated', () => {
    render(<Guestbook />)
    const second = testimonials[1]!
    const third = testimonials[2]!

    fireEvent.click(screen.getByRole('tab', { name: second.author }))
    expect(screen.getByRole('tab', { name: second.author })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('heading', { name: second.title })).toBeInTheDocument()
    expect(screen.getByText(second.text)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('tab', { name: third.author }))
    expect(screen.getByRole('tab', { name: third.author })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('heading', { name: third.title })).toBeInTheDocument()
    expect(screen.getByText(third.text)).toBeInTheDocument()
  })
})
