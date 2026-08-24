import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  COPYRIGHT,
  FOLLOW_LINKS,
  FOOTER_ABOUT,
  NAVIGATION_GROUPS,
  SUBSCRIBE_CTA,
  SUBSCRIBE_ERROR,
  SUBSCRIBE_SUCCESS,
  WATCH_LIVE_HEADING,
} from '../data'

describe('Footer', () => {
  it('renders a white footer with black uppercase headings and tan underlines', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer') as HTMLElement
    expect(footer.className).toMatch(/bg-white/)

    for (const heading of ['About Quarters', 'Navigations', WATCH_LIVE_HEADING]) {
      const el = screen.getByRole('heading', { name: heading })
      expect(el.className).toMatch(/uppercase/)
      expect(el.className).toMatch(/text-black/)
    }
    expect(container.querySelectorAll('[aria-hidden="true"]').length).toBeGreaterThan(0)
    expect(screen.getByText(FOOTER_ABOUT)).toBeInTheDocument()
  })

  it('renders the Navigations link groups and Follow Us icons', () => {
    render(<Footer />)

    for (const group of NAVIGATION_GROUPS) {
      for (const link of group) {
        expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
      }
    }
    for (const social of FOLLOW_LINKS) {
      const anchor = screen.getByRole('link', { name: social.label })
      expect(anchor.querySelector('svg path')).not.toBeNull()
    }
  })

  it('renders the Watch Live Streaming card with a circular play button', () => {
    const { container } = render(<Footer />)

    const play = screen.getByRole('link', { name: 'Play video' })
    expect(play.className).toMatch(/rounded-full/)
    expect(play.className).toMatch(/h-\[70px\]/)
    expect(play.querySelector('svg')).not.toBeNull()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('dwell-video'),
    )
  })

  it('shows an inline error for an invalid email and a confirmation for a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    const submit = screen.getByRole('button', { name: SUBSCRIBE_CTA })

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByText(SUBSCRIBE_ERROR)).toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'resident@example.com')
    await user.click(submit)
    expect(screen.getByText(SUBSCRIBE_SUCCESS)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the copyright bar with the Quarters branding and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(COPYRIGHT)).toBeInTheDocument()
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })
})
