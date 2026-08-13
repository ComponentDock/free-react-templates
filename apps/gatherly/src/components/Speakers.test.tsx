import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Speakers } from './Speakers'
import { speakers } from '../data'

const socialLabels = ['Twitter', 'Facebook', 'Google Plus', 'Instagram']

describe('Speakers', () => {
  it('renders the deep-blue band heading and intro', () => {
    render(<Speakers />)
    const section = screen.getByTestId('speakers')
    expect(section).toHaveAttribute('id', 'speakers-section')
    expect(section.className).toContain('bg-speakers')
    expect(screen.getByRole('heading', { name: speakers.heading })).toBeInTheDocument()
    expect(screen.getByText(speakers.intro)).toBeInTheDocument()
  })

  it('renders four speaker cards with two-line names, roles and socials', () => {
    render(<Speakers />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    cards.forEach((card, index) => {
      const speaker = speakers.list[index]!
      expect(within(card).getByRole('heading', { level: 3 })).toHaveTextContent(
        `${speaker.firstName}${speaker.lastName}`,
      )
      expect(within(card).getByText(speaker.role)).toBeInTheDocument()
      const image = within(card).getByRole('img', {
        name: `${speaker.firstName} ${speaker.lastName}`,
      })
      expect(image).toHaveAttribute('src', speaker.image)
      for (const label of socialLabels) {
        expect(within(card).getByRole('link', { name: label })).toBeInTheDocument()
      }
    })
  })
})
