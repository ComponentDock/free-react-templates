import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ClosingBand } from '../components/ClosingBand'
import { Faq } from '../components/Faq'
import { Testimonials } from '../components/Testimonials'
import { CONTACT, FAQS, TESTIMONIALS } from '../data'
import { resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  resetMedia()
})

function track(): HTMLElement {
  return screen.getByTestId('carousel-track')
}

describe('Testimonials', () => {
  it('renders the three reviews with initials and towns', () => {
    render(<Testimonials />)

    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
      expect(screen.getByText(testimonial.town)).toBeInTheDocument()
      expect(screen.getByText(`“${testimonial.quote}”`)).toBeInTheDocument()
      expect(screen.getByText(testimonial.initials)).toBeInTheDocument()
    })
    expect(screen.getAllByLabelText('Five out of five stars')).toHaveLength(3)
  })

  it('is a static one-page row at desktop: no dots, no arrows', () => {
    stubMedia({ '(min-width: 640px)': true, '(min-width: 1024px)': true })

    render(<Testimonials />)

    expect(screen.queryByTestId('carousel-dots')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Next testimonial' })).not.toBeInTheDocument()
    expect(screen.getByText('Yvonne P.').closest('li')?.style.width).toBe('33.333333333333336%')
  })

  it('pages two-up with two dots and working arrows between 640 and 1023 px', async () => {
    stubMedia({ '(min-width: 640px)': true })
    const user = userEvent.setup()

    render(<Testimonials />)

    expect(screen.getByText('Yvonne P.').closest('li')?.style.width).toBe('50%')
    const dots = screen.getByTestId('carousel-dots').querySelectorAll('button')
    expect(dots).toHaveLength(2)
    expect(dots[0]).toHaveClass('w-8', 'bg-primary-600')
    expect(dots[1]).toHaveClass('w-2.5', 'bg-gray-300')

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track().style.transform).toBe('translateX(-100%)')
    expect(screen.getByRole('button', { name: 'Go to review page 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track().style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track().style.transform).toBe('translateX(-100%)')

    await user.click(screen.getByRole('button', { name: 'Go to review page 1' }))
    expect(track().style.transform).toBe('translateX(-0%)')
  })

  it('pages one-up on a phone with three dots', () => {
    render(<Testimonials />)

    expect(screen.getByText('Yvonne P.').closest('li')?.style.width).toBe('100%')
    expect(screen.getByTestId('carousel-dots').querySelectorAll('button')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Previous testimonial' }).className).toContain(
      'left-0',
    )
    expect(screen.getByRole('button', { name: 'Next testimonial' }).className).toContain('right-0')
  })

  it('re-lays-out and returns to the first page when the viewport changes', () => {
    render(<Testimonials />)
    expect(screen.getByText('Yvonne P.').closest('li')?.style.width).toBe('100%')

    stubMedia({ '(min-width: 640px)': true, '(min-width: 1024px)': true })
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.getByText('Yvonne P.').closest('li')?.style.width).toBe('33.333333333333336%')
    expect(screen.queryByTestId('carousel-dots')).not.toBeInTheDocument()
  })

  it('advances itself every five seconds and pauses on hover', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track().style.transform).toBe('translateX(-100%)')

    const carousel = screen.getByTestId('carousel')
    fireEvent.mouseEnter(carousel)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(track().style.transform).toBe('translateX(-100%)')

    fireEvent.mouseLeave(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track().style.transform).toBe('translateX(-200%)')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track().style.transform).toBe('translateX(-0%)')
  })

  it('never starts under reduced motion', () => {
    vi.useFakeTimers()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })

    expect(track().style.transform).toBe('translateX(-0%)')
  })
})

describe('Faq', () => {
  it('renders the five questions closed, with the pill eyebrow', () => {
    render(<Faq />)

    expect(screen.getByText('Questions')).toHaveClass('rounded-full')

    FAQS.forEach((faq, index) => {
      const trigger = screen.getByRole('button', { name: faq.question })
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      expect(trigger).toHaveAttribute('aria-controls', `faq-panel-${index}`)
    })
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(FAQS.length)
    expect(screen.getAllByTestId('faq-icon')[0]!).toHaveClass('rotate-0')
    expect(screen.queryByRole('region', { name: FAQS[0]!.question })).not.toBeInTheDocument()
  })

  it('opens one row, rotates the plus and closes it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQS[0]!.question })

    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByTestId('faq-icon')[0]!).toHaveClass('rotate-45')
    expect(screen.getByRole('region', { name: FAQS[0]!.question })).toHaveTextContent(
      FAQS[0]!.answer,
    )

    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: FAQS[0]!.question })).not.toBeInTheDocument()
  })

  it('is exclusive: opening a second question closes the first', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: FAQS[0]!.question }))
    await user.click(screen.getByRole('button', { name: FAQS[1]!.question }))

    expect(screen.getByRole('button', { name: FAQS[0]!.question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: FAQS[1]!.question })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByTestId('faq-icon')[0]!).toHaveClass('rotate-0')
    expect(screen.getAllByTestId('faq-icon')[1]!).toHaveClass('rotate-45')
    expect(screen.queryByRole('region', { name: FAQS[0]!.question })).not.toBeInTheDocument()
    expect(screen.getByRole('region', { name: FAQS[1]!.question })).toBeInTheDocument()
  })
})

describe('ClosingBand', () => {
  it('renders the flat brand band with a solid and a ghost control', () => {
    render(<ClosingBand />)

    const band = document.getElementById('contact')
    expect(band).toHaveClass('bg-primary-700')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Meter spinning with everything off?' }),
    ).toHaveClass('text-white')
    expect(screen.getByText(/Shut it at the main, then call/)).toHaveClass('text-primary-100')

    expect(screen.getByRole('link', { name: 'Book a leak location' })).toHaveAttribute(
      'href',
      '#quote',
    )
    const call = screen.getByRole('link', { name: `Call ${CONTACT.phoneLabel}` })
    expect(call).toHaveAttribute('href', CONTACT.phoneHref)
    expect(call).toHaveClass('border-2', 'border-white/40')
  })
})
