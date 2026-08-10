import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the title with the dark underline treatment by default', () => {
    const { container } = render(<SectionTitle title="POLITICS" />)
    const heading = screen.getByRole('heading', { name: 'POLITICS' })
    expect(heading).toHaveClass('text-[#111]')
    const spans = container.querySelectorAll('span')
    expect(spans[0]).toHaveClass('bg-[#ccc]')
    expect(spans[1]).toHaveClass('bg-primary')
  })

  it('renders the light variant for dark sections', () => {
    const { container } = render(<SectionTitle title="FEATURED VIDEO" light />)
    const heading = screen.getByRole('heading', { name: 'FEATURED VIDEO' })
    expect(heading).toHaveClass('text-white')
    const spans = container.querySelectorAll('span')
    expect(spans[0]).toHaveClass('bg-[#777]')
    expect(spans[1]).toHaveClass('bg-white')
  })
})
