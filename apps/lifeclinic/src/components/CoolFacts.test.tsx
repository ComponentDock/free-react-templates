import { render, screen } from '@testing-library/react'
import { CoolFacts } from './CoolFacts'
import { facts } from '../data'
import { describe, expect, it } from 'vitest'

describe('CoolFacts', () => {
  it('renders all fact values', () => {
    render(<CoolFacts />)
    for (const fact of facts) {
      expect(screen.getByText(fact.value)).toBeInTheDocument()
    }
  })

  it('renders all fact labels', () => {
    render(<CoolFacts />)
    for (const fact of facts) {
      expect(screen.getByText(fact.label)).toBeInTheDocument()
    }
  })
})
