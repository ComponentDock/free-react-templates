import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the two-line heading, paragraph and six check items', () => {
    render(<WhyChooseUs />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Why choose homes?')
    expect(heading.textContent).toContain('Because we we are the best in the business.')
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })
})
