import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes all sections in source order', () => {
    render(<App />)

    expect(document.title).toBe('Rhythm — DJ & Music Artist Template')

    const main = screen.getByRole('main')
    const sections = Array.from(main.querySelectorAll<HTMLElement>('section[id]')).map(
      (section) => section.id,
    )
    expect(sections).toEqual(['home', 'events', 'about', 'tracks', 'videos', 'tours'])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section headings across the page.
    const h1Texts = within(main)
      .getAllByRole('heading', { level: 1 })
      .map((heading) => heading.textContent)
    expect(h1Texts.some((text) => text?.match(/Feel the heart beats/))).toBe(true)
    expect(h1Texts.some((text) => text?.match(/Tomorrowland 2020/))).toBe(true)
    expect(within(main).getByText('Upcoming Events')).toBeInTheDocument()
    expect(within(main).getByText('DJ Alexandra Rud')).toBeInTheDocument()
    expect(within(main).getByText('Wedding')).toBeInTheDocument()
    expect(within(main).getByText('Latest tracks')).toBeInTheDocument()
    expect(within(main).getByText('Youtube feed')).toBeInTheDocument()
    expect(within(main).getByText('Tomorrowland 2020')).toBeInTheDocument()
  })
})
