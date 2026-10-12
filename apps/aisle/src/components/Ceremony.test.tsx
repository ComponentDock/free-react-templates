import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Ceremony } from './Ceremony'
import {
  CEREMONY_BODY,
  CEREMONY_CTA_HREF,
  CEREMONY_CTA_LABEL,
  CEREMONY_PHOTO,
  CEREMONY_TITLE,
  SECTION_IDS,
} from '../lib/site'
import { mockMatchMedia } from '../test/match-media'

afterEach(() => {
  vi.restoreAllMocks()
})

const fill = (container: HTMLElement) => container.querySelector('a span[aria-hidden="true"]') as HTMLElement

describe('Ceremony', () => {
  it('sets the white heading over its own photograph band with a supporting line', () => {
    const { container } = render(<Ceremony />)

    const band = container.querySelector(`section#${SECTION_IDS.ceremony}`) as HTMLElement

    expect(band.style.backgroundImage).toContain(CEREMONY_PHOTO)
    expect(band).toHaveClass('text-white', 'pt-[50px]', 'md:pt-[100px]')
    expect(screen.getByRole('heading', { level: 2, name: CEREMONY_TITLE })).toHaveClass('text-white')
    expect(screen.getByText(CEREMONY_BODY)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: CEREMONY_CTA_LABEL })

    expect(cta).toHaveAttribute('href', CEREMONY_CTA_HREF)
    expect(cta).toHaveClass('uppercase', 'tracking-[2px]')
  })

  it('waits the rose underline off the label and slides it in on hover', () => {
    const { container } = render(<Ceremony />)

    const bar = fill(container)

    expect(bar).toHaveClass('-translate-x-[130%]', 'group-hover:translate-x-0', 'bg-brand')
  })

  it('sits the underline under the label when the visitor asked for less movement', () => {
    mockMatchMedia(true)

    const { container } = render(<Ceremony />)

    const bar = fill(container)

    expect(bar).toHaveClass('translate-x-0')
    expect(bar).not.toHaveClass('-translate-x-[130%]')
  })
})
