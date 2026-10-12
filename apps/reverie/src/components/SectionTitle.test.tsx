import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the design heading and its lead line', () => {
    render(<SectionTitle title="Our services" lead="Everything the day needs." />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our services' })).toBeInTheDocument()
    expect(screen.getByText('Everything the day needs.')).toBeInTheDocument()
  })

  it('sets the ornament only for the sections the design rules one under', () => {
    const { container, rerender } = render(
      <SectionTitle title="Our services" lead="Lead" ornament />,
    )

    expect(container.querySelectorAll('svg')).toHaveLength(1)

    rerender(<SectionTitle title="Our blog" lead="Lead" />)

    expect(container.querySelectorAll('svg')).toHaveLength(0)
  })
})
