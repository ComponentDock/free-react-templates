import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { hero } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, paragraph, and solid red CTA over the photo backdrop', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.paragraph)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveClass('bg-brand')

    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos/id/1012')
    expect(section?.querySelector('.bg-maroon\\/80')).not.toBeNull()
  })

  it('does not navigate when the CTA is clicked', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('link', { name: hero.cta }))
    expect(window.location.hash).toBe('')
  })
})
