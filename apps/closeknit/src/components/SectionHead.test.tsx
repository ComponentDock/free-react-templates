import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHead } from './SectionHead'

describe('SectionHead', () => {
  it('renders the pill, heading and lede', () => {
    render(<SectionHead pill="Plans" title="A title" lede="A lede" />)

    expect(screen.getByText('Plans')).toHaveClass('pill-primary')
    expect(screen.getByRole('heading', { level: 2, name: 'A title' })).toBeInTheDocument()
    expect(screen.getByText('A lede')).toBeInTheDocument()
  })

  it('omits the lede and supports the accent pill on a left-aligned head', () => {
    const { container } = render(
      <SectionHead pill="Your feed" title="No lede" tone="accent" align="left" />,
    )

    expect(screen.getByText('Your feed')).toHaveClass('pill-accent')
    expect(container.querySelector('p')).toBeNull()
    expect(container.firstElementChild).toHaveClass('text-left')
  })
})
