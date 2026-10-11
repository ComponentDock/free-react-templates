import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the centered title with the turquoise rule and the supporting line', () => {
    const { container } = render(<SectionTitle title="Our Services" subtitle="Supporting text" />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByText('Supporting text')).toBeInTheDocument()

    const rule = container.querySelector('span[aria-hidden="true"]')
    expect(rule).toHaveClass('bg-brand')
    expect(rule).toHaveClass('w-[80px]')
    expect(rule).toHaveClass('h-[4px]')
  })

  it('omits the supporting line when no subtitle is given', () => {
    const { container } = render(<SectionTitle title="Popular Destination" />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Destination' }),
    ).toBeInTheDocument()
    expect(container.querySelector('p')).toBeNull()
  })
})
