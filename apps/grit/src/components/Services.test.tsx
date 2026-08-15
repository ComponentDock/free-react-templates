import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { featureItems, servicesEyebrow, servicesLead, servicesTitle } from '../data'

describe('Services', () => {
  it('renders the eyebrow, heading, intro, and six service cards in a 3-column grid', () => {
    const { container } = render(<Services />)
    expect(screen.getByText(servicesEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(servicesTitle)
    expect(screen.getByText(servicesLead)).toBeInTheDocument()
    for (const item of featureItems) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg').length).toBe(featureItems.length)
  })
})
