import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge, Eyebrow, Pill, SectionHeading, Stars, Tick, containerClass, sectionClass } from '../components/ui'

describe('band helpers', () => {
  it('caps the content at 1,280 px and widens the gutter on very large screens', () => {
    expect(containerClass.split(' ')).toContain('max-w-[1280px]')
    expect(containerClass.split(' ')).toContain('px-4')
    expect(containerClass).toContain('2xl:px-12')
  })

  it('uses the 80 / 112 px band rhythm', () => {
    expect(sectionClass).toBe('py-20 lg:py-28')
  })
})

describe('Eyebrow', () => {
  it('renders uppercase terracotta fine print with optional extra classes', () => {
    render(<Eyebrow className="custom">Tampa · Licensed CFC contractor</Eyebrow>)

    const eyebrow = screen.getByText('Tampa · Licensed CFC contractor')
    expect(eyebrow).toHaveClass('uppercase', 'text-primary-700', 'custom')
    expect(eyebrow).toHaveStyle({ letterSpacing: undefined })
  })
})

describe('SectionHeading', () => {
  it('renders a bare left-aligned heading when only a title is given', () => {
    render(<SectionHeading title="Bare heading" />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Bare heading')
    expect(heading).not.toHaveClass('mt-3')
    expect(screen.queryByText('Lead copy')).toBeNull()
  })

  it('centres a heading with a badge-style eyebrow and a lead', () => {
    const { container } = render(
      <SectionHeading title="Centred" lead="Lead copy" eyebrow="Questions" align="center" />,
    )

    expect(container.firstChild).toHaveClass('mx-auto', 'max-w-3xl', 'text-center')
    expect(screen.getByText('Questions')).toHaveClass('text-primary-700')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('mt-3')
    expect(screen.getByText('Lead copy')).toHaveClass('text-lg', 'text-ink-500')
  })
})

describe('Badge and Pill', () => {
  it('renders the terracotta pill badge', () => {
    render(<Badge>Reviews</Badge>)
    expect(screen.getByText('Reviews')).toHaveClass('bg-primary-100', 'text-primary-700')
  })

  it('renders the outlined header pill', () => {
    render(<Pill className="ml-2">Tampa, FL</Pill>)
    const pill = screen.getByText('Tampa, FL')
    expect(pill).toHaveClass('rounded-full', 'border', 'text-sm', 'ml-2')
  })
})

describe('Stars and Tick', () => {
  it('paints five amber stars by default and five terracotta stars on the reviews', () => {
    const { container, unmount } = render(<Stars />)
    const amber = container.querySelectorAll('svg')
    expect(amber).toHaveLength(5)
    expect(amber[0]).toHaveClass('fill-amber-400')
    unmount()

    const second = render(<Stars tone="primary" className="mt-2" />)
    const terracotta = second.container.querySelectorAll('svg')
    expect(terracotta[0]).toHaveClass('fill-primary-400')
    expect(second.container.firstChild).toHaveClass('mt-2')
  })

  it('draws the tick glyph as a decorative 16 px stroke', () => {
    const { container } = render(<Tick className="mt-1" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveClass('h-4', 'w-4', 'mt-1')
  })
})
