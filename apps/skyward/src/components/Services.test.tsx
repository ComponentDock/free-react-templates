import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, subtext, and four service columns', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Main Services' })).toBeInTheDocument()

    for (const title of ['Cloud VPS', 'Share', 'VPS', 'Dedicated']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })
})
