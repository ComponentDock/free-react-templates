import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BRAND, TESTIMONIALS, TESTIMONIALS_COPY } from '../content'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders three review cards with lime stars and initial discs', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('blockquote')).toHaveLength(3)
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
      expect(screen.getByText(testimonial.town)).toBeInTheDocument()
      expect(screen.getByText(testimonial.name.charAt(0))).toBeInTheDocument()
    })
    expect(document.querySelectorAll('.fill-primary-400')).toHaveLength(15)
  })

  it('names the brand in the reviews, not the source design', () => {
    render(<Testimonials />)
    expect(screen.getByText(TESTIMONIALS[0]!.quote).textContent).toContain(BRAND)
    expect(document.body.textContent?.toLowerCase()).not.toContain('switchover')
  })

  it('keeps the sample-review caveat and the section pill', () => {
    render(<Testimonials />)
    expect(screen.getByText(TESTIMONIALS_COPY.pill)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS_COPY.lede)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(TESTIMONIALS_COPY.heading)
  })

  it('ships no dead carousel controls on a static three-card row', () => {
    render(<Testimonials />)
    expect(screen.queryAllByRole('button')).toHaveLength(0)
    expect((document.getElementById('testimonials') as HTMLElement).className).toContain(
      'bg-gray-50',
    )
  })
})
