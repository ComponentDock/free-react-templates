import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './SectionTitle'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the section title', () => {
  it('stands a decorative sprig over an uppercase heading', () => {
    const { container } = render(<SectionTitle heading="Our Memories" />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Our Memories' })

    expect(tokens(heading)).toContain('uppercase')
    expect(tokens(heading)).toContain('lg:text-[40px]')
    expect(tokens(heading)).toContain('lg:mb-[66px]')

    const sprig = container.querySelector('svg')

    expect(sprig?.getAttribute('aria-hidden')).toBe('true')
    expect(tokens(sprig as Element)).toContain('h-[42px]')
  })
})
