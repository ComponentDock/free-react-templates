import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { WhyUs } from '../components/WhyUs'
import { reviews, services, why } from '../content'

describe('WhyUs', () => {
  it('pairs the photograph with three ruled claims on the cool ground', () => {
    const { container } = render(<WhyUs />)

    const band = container.querySelector('#why-us')
    expect(band).toHaveClass('bg-ink-50', 'py-20', 'lg:py-28')

    const figure = container.querySelector('figure')
    expect(figure).toHaveClass('order-last', 'lg:order-first')
    expect(screen.getByAltText(/Rodline crew/)).toHaveAttribute('src', why.image)
    expect(screen.getByText(why.caption)).toHaveClass('text-sm', 'text-ink-400')

    expect(screen.getByText(why.eyebrow)).toHaveClass('uppercase', 'text-primary-700')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(why.title)

    why.items.forEach((item) => {
      const term = screen.getByText(item.term)
      expect(term.tagName).toBe('DT')
      expect(term.parentElement).toHaveClass('border-l-2', 'border-primary-600', 'pl-5')
      expect(screen.getByText(item.detail).tagName).toBe('DD')
    })
  })
})

describe('Services', () => {
  it('renders three cells inside one hairline mosaic', () => {
    const { container } = render(<Services />)

    const mosaic = container.querySelector('.gap-px')
    expect(mosaic).not.toBeNull()
    expect(mosaic).toHaveClass('bg-ink-100', 'rounded-2xl', 'overflow-hidden', 'lg:grid-cols-3')

    services.items.forEach((service) => {
      expect(screen.getByRole('heading', { level: 3, name: service.name })).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toHaveClass('flex-1')
      expect(screen.getByText(service.price)).toHaveClass('text-primary-700', 'text-sm')
    })
    expect(container.querySelectorAll('.gap-px > div')).toHaveLength(3)
  })
})

describe('Testimonials', () => {
  it('sits on gray-50 with blue stars and no carousel controls', () => {
    const { container } = render(<Testimonials />)

    const band = container.querySelector('#testimonials')
    expect(band).toHaveClass('bg-gray-50')
    expect(band).not.toHaveClass('bg-ink-50')

    expect(screen.getByText(reviews.badge)).toHaveClass('rounded-full', 'bg-primary-100')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(reviews.title)

    const blueStars = container.querySelector('.text-primary-400')
    expect(blueStars?.querySelectorAll('svg')).toHaveLength(5)
    expect(container.querySelectorAll('.text-amber-400')).toHaveLength(0)

    reviews.items.forEach((review) => {
      expect(screen.getByText(review.quote)).toBeInTheDocument()
      expect(screen.getByText(review.name)).toHaveClass('font-semibold')
      expect(screen.getByText(review.city)).toHaveClass('text-sm')
    })

    expect(container.querySelectorAll('figure')).toHaveLength(3)
    expect(screen.queryByRole('button')).toBeNull()
  })
})
