import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import {
  EXPERIENCE_LABEL,
  EXPERIENCE_TITLE,
  EXPERIENCE_YEARS,
  INTRO_HEADING,
  INTRO_LEAD,
} from '../data'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the mission heading, lead and More About Us link', () => {
    render(<Intro />)
    const section = screen.getByRole('region', { name: 'About' })
    expect(
      within(section).getByRole('heading', { level: 2, name: INTRO_HEADING }),
    ).toBeInTheDocument()
    expect(within(section).getByText(INTRO_LEAD)).toBeInTheDocument()
    const link = within(section).getByRole('link', { name: /More About Us/ })
    expect(link).toHaveAttribute('href', '#services')
  })

  it('renders the green-bordered experience box with the years number', () => {
    const { container } = render(<Intro />)
    expect(screen.getByRole('heading', { level: 3, name: EXPERIENCE_TITLE })).toBeInTheDocument()
    expect(screen.getByText(EXPERIENCE_LABEL)).toBeInTheDocument()

    const number = screen.getByText(EXPERIENCE_YEARS)
    expect(number.className).toContain('text-5xl')

    const box = number.closest('div.border-4')
    expect(box?.className).toContain('border-brand')

    const decorative = container.querySelectorAll('span[aria-hidden="true"]')
    expect(decorative.length).toBeGreaterThanOrEqual(1)
  })
})
