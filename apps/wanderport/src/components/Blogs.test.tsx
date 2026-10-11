import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blogs } from './Blogs'

describe('Blogs', () => {
  it('renders the black band with a centered white heading', () => {
    render(<Blogs />)

    const section = screen.getByRole('region', { name: 'Our recent blogs' })
    expect(section.className).toContain('bg-night')
    expect(section.className).toContain('section-gap')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Our Recent Blogs')
    expect(heading.className).toContain('text-white')
  })

  it('renders three cards with uppercase titles and the author meta row', () => {
    const { container } = render(<Blogs />)

    const titles = screen.getAllByRole('heading', { level: 4 })
    expect(titles).toHaveLength(3)
    for (const title of titles) {
      expect(title.className).toContain('uppercase')
      expect(title.className).toContain('tracking-[3px]')
      expect(title.textContent).toBe('Summer ware are coming')
    }

    expect(screen.getAllByRole('link', { name: 'Summer ware are coming' })).toHaveLength(3)
    expect(screen.getAllByText('Mark Wiens')).toHaveLength(3)
    expect(screen.getAllByText('13th Dec')).toHaveLength(3)
    expect(screen.getAllByText('15')).toHaveLength(3)
    expect(screen.getAllByText('04')).toHaveLength(3)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(6)
    expect(images[0]!.className).toContain('hover:opacity-50')
    expect(images[1]!.getAttribute('src')).toContain('picsum.photos/seed/wanderport-author')
  })
})
