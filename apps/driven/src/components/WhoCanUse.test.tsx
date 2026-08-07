import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhoCanUse } from './WhoCanUse'

describe('WhoCanUse', () => {
  it('renders the heading, blurb, and three audience cards', () => {
    render(<WhoCanUse />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Who can use Driven\?/)

    const cards = screen.getAllByRole('heading', { level: 3, name: 'A Volunteer' })
    expect(cards).toHaveLength(3)
  })
})
