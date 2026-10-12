import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Footer } from './Footer'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  FOOTER_COLUMNS,
  FOOTER_NEWS_BODY,
  FOOTER_NEWS_TITLE,
  LEGAL_LINKS,
  NEWSLETTER_ERROR,
  NEWSLETTER_SUCCESS,
  REQUEST_SUCCESS,
  SECTION_IDS,
  SOCIALS,
} from '../lib/site'

function newsletter() {
  return screen.getByRole('form', { name: 'Newsletter sign up' })
}

describe('Footer', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the newsletter pill, the four discs and the four columns', () => {
    const { container } = render(<Footer />)
    const footer = screen.getByRole('contentinfo')

    expect(footer.id).toBe(SECTION_IDS.contact)
    expect(screen.getByRole('heading', { level: 4, name: FOOTER_NEWS_TITLE })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_NEWS_BODY)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')
    expect(within(footer).getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(within(footer).getAllByRole('link', { name: new RegExp(`^${BRAND} on`) })).toHaveLength(
      SOCIALS.length,
    )
    expect(container.querySelectorAll('h5')).toHaveLength(FOOTER_COLUMNS.length)
    expect(screen.getByText(BRAND).tagName).toBe('P')
  })

  it('confirms a sign-up in its own state, which is not the enquiry card one', () => {
    render(<Footer />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(NEWSLETTER_SUCCESS).not.toBe(REQUEST_SUCCESS)

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-address' },
    })
    fireEvent.submit(newsletter())

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_ERROR)
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'guest@example.org' },
    })
    fireEvent.submit(newsletter())

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_SUCCESS)
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'false')
  })

  it('lists the opening hours, the mailbox, the telephone and the address', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Mon – Fri: 8:00am – 7:00pm')).toBeInTheDocument()
    expect(screen.getByText('Closed on weekend')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hello@example.com' })).toHaveAttribute(
      'href',
      'mailto:hello@example.com',
    )
    expect(screen.getByRole('link', { name: '+1 (503) 555-0142' })).toHaveAttribute(
      'href',
      'tel:+15035550142',
    )
    expect(screen.getByText('203 Fake St., Portland, OR 97205, USA')).toBeInTheDocument()

    const columns = container.querySelectorAll('h5')

    expect([...columns].map((heading) => heading.textContent)).toEqual([
      'Open time',
      'Phone & email',
      'Address',
    ])
  })

  it('writes the year from the clock and credits Component Dock, twice a year apart', () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date('2031-05-05T10:00:00Z'))

    const first = render(<Footer />)

    expect(screen.getByRole('contentinfo').textContent).toContain('2031')
    first.unmount()

    vi.setSystemTime(new Date('2042-01-01T00:00:00Z'))
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer.textContent).toContain('2042')
    expect(footer.textContent).toContain('All rights reserved | This template is made with ♥ by')

    const dock = within(footer).getByRole('link', { name: COMPONENT_DOCK_LABEL })

    expect(dock).toHaveAttribute('href', COMPONENT_DOCK_URL)

    const external = [...footer.querySelectorAll('a')].map(
      (anchor) => anchor.getAttribute('href') ?? '',
    )

    expect(external.filter((href) => href.startsWith('http'))).toEqual([COMPONENT_DOCK_URL])
    expect(
      external.filter((href) => href.startsWith('mailto:') || href.startsWith('tel:')),
    ).toHaveLength(2)

    expect(
      LEGAL_LINKS.map((link) =>
        screen.getByRole('link', { name: link.label }).getAttribute('href'),
      ),
    ).toEqual([`#${SECTION_IDS.contact}`, `#${SECTION_IDS.contact}`])
  })
})
