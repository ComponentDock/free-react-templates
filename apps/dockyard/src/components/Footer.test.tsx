import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { attribution, footer, siteBlurb, siteName } from '../data'

describe('Footer', () => {
  it('holds four columns on the dark band', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('footer')).toHaveClass('bg-footer')
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      footer.aboutHeading,
      footer.featuresHeading,
      footer.newsletterHeading,
      footer.followHeading,
    ])

    expect(screen.getByText(siteBlurb)).toHaveClass('text-white/50')
    expect(screen.getAllByText(/^Features$/)[0]).toHaveClass('uppercase')
  })

  it('lists five feature links that light up on hover', () => {
    render(<Footer />)

    for (const link of footer.features) {
      const anchor = screen.getAllByRole('link', { name: link.label })[0] as HTMLElement
      expect(anchor).toHaveAttribute('href', link.href)
      expect(anchor).toHaveClass('hover:text-white')
    }
  })

  it('credits Component Dock below a faint rule with the current year', () => {
    const { container } = render(<Footer />)

    const credit = screen.getByRole('link', { name: attribution.label })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')

    const rule = container.querySelector('.border-t') as HTMLElement
    expect(rule).toHaveClass('border-white/10', 'text-center')
    expect(rule).toHaveTextContent(`© ${new Date().getFullYear()} ${siteName}`)
  })

  it('asks for an e-mail address before subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Add an e-mail address to subscribe.')
  })

  it('confirms the subscription and clears the field', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('E-mail address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — the sailing digest lands on the first Monday of the month.',
    )
    expect(screen.getByLabelText('E-mail address')).toHaveValue('')
  })

  it('carries the four social links with accessible names', () => {
    render(<Footer />)

    for (const social of footer.socials) {
      const link = screen.getAllByRole('link', { name: social.label })[0] as HTMLElement
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveClass('hover:text-white')
    }
  })
})
