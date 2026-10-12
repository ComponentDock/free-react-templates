import { render, screen } from '@testing-library/react'
import { HERO_PHOTO, NAV, PANELS } from '../lib/site'
import { Hero } from './Hero'

describe('Hero', () => {
  it('is the page’s only band: at least frame-filling, full-bleed, over a seeded placeholder', () => {
    const { container } = render(<Hero />)

    const band = container.querySelector('section') as HTMLElement

    expect(band).toHaveAttribute('id', 'hero')
    expect(band.className.split(' ')).toEqual(
      expect.arrayContaining(['min-h-screen', 'w-full', 'bg-cover', 'bg-center', 'bg-no-repeat']),
    )
    expect(band.getAttribute('style')).toContain(HERO_PHOTO)
    expect(container.querySelectorAll('section')).toHaveLength(1 + PANELS.length)
  })

  it('keeps the first frame pure image: the panels start one viewport down', () => {
    render(<Hero />)

    expect(screen.getByTestId('band-panels')).toHaveClass('pt-[100vh]', 'mx-auto', 'px-[15px]')
  })

  it('materialises every menu target as a labelled panel, in the menu’s own order', () => {
    const { container } = render(<Hero />)

    expect(container.querySelectorAll('section[id]')).toHaveLength(1 + PANELS.length)
    expect(NAV.map((item) => container.querySelector(item.href))).not.toContain(null)
    expect(PANELS.map((panel) => container.querySelector(`#${panel.id}`))).not.toContain(null)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(PANELS.length)
  })
})
