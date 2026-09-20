import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FunFacts } from './FunFacts'

describe('FunFacts', () => {
  it('renders the section title', () => {
    render(<FunFacts />)
    expect(screen.getByText('Fun Facts')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<FunFacts />)
    expect(screen.getByText('Some Facts')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<FunFacts />)
    expect(screen.getByText(/Far far away/i)).toBeInTheDocument()
  })
})
