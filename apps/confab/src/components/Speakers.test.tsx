import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the heading and the speaker cards', () => {
    render(<Speakers />)

    expect(screen.getByRole('heading', { level: 2, name: 'Speakers' })).toBeInTheDocument()

    expect(screen.getByText('Dex Font')).toBeInTheDocument()
    expect(screen.getByText('Greta Curve')).toBeInTheDocument()
    expect(screen.getByText('Sam Serif')).toBeInTheDocument()
    expect(screen.getByText('Riley Layer')).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    expect(images[0]).toHaveAttribute('alt', 'Portrait of Dex Font')
  })
})
