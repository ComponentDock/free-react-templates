import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders an uppercase bold title with the p-title underline classes', () => {
    render(<SectionTitle>Recent News</SectionTitle>)

    const heading = screen.getByRole('heading', { name: 'Recent News' })
    expect(heading).toHaveClass('border-b', 'border-subline', 'pb-5', 'mb-10', 'uppercase')
  })
})
