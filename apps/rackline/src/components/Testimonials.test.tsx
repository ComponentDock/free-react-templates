import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

const NAMES = [
  'Priya Raghunathan',
  'Tomas Neruda',
  'Aisha Bello',
  'Marcus Vandermeer',
]

describe('Testimonials', () => {
  it('renders the centred title and four distinct people', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What the racks hear back')
    for (const name of NAMES) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('button', { name: /Show testimonial/ })).toHaveLength(4)
  })

  it('styles every slide as a centred 525px column with a circular avatar', () => {
    const { container } = render(<Testimonials />)

    const avatar = container.querySelector('img') as HTMLImageElement
    expect(avatar).toHaveClass('h-[90px]', 'w-[90px]', 'rounded-full')
    expect(avatar.getAttribute('src')).toContain('rackline-avatar-1')
    expect(avatar).toHaveAttribute('alt', '')
    expect(screen.getByText('Head of Platform, Northwind Retail')).toHaveClass('uppercase', 'text-muted')
    expect(container.querySelector('li > div')).toHaveClass('max-w-[525px]')
  })

  it('dims only the active slide for assistive tech', () => {
    const { container } = render(<Testimonials />)

    const slides = Array.from(container.querySelectorAll('ul > li'))
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
  })

  it('moves the track with the dots and exposes the active one', async () => {
    const { container } = render(<Testimonials />)

    const track = container.querySelector('[style]') as HTMLElement
    expect(track.style.transform).toContain('0%')
    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Show testimonial 3' }))

    expect(track.style.transform).toContain('200%')
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveClass('bg-lime')
    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).toHaveClass('bg-dot')
  })

  it('hides the previous arrow first and the next arrow last, and stops at the ends', async () => {
    render(<Testimonials />)

    const previous = screen.getByRole('button', { name: 'Previous testimonial' })
    const next = screen.getByRole('button', { name: 'Next testimonial' })

    expect(previous).toHaveClass('hidden', 'opacity-20', 'left-[50px]')
    expect(next).not.toHaveClass('hidden')

    await userEvent.click(previous)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toHaveClass('hidden')

    await userEvent.click(next)
    await userEvent.click(next)
    await userEvent.click(next)

    expect(screen.getByRole('button', { name: 'Next testimonial' })).toHaveClass('hidden')

    // The hidden next control is a no-op once the last slide is showing.
    await userEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('button', { name: 'Show testimonial 4' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('button', { name: 'Next testimonial' })).not.toHaveClass('hidden')
  })
})
