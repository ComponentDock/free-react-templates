import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SPEAKERS, SPEAKERS_CTA } from '../content'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders three distinct speakers with duotone portraits', () => {
    render(<Speakers />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)
    for (const [index, item] of items.entries()) {
      expect(item).toHaveTextContent(SPEAKERS[index]!.name)
      expect(item).toHaveTextContent(SPEAKERS[index]!.role)
      expect(item.querySelector('.duotone img')).toHaveAttribute('alt', SPEAKERS[index]!.alt)
    }
    expect(new Set(SPEAKERS.map((speaker) => speaker.name)).size).toBe(3)
    expect(new Set(SPEAKERS.map((speaker) => speaker.role)).size).toBe(3)
  })

  it('closes with the indigo All Speakers link into the talks grid', () => {
    render(<Speakers />)
    const cta = screen.getByRole('link', { name: SPEAKERS_CTA.label })
    expect(cta).toHaveAttribute('href', '#talks')
    expect(cta.className).toContain('bg-brand')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Keynote Speakers')
  })
})
