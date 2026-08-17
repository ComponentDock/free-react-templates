import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services, servicesTitle } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders four large-icon service cards with distinct titles and paragraphs', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: servicesTitle })).toBeInTheDocument()

    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.text)).toBeInTheDocument()
    }

    // 4 service icons + 4 decorative circles behind them.
    expect(container.querySelectorAll('svg')).toHaveLength(4)
    expect(container.querySelectorAll('span.rounded-full')).toHaveLength(4)
  })
})
