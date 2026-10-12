import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a viewport-tall azure band with the caption at the left', () => {
    const { container } = render(<Hero />)

    const band = container.querySelector('section')
    expect(band).toHaveAttribute('id', 'home')
    expect(band).toHaveClass('bg-brand', 'scroll-mt-[108px]')

    const row = container.querySelector('.relative.mx-auto')
    expect(row).toBeTruthy()
    expect(screen.getByRole('heading', { level: 1 }).parentElement).toHaveClass('lg:w-8/12')
    expect(container.querySelector('.min-h-screen')).toHaveClass('max-md:min-h-[700px]')
  })

  it('steps the headline size and hides its line breaks below 992px', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass(
      'text-[40px]',
      'min-[414px]:text-[36px]',
      'min-[992px]:text-[45px]',
      'min-[1200px]:text-[48px]',
      'uppercase',
    )
    expect(heading.textContent).toBe('We MakeCloud HostingFar Simpler')

    const breaks = document.querySelectorAll('br')
    expect(breaks).toHaveLength(2)
    breaks.forEach((lineBreak) => {
      expect(lineBreak).toHaveClass('hidden', 'min-[992px]:inline')
    })
  })

  it('adds no dark overlay because the reference leaves its overlay rule unused', () => {
    const { container } = render(<Hero />)

    expect(container.querySelector('.bg-overlay')).toBeNull()
  })

  it('offers a white pill CTA that inverts to an outlined pill on hover', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: 'Explore Our Features' })
    expect(cta).toHaveAttribute('href', '#service')
    expect(cta).toHaveClass('bg-surface', 'text-ink', 'rounded-[25px]', 'uppercase')
    expect(cta).toHaveClass('hover:bg-transparent', 'hover:border-white', 'hover:text-white')
  })

  it('keeps its own decorative artwork out of the accessibility tree', () => {
    const { container } = render(<Hero />)

    const artwork = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(artwork).toHaveLength(2)
  })
})
