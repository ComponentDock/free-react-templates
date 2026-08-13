import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Help } from './Help'

describe('Help', () => {
  it('renders the dark help section with intro paragraphs', () => {
    render(<Help />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'How a personal loan can help' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph')).toHaveLength(2)
  })

  it('renders all twelve checkmarked items across three columns', () => {
    const { container } = render(<Help />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(12)
    expect(screen.getByText('Buying a car')).toBeInTheDocument()
    expect(screen.getByText('Renovate your home')).toBeInTheDocument()
    expect(screen.getByText('Go on a holliday')).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(12)
  })
})
