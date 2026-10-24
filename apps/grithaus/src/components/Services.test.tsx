import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders all six services with a title and a blurb', () => {
    render(<Services />)
    for (const service of services) {
      expect(screen.getByRole('heading', { level: 4, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.copy)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(6)
  })
})
