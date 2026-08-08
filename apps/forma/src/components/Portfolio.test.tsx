import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and six project captions', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { level: 2, name: 'Featured Projects' })).toBeInTheDocument()

    for (const title of [
      'Coral Gables Residence',
      'SoFi Office Complex',
      'The Setai Penthouse',
      'Mandarin Oriental Suite',
      'Wynwood Gallery',
      'Brickell Heights Loft',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    expect(images[0]).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/forma-port-1'),
    )
  })
})
