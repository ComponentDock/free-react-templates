import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHeading } from './PageHeading'

describe('PageHeading', () => {
  it('renders the given title as a single 28px regular-weight black h2', () => {
    render(<PageHeading title="Table #09" />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(1)
    const heading = headings[0] as HTMLElement
    expect(heading).toHaveTextContent('Table #09')
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('text-heading')
  })

  it('centers the heading in a half-width wrapper with a 3rem bottom margin', () => {
    render(<PageHeading title="Table #09" />)
    const heading = screen.getByRole('heading', { level: 2 })
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('text-center')
    expect(wrapper.className).toContain('mb-[3rem]')
    expect(wrapper.className).toContain('min-[768px]:w-1/2')
    const row = wrapper.parentElement as HTMLElement
    expect(row.className).toContain('flex')
    expect(row.className).toContain('justify-center')
  })
})
