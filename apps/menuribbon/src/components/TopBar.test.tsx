import { render, screen, within } from '@testing-library/react'
import { CONTACT_EMAIL, CONTACT_PHONE } from '../lib/site'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('is a #eee utility bar with both contact links at its left', () => {
    render(<TopBar />)

    const bar = screen.getByTestId('top-bar')
    expect(bar).toHaveClass('bg-topbar', 'py-2', 'text-topbar-link')

    const mail = screen.getByRole('link', { name: CONTACT_EMAIL })
    expect(mail).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`)
    expect(mail).toHaveClass('hover:text-accent')
    expect(mail.querySelector('svg')).not.toBeNull()

    const phone = screen.getByRole('link', { name: CONTACT_PHONE })
    expect(phone).toHaveAttribute('href', 'tel:+14155550132')
    expect(phone.querySelector('svg')).not.toBeNull()
  })

  it('holds the contacts at the left and pushes Twitter and Facebook to the right', () => {
    render(<TopBar />)

    const row = screen.getByTestId('top-bar').firstElementChild?.firstElementChild as HTMLElement
    const left = row.children[0] as HTMLElement
    const right = row.children[1] as HTMLElement

    expect(left).toContainElement(screen.getByRole('link', { name: CONTACT_EMAIL }))
    expect(left).toContainElement(screen.getByRole('link', { name: CONTACT_PHONE }))
    expect(left).not.toHaveClass('ml-auto')

    expect(right).toHaveClass('ml-auto')
    expect(within(right).getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', '#twitter')
    expect(within(right).getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      '#facebook',
    )
    expect(screen.getByRole('link', { name: 'Twitter' }).querySelector('svg path')).not.toBeNull()
  })

  it('hides every label below 768px while keeping the glyphs and the accessible names', () => {
    const { container } = render(<TopBar />)

    for (const label of [CONTACT_EMAIL, CONTACT_PHONE, 'Twitter', 'Facebook']) {
      const link = screen.getByRole('link', { name: label })

      expect(within(link).getByText(label)).toHaveClass('hidden', 'md:inline-block')
      expect(link.querySelector('svg')).not.toBeNull()
    }

    expect(container.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(2)
    expect(screen.getAllByRole('link')).toHaveLength(4)
  })
})
