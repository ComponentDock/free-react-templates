import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with giant typography and a white-outline CTA', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('group', { name: 'Slide 1 of 3' })).toBeInTheDocument()
    expect(screen.getByText('2019')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Lookbook.' })).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'See More' })
    expect(cta.className).toContain('border-white')
    expect(heroSlides).toHaveLength(3)
  })

  it('navigates slides with the next and previous arrows', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('group', { name: 'Slide 2 of 3' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('group', { name: 'Slide 3 of 3' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('group', { name: 'Slide 2 of 3' })).toBeInTheDocument()
  })

  it('wraps around from the first slide to the last on previous', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('group', { name: 'Slide 3 of 3' })).toBeInTheDocument()
  })

  it('jumps to a slide via dot pagination with aria-current on the active dot', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('group', { name: 'Slide 3 of 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
