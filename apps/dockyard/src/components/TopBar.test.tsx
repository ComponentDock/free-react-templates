import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'
import { contacts, socialLinks } from '../data'

describe('TopBar', () => {
  it('paints a 44px strip with the e-mail and the phone number', () => {
    const { container } = render(<TopBar />)
    const bar = container.firstElementChild as HTMLElement

    expect(bar).toHaveClass('bg-bar', 'border-line')
    expect(bar.firstElementChild).toHaveClass('h-[44px]')

    expect(screen.getByRole('link', { name: contacts.email })).toHaveAttribute(
      'href',
      `mailto:${contacts.email}`,
    )
    expect(screen.getByRole('link', { name: contacts.phone })).toHaveAttribute(
      'href',
      'tel:+12145550182',
    )
  })

  it('carries the two social links with accessible names', () => {
    render(<TopBar />)
    const list = screen.getAllByRole('list')[1] as HTMLElement

    expect(within(list).getAllByRole('link')).toHaveLength(socialLinks.length)
    for (const social of socialLinks) {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute(
        'href',
        social.href,
      )
    }
  })

  it('hides the labels below the medium breakpoint', () => {
    render(<TopBar />)

    expect(screen.getByText(contacts.email)).toHaveClass('hidden', 'md:inline')
    expect(screen.getByText(contacts.phone)).toHaveClass('hidden', 'md:inline')
  })
})
