import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Certifications } from './Certifications'
import { CERTIFICATIONS, CERTIFICATIONS_COPY } from '../content'

describe('Certifications', () => {
  it('lists all eight credentials as one grid of cells', () => {
    render(<Certifications />)
    expect(screen.getAllByRole('listitem')).toHaveLength(8)
    CERTIFICATIONS.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.detail)).toBeInTheDocument()
    })
  })

  it('draws its rules with 1 px gaps rather than cell borders', () => {
    render(<Certifications />)
    const list = screen.getByRole('list')
    expect(list.className).toContain('gap-px')
    expect(list.className).toContain('bg-ink-200')
    expect(list.className).toContain('overflow-hidden')
    expect(list.className).toContain('rounded-lg')
    expect(list.className).toContain('grid-cols-1')
    expect(list.className).toContain('sm:grid-cols-2')
    expect(list.className).toContain('lg:grid-cols-4')
    screen.getAllByRole('listitem').forEach((cell) => {
      expect(cell.className).not.toContain('border')
    })
  })

  it('is a compact band with the small heading and both hairlines', () => {
    const { container } = render(<Certifications />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.className).toContain('py-12')
    expect(band.className).toContain('border-y')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-2xl')
    expect(screen.getByText(CERTIFICATIONS_COPY.footnote)).toBeInTheDocument()
  })
})
