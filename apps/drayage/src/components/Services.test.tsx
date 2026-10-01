import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow, the navy uppercase heading, and the intro paragraph', () => {
    render(<Services />)
    expect(screen.getByText('What We do?')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Welcome to the freight broker we are the best.')
    expect(screen.getByText(/decades of freight forwarding experience/)).toBeInTheDocument()
  })

  it('renders exactly four service cards with photo, icon, orange title, and blurb', () => {
    const { container } = render(<Services />)
    const titles = ['Air Freight', 'Ship Freight', 'Railway Logistics', 'Ware Housing']
    for (const title of titles) {
      const heading = screen.getByRole('heading', { level: 3, name: title })
      expect(heading.className).toContain('text-brand')
      const card = heading.closest('article')
      expect(card).not.toBeNull()
      expect(card?.querySelector('img')).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/drayage-service-'),
      )
      expect(card?.querySelector('svg')).not.toBeNull()
      expect(card?.querySelector('p')?.textContent?.length ?? 0).toBeGreaterThan(10)
    }
    expect(container.querySelectorAll('article')).toHaveLength(4)
  })
})
