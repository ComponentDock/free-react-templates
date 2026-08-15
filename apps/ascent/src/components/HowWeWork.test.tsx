import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { HowWeWork } from './HowWeWork'

describe('HowWeWork', () => {
  it('renders the heading, copy and a Watch Video control', () => {
    render(<HowWeWork />)

    const section = screen.getByRole('region', { name: 'How we work' })
    expect(
      within(section).getByRole('heading', { level: 2, name: 'How we work' }),
    ).toBeInTheDocument()
    expect(
      within(section).getByText(/Function information without cross action/),
    ).toBeInTheDocument()

    const playLink = within(section).getByRole('link', { name: 'Watch Video' })
    expect(playLink).toBeInTheDocument()
    expect(within(section).getByText('Watch Video')).toBeInTheDocument()
  })
})
