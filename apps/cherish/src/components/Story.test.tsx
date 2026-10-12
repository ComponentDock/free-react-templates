import { render, screen, within } from '@testing-library/react'
import { Story } from './Story'
import {
  PARTNERS,
  PARTNER_SOCIALS,
  STORY_BODY,
  STORY_EYEBROW,
  STORY_HEADING,
  STORY_PORTRAIT,
} from '../lib/site'
import {
  partnerCardClass,
  partnerSocialsClass,
  portraitClass,
  socialLinkClass,
  storyRowClass,
} from '../lib/styles'

describe('Story — how the two of them got here', () => {
  it('opens with the eyebrow, the heading, the flourish and the line under it', () => {
    render(<Story />)

    const block = screen.getByTestId('tale')

    expect(block).toHaveAttribute('aria-labelledby', 'tale-heading')
    expect(within(block).getByText(STORY_EYEBROW)).toBeInTheDocument()

    const heading = within(block).getByRole('heading', { level: 2 })

    expect(heading.textContent).toBe(STORY_HEADING)
    expect(heading).toHaveAttribute('id', 'tale-heading')
    expect(within(block).getByText(STORY_BODY)).toBeInTheDocument()
  })

  it('puts the two of them either side of the round portrait', () => {
    render(<Story />)

    expect(screen.getByTestId('story-row').className).toBe(storyRowClass)

    const cards = screen.getAllByRole('heading', { level: 3 })

    expect(cards.map((card) => card.textContent)).toEqual(PARTNERS.map((partner) => partner.name))

    for (const partner of PARTNERS) {
      expect(screen.getByText(partner.bio)).toBeInTheDocument()
    }

    const portrait = screen.getByRole('img', { name: 'The two of them, photographed together' })

    expect(portrait).toHaveAttribute('src', STORY_PORTRAIT)
    expect(portrait.className).toBe(portraitClass)

    expect(screen.getAllByTestId('partner').map((card) => card.className)).toEqual([
      partnerCardClass,
      partnerCardClass,
    ])
  })

  it('gives each of them the design’s three links', () => {
    render(<Story />)

    const lists = screen.getAllByTestId('partner-socials')

    expect(lists).toHaveLength(2)
    expect(lists[0]?.className).toBe(partnerSocialsClass)

    for (const list of lists) {
      const links = within(list as HTMLElement).getAllByRole('link')

      expect(links.map((link) => link.getAttribute('aria-label'))).toEqual(
        PARTNER_SOCIALS.map((social) => social.label),
      )
      expect(links.map((link) => link.getAttribute('href'))).toEqual(
        PARTNER_SOCIALS.map((social) => social.href),
      )
      expect(links[0]?.className).toBe(socialLinkClass)
    }
  })
})
