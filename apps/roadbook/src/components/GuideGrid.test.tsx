import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GuideGrid } from './GuideGrid'

describe('GuideGrid', () => {
  it('renders one list item per field guide', () => {
    const { container } = render(<GuideGrid />)

    const list = screen.getByRole('list')
    expect(list.querySelectorAll(':scope > li')).toHaveLength(4)
    expect(container.querySelectorAll('article')).toHaveLength(4)
  })

  it('derives its column count from an auto-fit grid, not breakpoint classes', () => {
    render(<GuideGrid />)

    const list = screen.getByRole('list')
    expect(list.className).toContain('grid-cols-[repeat(auto-fit,minmax(250px,1fr))]')
    expect(list.className).toContain('gap-4')
    expect(list.className).not.toMatch(/\b(sm|md|lg|xl):grid-cols/)
  })

  it('resets the list so the cards sit flush', () => {
    render(<GuideGrid />)

    const list = screen.getByRole('list')
    expect(list.className).toContain('list-none')
    expect(list.className).toContain('p-0')
    expect(list.className).toContain('m-0')
  })

  it('draws no icons and no controls — four links, nothing else', () => {
    const { container } = render(<GuideGrid />)

    expect(container.querySelectorAll('svg')).toHaveLength(0)
    expect(screen.getAllByRole('link')).toHaveLength(4)
    expect(container.querySelectorAll('button, input, select, textarea')).toHaveLength(0)
  })
})
