import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('opens with the centred statement in an eight-column measure', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading.textContent).toBe(about.statement)
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('mb-[81px]')
  })

  it('splits a 7/5 collage with the tall image hidden below the breakpoint', () => {
    render(<About />)
    const wide = screen.getByAltText(about.images.wide.alt)
    const tall = screen.getByAltText(about.images.tall.alt)

    expect((wide.closest('figure') as HTMLElement).className).toContain('lg:w-7/12')
    expect((tall.closest('figure') as HTMLElement).className).toContain('lg:w-5/12')
    expect((tall.closest('figure') as HTMLElement).className).toContain('hidden')
    expect(wide.getAttribute('src')).toContain('picsum.photos/seed/barstone-chambers')
  })

  it('sets the supporting paragraph 60px below the collage', () => {
    render(<About />)
    const paragraph = screen.getByText(about.paragraph)

    expect(paragraph.className).toContain('mt-[60px]')
    expect(paragraph.className).toContain('text-center')
  })
})
