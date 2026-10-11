import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

const TITLES = ['Visit Our Office', 'Let\u2019s call us', 'Let\u2019s Email Us', 'Customer Support']

describe('ContactInfo', () => {
  it('renders the four centered detail cards', () => {
    render(<ContactInfo />)

    const section = screen.getByRole('region', { name: 'Contact details' })
    expect(section.className).toContain('section-gap')

    const headings = screen.getAllByRole('heading', { level: 4 })
    expect(headings.map((heading) => heading.textContent)).toEqual(TITLES)
    for (const heading of headings) {
      expect(heading.className).toContain('mb-[25px]')
    }
  })

  it('lists the address, the phone lines and the mailboxes', () => {
    render(<ContactInfo />)

    expect(screen.getByText('18 Kingsway Terrace')).toBeInTheDocument()
    expect(screen.getByText('FAX: +44 20 7946 0956')).toBeInTheDocument()
    expect(screen.getByText('hello@wanderport.example')).toBeInTheDocument()
    expect(screen.getByText('urgent@wanderport.example')).toBeInTheDocument()
    expect(screen.getAllByText(/wanderport\.example$/)).toHaveLength(6)
  })
})
