import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { CONTACT, PHONE_HREF } from '../content'

describe('Contact', () => {
  it('renders the sage band with a white pill and an outlined call pill', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(CONTACT.heading)
    expect(screen.getByText(CONTACT.lede)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: CONTACT.primaryCta })).toHaveAttribute(
      'href',
      CONTACT.primaryHref,
    )
    expect(screen.getByRole('link', { name: CONTACT.secondaryCta })).toHaveAttribute(
      'href',
      PHONE_HREF,
    )
  })

  it('marks the band as the one large brand surface', () => {
    const { container } = render(<Contact />)
    const section = container.querySelector('section') as HTMLElement
    expect(section.id).toBe('contact')
    expect(section.className).toContain('bg-primary-700')
  })
})
