import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders three service cards with titles and readmore links', () => {
    render(<Services />)
    services.forEach((s) => {
      expect(screen.getByText(s.title)).toBeInTheDocument()
      expect(screen.getAllByText(s.description)).toHaveLength(3)
      expect(screen.getAllByText(new RegExp(s.readmoreLabel)).length).toBeGreaterThanOrEqual(1)
    })
  })
})
