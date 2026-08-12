import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Agents } from './Agents'

describe('Agents', () => {
  it('renders the subheading and section heading', () => {
    render(<Agents />)

    expect(screen.getByText('Agents')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Agents' })).toBeInTheDocument()
  })

  it('renders four agent cards with photos, name links, and property counts', () => {
    render(<Agents />)

    expect(screen.getAllByRole('img')).toHaveLength(4)

    for (const [name, count] of [
      ['Ben Ford', '43'],
      ['John Cooper', '28'],
      ['Janice Clinton', '30'],
      ['Eunice Henceford', '25'],
    ] as const) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
      expect(screen.getByText(`${count} Properties`)).toBeInTheDocument()
    }
  })
})
