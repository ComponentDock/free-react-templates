import { render, screen, within } from '@testing-library/react'
import { CONTACT, SOCIALS } from '../lib/site'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('puts the mail and phone targets on the left and four socials on the right of one bar', () => {
    render(<TopBar />)

    const bar = screen.getByTestId('top-bar')

    expect(bar).toHaveClass('border-b', 'border-hairline')

    const container = bar.firstElementChild as HTMLElement

    expect(container).toHaveClass('py-4', 'text-[0.8rem]', 'justify-between')

    const mail = within(bar).getByRole('link', { name: CONTACT.email })
    const phone = within(bar).getByRole('link', { name: CONTACT.phoneLabel })

    expect(mail).toHaveAttribute('href', `mailto:${CONTACT.email}`)
    expect(phone).toHaveAttribute('href', `tel:${CONTACT.phone}`)
    expect(mail).toHaveClass('text-white', 'mr-6')

    const socials = within(screen.getByTestId('top-bar-socials')).getAllByRole('link')

    expect(socials).toHaveLength(4)
    expect(socials.map((link) => link.getAttribute('aria-label'))).toEqual(
      SOCIALS.map((social) => social.label),
    )
    expect(socials.map((link) => link.getAttribute('href'))).toEqual(
      SOCIALS.map((social) => social.href),
    )

    for (const link of [mail, phone, ...socials]) {
      expect(link).toHaveAttribute('href', expect.stringMatching(/^(mailto:|tel:|https:)/))
      expect(link.getAttribute('href')).not.toBe('#')
    }
  })

  it('drops the two text labels below the md breakpoint while the glyphs and socials stay', () => {
    render(<TopBar />)

    const labels = [CONTACT.email, CONTACT.phoneLabel].map((label) => screen.getByText(label))

    for (const label of labels) {
      expect(label).toHaveClass('hidden', 'md:inline-block', 'ml-2')
    }

    const socials = within(screen.getByTestId('top-bar-socials')).getAllByRole('link')

    for (const link of socials) {
      expect(link).toHaveClass('block', 'p-2', 'text-white')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }

    const glyphs = document.querySelectorAll('svg[aria-hidden="true"]')

    // Two contact glyphs plus the four social marks, all inside the bar.
    expect(glyphs).toHaveLength(6)
  })
})
