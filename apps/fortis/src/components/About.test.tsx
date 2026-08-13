import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { skills } from '../data'

describe('About', () => {
  it('renders the text column with heading, paragraphs and a solid green Our works pill', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThanOrEqual(2)
    const works = screen.getByRole('link', { name: 'Our works' })
    expect(works).toHaveAttribute('href', '#works')
    expect(works.className).toContain('bg-primary-600')
    expect(works.className).toContain('rounded-full')
  })

  it('renders the centered photo column', () => {
    const { container } = render(<About />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', 'https://picsum.photos/id/180/800/1000')
    expect(image).toHaveAttribute('alt', 'The Fortis design studio at work')
  })

  it('renders four progress bars with matching green fills', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Our expertise and skills' })).toBeInTheDocument()
    for (const skill of skills) {
      const bar = screen.getByRole('progressbar', { name: skill.label })
      expect(bar).toHaveAttribute('aria-valuenow', String(skill.percent))
      expect(bar).toHaveAttribute('aria-valuemin', '0')
      expect(bar).toHaveAttribute('aria-valuemax', '100')
      expect(bar.className).toContain('h-[7px]')
      const fill = bar.firstElementChild as HTMLElement
      expect(fill.style.width).toBe(`${skill.percent}%`)
      expect(fill.className).toContain('bg-brand')
    }
  })
})
