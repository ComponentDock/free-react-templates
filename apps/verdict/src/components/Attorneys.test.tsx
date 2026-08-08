import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Attorneys } from './Attorneys'

describe('Attorneys', () => {
  it('shows the section heading and all four attorneys', () => {
    render(<Attorneys />)

    expect(screen.getByText('Our Legal Team')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Meet Our Attorneys' }),
    ).toBeInTheDocument()

    for (const name of ['James Morrison', 'Sarah Chen', 'Michael Thompson', 'Elena Rodriguez']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('shows each attorney\u2019s title', () => {
    render(<Attorneys />)

    for (const title of ['Founding Partner', 'Managing Partner', 'Senior Partner', 'Partner']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders a portrait image for every attorney', () => {
    render(<Attorneys />)

    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
