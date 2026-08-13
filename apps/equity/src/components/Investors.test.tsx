import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Investors } from './Investors'

describe('Investors', () => {
  it('shows the heading and four client logos in a row', () => {
    render(<Investors />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Investors' })).toBeInTheDocument()

    for (const name of ['FinCorp', 'NordBank', 'Vexel', 'PrimeCap']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
