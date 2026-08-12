import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('shows three distinct step titles', () => {
    render(<Process />)
    expect(screen.getByRole('heading', { name: 'Get Started With Bitcoin' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Create Your Wallet' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fund Your Wallet' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Start Trading' })).toBeInTheDocument()
  })
})
