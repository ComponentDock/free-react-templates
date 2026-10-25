import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Eyebrow, SectionHeading, containerClass } from '../components/ui'

describe('containerClass', () => {
  it('caps the content at 1,280 px with a responsive gutter', () => {
    expect(containerClass.split(' ')).toContain('max-w-[1280px]')
    expect(containerClass.split(' ')).toContain('px-4')
    expect(containerClass.split(' ')).toContain('lg:px-8')
  })
})

describe('Eyebrow', () => {
  it('defaults to the amber band tone and takes the hero and neutral tones', () => {
    const { unmount } = render(<Eyebrow>Default tone</Eyebrow>)
    expect(screen.getByText('Default tone')).toHaveClass('text-primary-700', 'uppercase')
    unmount()

    render(<Eyebrow tone="hero">Hero tone</Eyebrow>)
    expect(screen.getByText('Hero tone')).toHaveClass('text-primary-400')
  })
})

describe('SectionHeading', () => {
  it('renders a bare left-aligned heading when only a title is given', () => {
    render(<SectionHeading title="Bare heading" />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Bare heading')
    expect(heading).toHaveClass('text-ink-800')
    expect(heading).not.toHaveClass('mt-3')
    expect(screen.queryByText('Lead copy')).toBeNull()
  })

  it('centres the copy and takes an eyebrow, a lead and the light tone', () => {
    const { container } = render(
      <SectionHeading
        title="Centred heading"
        lead="Lead copy"
        eyebrow="Eyebrow copy"
        align="center"
        tone="hero"
        light
      />,
    )

    expect(container.firstChild).toHaveClass('mx-auto', 'max-w-3xl', 'text-center')
    expect(screen.getByText('Eyebrow copy')).toHaveClass('text-primary-400')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('mt-3', 'text-white')
    expect(screen.getByText('Lead copy')).toHaveClass('text-lg', 'text-ink-500')
  })
})
