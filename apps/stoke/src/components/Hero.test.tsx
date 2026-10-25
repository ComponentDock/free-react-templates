import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO_TICKS, PHONE_HREF } from '../content'

describe('Hero', () => {
  it('opens with the two-sentence h1, the second line in brand red', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('We will not tell you we are fast.')
    expect(heading.textContent).toContain('We will tell you when.')

    const secondLine = screen.getByText('We will tell you when.')
    expect(secondLine.tagName).toBe('SPAN')
    expect(secondLine).toHaveClass('block', 'text-primary-600')
  })

  it('offers the call and the ghost link into the response band', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Call \(555\) 060-0600/ })).toHaveAttribute(
      'href',
      PHONE_HREF,
    )
    expect(screen.getByRole('link', { name: 'What time can you be here?' })).toHaveAttribute(
      'href',
      '#response',
    )
  })

  it('precedes the rating with five stars and labels the sample data', () => {
    render(<Hero />)
    expect(screen.getByText('4.9')).toHaveClass('font-bold')
    expect(screen.getByText('260+ reviews on Google · sample data')).toBeInTheDocument()
    const stars = screen.getByText('4.9').parentElement?.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
  })

  it('lists the four arrival-window ticks', () => {
    render(<Hero />)
    const items = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(items).toEqual([...HERO_TICKS])
  })

  it('puts the eyebrow above the h1 in the ice tone', () => {
    render(<Hero />)
    const eyebrow = screen.getByText('Tulsa · Licensed mechanical contractor')
    expect(eyebrow).toHaveClass('text-ice-700', 'uppercase')
  })
})
