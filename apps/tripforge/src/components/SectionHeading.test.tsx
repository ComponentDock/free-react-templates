import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the default left-aligned dark heading', () => {
    render(<SectionHeading subheading="Special Offers" lead="Top" rest="Tour Packages" />)
    expect(screen.getByText('Special Offers')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Top Tour Packages')
    expect(heading).toHaveClass('text-heading')
    expect(heading.parentElement).toHaveClass('text-left')
    expect(heading.parentElement).not.toHaveClass('text-white')
  })

  it('renders a centred, light heading with extra content', () => {
    render(
      <SectionHeading
        subheading="Facts"
        lead="Some"
        rest="fun facts"
        align="center"
        tone="light"
        className="mb-0"
      >
        <p>More than 100,000 websites hosted</p>
      </SectionHeading>,
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Some fun facts')
    expect(heading).toHaveClass('section-heading-light')
    expect(heading.parentElement).toHaveClass('text-center', 'text-white', 'mb-0')
    expect(screen.getByText('More than 100,000 websites hosted')).toBeInTheDocument()
  })

  it('combines a light tone with left alignment and a centre alignment with the dark tone', () => {
    const { unmount } = render(
      <SectionHeading subheading="Recent Blog" lead="Tips" rest="& Articles" tone="light" />,
    )
    expect(screen.getByRole('heading', { level: 2 }).parentElement).toHaveClass(
      'text-left',
      'text-white',
    )
    unmount()

    render(
      <SectionHeading
        subheading="Special Offers"
        lead="Popular"
        rest="Restaurants"
        align="center"
      />,
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-heading')
    expect(heading.parentElement).toHaveClass('text-center')
    expect(screen.getByText('Special Offers')).toHaveClass('subheading')
    expect(screen.getByText('Special Offers')).not.toHaveClass('subheading-light')
  })
})
