import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import {
  CONTACT_ADDRESS,
  CONTACT_DATE,
  CONTACT_INVITE,
  CONTACT_MAP_LABEL,
  CONTACT_MAP_NOTE,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_TITLE,
  SECTION_IDS,
} from '../lib/site'

describe('Contact', () => {
  it('splits the band in two under the design own heavy shadow', () => {
    const { container } = render(<Contact />)

    const band = container.querySelector(`section#${SECTION_IDS.contact}`) as HTMLElement

    expect(band).toHaveClass('shadow-contact', 'overflow-hidden', 'relative')

    const wrapper = band.firstElementChild as HTMLElement

    expect(wrapper).toHaveClass('w-full', 'md:w-1/2', 'md:pt-[100px]')
    expect(screen.getByRole('heading', { level: 3, name: CONTACT_TITLE })).toHaveClass('text-[2.5rem]')
    expect(screen.getByText(CONTACT_DATE)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_INVITE)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_ADDRESS)).toBeInTheDocument()
  })

  it('prints the number as a real telephone link in the rose tone', () => {
    render(<Contact />)

    const phone = screen.getByRole('link', { name: CONTACT_PHONE })

    expect(phone).toHaveAttribute('href', CONTACT_PHONE_HREF)
    expect(phone).toHaveClass('text-brand', 'text-[2rem]')
  })

  it('draws its own static venue panel and loads no third-party script or key', () => {
    const { container } = render(<Contact />)

    const map = screen.getByRole('img', { name: CONTACT_MAP_LABEL })

    expect(map).toHaveClass('absolute', 'inset-0')
    expect(map.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument()
    expect(screen.getByText(CONTACT_MAP_NOTE)).toBeInTheDocument()
    expect(container.querySelectorAll('script')).toHaveLength(0)
    expect(container.querySelectorAll('iframe')).toHaveLength(0)
    expect(document.body.innerHTML).not.toContain(['maps.googleapis', '.com'].join(''))
    expect(document.body.innerHTML).not.toContain(['AIza', 'Sy'].join(''))
  })
})
