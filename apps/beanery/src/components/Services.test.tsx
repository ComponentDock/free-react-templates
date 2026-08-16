import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders four service cards with white descriptions', () => {
    render(<Services />)
    expect(screen.getAllByRole('article')).toHaveLength(4)
    for (const service of services) {
      expect(screen.getByText(service.text)).toBeInTheDocument()
    }
  })
})
