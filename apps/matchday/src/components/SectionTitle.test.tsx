import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders a centered dark title with a brand subtitle', () => {
    const { container } = render(<SectionTitle title="Latest results" subtitle="a great win" />)
    expect(container.firstElementChild).toHaveClass('text-center')
    const heading = screen.getByRole('heading', { name: 'Latest results' })
    expect(heading).toHaveClass('text-ink')
    expect(screen.getByText('a great win')).toHaveClass('text-brand')
  })

  it('renders a left-aligned light title without a subtitle', () => {
    const { container } = render(<SectionTitle title="Upcoming events" align="left" light />)
    expect(container.firstElementChild).toHaveClass('text-left')
    const heading = screen.getByRole('heading', { name: 'Upcoming events' })
    expect(heading).toHaveClass('text-white')
    expect(screen.queryByText('a great win')).not.toBeInTheDocument()
  })
})
