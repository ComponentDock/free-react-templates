import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesBand } from './ServicesBand'
import { BAND_ITEMS } from '../data'

describe('ServicesBand', () => {
  it('renders three salmon-band columns with title and text', () => {
    const { container } = render(<ServicesBand />)

    const section = screen.getByRole('region', { name: 'Why choose us' })
    expect(section).toHaveClass('bg-brand')
    for (const item of BAND_ITEMS) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.text)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(BAND_ITEMS.length)
  })
})
