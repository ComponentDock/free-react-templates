import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the heading, subheading, and all six service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Service Keeps you Happy' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Search Engine & Social Media Optimization Experts'),
    ).toBeInTheDocument()
    for (const service of services) {
      const heading = screen.getByRole('heading', { level: 3, name: service.title })
      expect(heading).toBeInTheDocument()
      const card = heading.closest('article') as HTMLElement
      expect(within(card).getByText(service.blurb)).toBeInTheDocument()
    }
  })

  it('gives the second-row services a circular brand-blue icon badge', () => {
    const { container } = render(<Services />)
    const circles = container.querySelectorAll('span.h-20.w-20.rounded-full.bg-brand')
    expect(circles).toHaveLength(3)
  })
})
