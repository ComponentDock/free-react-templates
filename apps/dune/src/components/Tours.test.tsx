import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tours } from './Tours'

describe('Tours', () => {
  it('renders the heading and tour cards', () => {
    render(<Tours />)
    expect(
      screen.getByRole('heading', { name: /We offer worldwide tour plan/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Paris Tour Offer')).toBeInTheDocument()
    expect(screen.getByText('Rome Tour Offer')).toBeInTheDocument()
    expect(screen.getByText('Bali Tour Offer')).toBeInTheDocument()
    expect(screen.getByText('Safari Tour Offer')).toBeInTheDocument()
  })

  it('displays pricing for each tour', () => {
    render(<Tours />)
    expect(screen.getByText('$65/day')).toBeInTheDocument()
    expect(screen.getByText('$72/day')).toBeInTheDocument()
    expect(screen.getByText('$58/day')).toBeInTheDocument()
    expect(screen.getByText('$89/day')).toBeInTheDocument()
  })
})
