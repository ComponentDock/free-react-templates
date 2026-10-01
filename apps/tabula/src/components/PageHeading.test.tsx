import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHeading } from './PageHeading'

describe('PageHeading', () => {
  it('renders the h2 heading at 28px regular weight in a centered half-width wrapper with 1.5rem margin', () => {
    render(<PageHeading />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Table #08')
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('text-heading')
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('text-center')
    expect(wrapper.className).toContain('mb-6')
    expect(wrapper.className).toContain('w-full')
    expect(wrapper.className).toContain('min-[768px]:w-1/2')
    const row = wrapper.parentElement as HTMLElement
    expect(row.className).toContain('flex')
    expect(row.className).toContain('justify-center')
  })

  it('renders the h3 subheading at 20px regular weight, centered with 1.5rem margin', () => {
    render(<PageHeading />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('Collapsible Table')
    expect(heading.className).toContain('text-xl')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('text-heading')
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('text-center')
    expect(wrapper.className).toContain('mb-6')
    expect(wrapper.className).toContain('w-full')
  })
})
