import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesStrip } from './ServicesStrip'
import { services } from '../data'

describe('ServicesStrip', () => {
  it('renders four feature columns with icons and the repeated sub-line', () => {
    render(<ServicesStrip />)
    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Free delivery on all orders')).toHaveLength(4)
    expect(document.querySelectorAll('svg')).toHaveLength(4)
  })
})
