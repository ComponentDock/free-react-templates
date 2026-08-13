import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders both alternating feature rows', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get a personal loan from just 8.5% APR' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Get aproved in minutes after you apply online',
      }),
    ).toBeInTheDocument()
    const links = screen.getAllByRole('link', { name: /Apply for a loan now/ })
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', '#apply')
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
