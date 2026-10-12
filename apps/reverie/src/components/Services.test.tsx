import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { SECTION_IDS, SERVICES, SERVICES_TITLE } from '../lib/site'
import { serviceCardClass } from '../lib/styles'

describe('Services', () => {
  it('renders the design own six services under their heading', () => {
    const { container } = render(<Services />)

    expect(container.querySelector('section')?.id).toBe(SECTION_IDS.services)
    expect(screen.getByRole('heading', { level: 2, name: SERVICES_TITLE })).toBeInTheDocument()

    const titles = [...container.querySelectorAll('h4')].map((heading) => heading.textContent)

    expect(titles).toEqual([
      'Photos & Video',
      'Wedding Makeup',
      'Restaurant',
      'Live Music & DJ',
      'Wedding Cake',
      'Honeymoons',
    ])
    expect(SERVICES).toHaveLength(6)
  })

  it('draws every card glyph with a lucide icon rather than a source image', () => {
    const { container } = render(<Services />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('svg')).toHaveLength(7)
  })

  it('lifts a card into the design radius and rose shadow on hover', () => {
    const { container } = render(<Services />)
    const card = container.querySelector('div[class*="hover:rounded-[10px]"]')

    expect(card).toHaveClass(serviceCardClass)
    expect(serviceCardClass).toContain('hover:rounded-[10px]')
    expect(serviceCardClass).toContain('hover:shadow-[0_5px_39px_rgba(154,87,87,0.102)]')
    expect(serviceCardClass).toContain('focus-within:shadow-[0_5px_39px_rgba(154,87,87,0.102)]')
    expect(serviceCardClass).toContain('motion-reduce:transition-none')
  })
})
