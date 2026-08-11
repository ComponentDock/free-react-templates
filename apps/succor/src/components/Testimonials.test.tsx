import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders a violet section with a dark slate overlay', () => {
    const { container } = render(<Testimonials />)

    const section = container.querySelector('section') as HTMLElement
    expect(section.className).toMatch(/bg-violet/)
    const overlay = container.querySelector('[class*="bg-slate/70"]') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the white Success Stories heading and the side photo', () => {
    const { container } = render(<Testimonials />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Success Stories' })
    expect(heading.className).toMatch(/font-black/)
    expect(heading.className).toMatch(/text-white/)

    const photo = container.querySelector('[class*="bg-cover"]') as HTMLElement
    expect(photo.style.backgroundImage).toContain('picsum.photos/seed/succor-story/800/900')
    expect(photo.className).toMatch(/lg:mt-\[-150px\]/)
  })

  it('shows the first testimonial with quote, avatar, name and position', () => {
    const { container } = render(<Testimonials />)

    const quote = screen.getByText(new RegExp(TESTIMONIALS[0]!.quote.slice(0, 30)))
    expect(quote).toBeInTheDocument()
    expect(screen.getByText('Jeff Nucci')).toBeInTheDocument()
    expect(screen.getByText('Businessman')).toBeInTheDocument()

    // Decorative avatar (alt="") has no img role — query the DOM directly.
    const avatar = container.querySelector('img') as HTMLImageElement
    expect(avatar).not.toBeNull()
    expect(avatar.getAttribute('src')).toContain('succor-person')
  })

  it('navigates between stories with the next and previous arrows', () => {
    const { container } = render(<Testimonials />)

    const figures = container.querySelectorAll('figure')
    expect(figures).toHaveLength(3)
    expect(figures[0]?.className).toMatch(/block/)
    expect(figures[1]?.className).toMatch(/hidden/)
    expect(figures[2]?.className).toMatch(/hidden/)

    fireEvent.click(screen.getByRole('button', { name: 'Next story' }))
    expect(figures[0]?.className).toMatch(/hidden/)
    expect(figures[1]?.className).toMatch(/block/)
    expect(screen.getByText('Maria Gomez')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous story' }))
    expect(figures[0]?.className).toMatch(/block/)
    expect(figures[1]?.className).toMatch(/hidden/)
    expect(screen.getByText('Jeff Nucci')).toBeInTheDocument()
  })

  it('wraps around at the end and start of the carousel', () => {
    const { container } = render(<Testimonials />)

    const figures = container.querySelectorAll('figure')
    fireEvent.click(screen.getByRole('button', { name: 'Previous story' }))
    // Wraps to the last story.
    expect(figures[2]?.className).toMatch(/block/)
    expect(screen.getByText('David Lee')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next story' }))
    expect(figures[0]?.className).toMatch(/block/)
    expect(screen.getByText('Jeff Nucci')).toBeInTheDocument()
  })

  it('jumps to a story via the dot indicators', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to story 2' }))
    expect(screen.getByText('Maria Gomez')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to story 2' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})
