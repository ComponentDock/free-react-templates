import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('paints the fixed 821px gradient band with the app-owned skyline and clouds', () => {
    render(<Hero />)

    const hero = document.getElementById('home')!
    expect(hero).toHaveAttribute('id', 'home')
    expect(hero).toHaveClass(
      'h-[821px]',
      'scroll-mt-[124px]',
      'overflow-hidden',
      'bg-[linear-gradient(to_bottom,#200e35,#4d1d85)]',
      'max-[575px]:h-[75vh]',
    )

    expect(hero.querySelectorAll('svg').length).toBeGreaterThanOrEqual(7)
  })

  it('places the caption and the search bar at 31.9% of the band', () => {
    render(<Hero />)

    const caption = document.querySelector('.top-\\[31\\.9\\%\\]')!
    expect(caption).toHaveClass('absolute', 'z-[5]', 'w-full')

    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline).toHaveTextContent('Hosting built for the sky')
    expect(headline).toHaveClass(
      'text-[60px]',
      'font-semibold',
      'text-white',
      'max-[767px]:text-[48px]',
      'max-[575px]:text-[36px]',
    )

    expect(screen.getByText(/Domains, storage and managed servers/)).toHaveClass(
      'max-w-[750px]',
      'leading-[2.14]',
    )
    expect(screen.getByLabelText('Domain name')).toBeInTheDocument()
  })
})
