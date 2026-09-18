import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SPEAKERS } from '../data'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the heading and a card for every speaker', () => {
    render(<Speakers />)
    expect(screen.getByText("Who's Speaking")).toBeInTheDocument()
    for (const speaker of SPEAKERS) {
      expect(screen.getByRole('heading', { level: 3, name: speaker.name })).toBeInTheDocument()
      expect(screen.getByText(speaker.role)).toBeInTheDocument()
    }
  })

  it('renders four social links per speaker with accessible names', () => {
    render(<Speakers />)
    const socialLinks = screen.getAllByRole('link', {
      name: / on (Facebook|Twitter|Instagram|LinkedIn)$/,
    })
    expect(socialLinks).toHaveLength(SPEAKERS.length * 4)
  })
})
