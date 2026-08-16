import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { scrollLeftLabel, scrollRightLabel, sectionHeadings, testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the Our Successful Students heading block on a light background', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByText(sectionHeadings.testimonialSub)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: sectionHeadings.testimonialTitle }),
    ).toBeInTheDocument()
    expect(container.querySelector('section')!.className).toContain('bg-surface')
  })

  it('shows a window of testimonial cards with avatar, quote icon, name and role', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    const first = testimonials[0]!
    expect(screen.getByRole('heading', { level: 3, name: first.name })).toBeInTheDocument()
    expect(screen.getByText(first.position)).toBeInTheDocument()
  })

  it('navigates with the next and previous buttons and updates the active dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: scrollRightLabel })
    const prev = screen.getByRole('button', { name: scrollLeftLabel })

    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 3, name: testimonials[1]!.name }),
    ).toBeInTheDocument()

    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 3, name: testimonials[2]!.name }),
    ).toBeInTheDocument()

    await user.click(prev)
    expect(
      screen.getByRole('heading', { level: 3, name: testimonials[1]!.name }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dot = screen.getByRole('button', { name: 'Go to slide 5' })
    await user.click(dot)
    expect(
      screen.getByRole('heading', { level: 3, name: testimonials[4]!.name }),
    ).toBeInTheDocument()
  })

  it('clamps the window at the last slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: scrollRightLabel })
    for (let i = 0; i < testimonials.length; i += 1) {
      await user.click(next)
    }
    const visible = screen.getAllByRole('heading', { level: 3 })
    expect(visible[0]!.textContent).toBe(testimonials[testimonials.length - 3]!.name)
  })
})
