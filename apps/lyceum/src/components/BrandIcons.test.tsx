import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcons } from './BrandIcons'
import { socialLabel } from '../data'

describe('BrandIcons', () => {
  it('renders one accessible link per brand with an inline SVG', () => {
    const names = ['Facebook', 'Twitter', 'Dribbble', 'Behance', 'LinkedIn'] as const
    const { container } = render(<BrandIcons names={names} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(names.length)
    for (const name of names) {
      expect(screen.getByRole('link', { name: socialLabel(name) })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg path')).toHaveLength(names.length)
  })

  it('applies className and iconClassName to the links and icons', () => {
    const { container } = render(
      <BrandIcons names={['Facebook']} className="text-muted" iconClassName="h-5 w-5" />,
    )

    const link = container.querySelector('a')!
    expect(link.getAttribute('class')).toContain('text-muted')
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('class')).toContain('h-5 w-5')
  })
})
