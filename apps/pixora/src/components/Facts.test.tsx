import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facts } from './Facts'
import { facts } from '../data'

describe('Facts', () => {
  it('renders every stat with its number and caption', () => {
    render(<Facts />)
    for (const fact of facts) {
      expect(screen.getByText(fact.number)).toBeInTheDocument()
      expect(screen.getByText(fact.caption)).toBeInTheDocument()
    }
  })
})
