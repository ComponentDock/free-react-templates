import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SPLIT_ABOUT, SPLIT_PROGRAM } from '../content'
import { Services } from './Services'
import { SplitBand } from './SplitBand'

describe('Services', () => {
  it('renders the four cards in order, each with a rotated diamond glyph', () => {
    const { container } = render(<Services />)
    const titles = screen.getAllByRole('heading', { level: 3 }).map((node) => node.textContent)
    expect(titles).toEqual(['Quality Service', 'Spacious Gym', 'Live Healthy', 'Crossfit'])

    const diamonds = container.querySelectorAll('.diamond')
    expect(diamonds).toHaveLength(4)
    diamonds.forEach((diamond) => {
      expect(diamond.querySelector('svg')).not.toBeNull()
    })
    expect(screen.getAllByText(/coach|warehouse|Sleep|Olympic/)).toHaveLength(4)
  })

  it('is a white band with the 117.6px rhythm', () => {
    const { container } = render(<Services />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.id).toBe('services')
    expect(band.className).toContain('band')
    expect(band.className).toContain('bg-white')
  })
})

describe('SplitBand', () => {
  it('bleeds the photo into the left half and puts the text column right', () => {
    const { container } = render(<SplitBand split={SPLIT_ABOUT} imageSide="left" />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.id).toBe(SPLIT_ABOUT.id)
    expect(band.dataset.imageSide).toBe('left')

    const photo = screen.getByRole('img', { name: SPLIT_ABOUT.imageAlt })
    expect(photo.className).toContain('lg:left-0')
    expect(photo.className).toContain('lg:w-1/2')
    expect(photo.className).toContain('h-[400px]')
    expect((photo as HTMLElement).style.backgroundImage).toContain(SPLIT_ABOUT.image)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Enjoy The Fitness')
    expect(heading.className).toContain('md:text-[48px]')
    expect(heading.parentElement?.className).toContain('lg:ml-auto')
    expect(heading.parentElement?.className).toContain('lg:w-[445px]')
    expect(screen.getAllByText(/Brawn started|Classes run/)).toHaveLength(2)
  })

  it('mirrors the geometry for the right-hand band', () => {
    render(<SplitBand split={SPLIT_PROGRAM} imageSide="right" />)
    const photo = screen.getByRole('img', { name: SPLIT_PROGRAM.imageAlt })
    expect(photo.className).toContain('lg:right-0')
    expect(photo.className).not.toContain('lg:left-0')
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Be Fit & Healthy')
    expect(heading.parentElement?.className).toContain('lg:mr-auto')
    expect(screen.getAllByText(SPLIT_PROGRAM.paragraphs[0]!)).toHaveLength(1)
  })
})
