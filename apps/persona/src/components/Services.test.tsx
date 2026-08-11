import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services, servicesTitle } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('region', { name: servicesTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: servicesTitle })).toBeInTheDocument()
  })

  it('renders three cards with icon, title and description', () => {
    render(<Services />)
    const region = screen.getByRole('region', { name: servicesTitle })
    for (const service of services) {
      const card = within(region).getByText(service.title).closest('article')
      expect(card).toBeInTheDocument()
      expect(within(card as HTMLElement).getByText(service.description)).toBeInTheDocument()
    }
    expect(within(region).getAllByRole('article')).toHaveLength(3)
  })
})
