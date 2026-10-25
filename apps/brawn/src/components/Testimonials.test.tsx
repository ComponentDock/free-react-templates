import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { CTA, TESTIMONIALS } from '../content'
import { Cta } from './Cta'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows one 700px card at a time with four distinct people behind it', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
    const slide = screen.getByRole('group')
    expect(slide).toHaveAttribute('aria-roledescription', 'slide')
    expect(slide).toHaveAttribute('aria-label', '1 of 4')
    expect(slide.className).toContain('max-w-[700px]')
    expect(slide.className).toContain('p-10')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(TESTIMONIALS[0]!.name)
    expect(screen.getByText(TESTIMONIALS[0]!.role)).toBeInTheDocument()
    expect(new Set(TESTIMONIALS.map((person) => person.name)).size).toBe(4)
  })

  it('walks the four cards with the controls and dims them at both ends', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const previous = screen.getByRole('button', { name: 'Previous testimonial' })
    const next = screen.getByRole('button', { name: 'Next testimonial' })

    expect(previous).toHaveAttribute('aria-disabled', 'true')
    expect(next).toHaveAttribute('aria-disabled', 'false')
    await user.click(previous)
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', '1 of 4')

    await user.click(next)
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', '2 of 4')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(TESTIMONIALS[1]!.name)
    expect(previous).toHaveAttribute('aria-disabled', 'false')

    await user.click(next)
    await user.click(next)
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', '4 of 4')
    expect(next).toHaveAttribute('aria-disabled', 'true')
    expect(next.className).toContain('opacity-20')

    await user.click(next)
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', '4 of 4')

    await user.click(previous)
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', '3 of 4')
  })
})

describe('Cta', () => {
  it('is a blue band with the amber button pointing at the contact form', () => {
    const { container } = render(<Cta />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.id).toBe('contact')
    expect(band.className).toContain('bg-brand')
    expect(band.className).toContain('py-12')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(CTA.heading)
    expect(screen.getByText(CTA.lead)).toBeInTheDocument()

    const button = screen.getByRole('link', { name: CTA.button })
    expect(button).toHaveAttribute('href', '#contact-form')
    expect(button.className).toContain('bg-action')
    expect(button.className).toContain('hover:bg-action-dark')
    expect(button.className).toContain('tracking-[2.6px]')
    expect(button.className).toContain('rounded-[4px]')
  })
})
