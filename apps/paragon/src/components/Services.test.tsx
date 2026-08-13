import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { SERVICES, SERVICES_HEADING, SERVICES_LEAD } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, lead and header Learn More link', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: 'Services' })
    expect(
      within(section).getByRole('heading', { level: 2, name: SERVICES_HEADING }),
    ).toBeInTheDocument()
    expect(within(section).getByText(SERVICES_LEAD)).toBeInTheDocument()
    // 1 header link + 4 card links.
    expect(within(section).getAllByRole('link', { name: /Learn More/ })).toHaveLength(5)
  })

  it('renders four cards with caption, title and a picsum photo', () => {
    const { container } = render(<Services />)
    for (const service of SERVICES) {
      expect(screen.getByText(service.caption)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(4)
    expect(container.querySelectorAll('img[alt=""]')).toHaveLength(4)
  })
})
