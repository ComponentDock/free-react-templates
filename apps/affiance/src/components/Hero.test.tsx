import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { COUPLE, HERO_TAGLINE } from '../lib/site'

describe('Hero', () => {
  it('lays the couple over the full-bleed photograph', () => {
    const { container } = render(<Hero />)

    const photo = screen.getByTestId('hero-photo')

    expect(photo.style.backgroundImage).toContain('picsum.photos/seed/affiance-49/1920/1080')
    expect(photo).toHaveClass('absolute', 'inset-0', 'bg-cover', 'bg-center')
    expect(container.querySelector('.bg-scrim')).toHaveClass('absolute', 'inset-0')
  })

  it('centres the brand badge above the names', () => {
    const { container } = render(<Hero />)

    const badge = container.querySelector('.h-\\[120px\\]')

    expect(badge).toHaveClass('rounded-full', 'bg-brand')
    expect(badge?.querySelector('span[aria-hidden]')).toHaveClass(
      'inset-[10px]',
      'border-dashed',
      'rounded-full',
    )
    expect(badge?.querySelector('svg')).toHaveClass('h-[60px]', 'w-[60px]', 'text-white')
  })

  it('sets the names in the script face and the tagline in the white pill', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveTextContent(COUPLE)
    expect(heading).toHaveClass('font-script', 'text-white')

    const tagline = screen.getByText(HERO_TAGLINE)

    expect(tagline).toHaveClass('rounded-pill', 'bg-white', 'text-brand', 'tracking-[7px]')
  })
})
