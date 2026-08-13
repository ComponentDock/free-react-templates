import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureBig } from './FeatureBig'

describe('FeatureBig', () => {
  it('renders both alternating rows with checklists and author quote boxes', () => {
    render(<FeatureBig />)

    expect(screen.getAllByRole('heading', { name: 'Create interactive prototypes' })).toHaveLength(
      2,
    )
    expect(screen.getByText('Adipisci excepturi aliquam')).toBeInTheDocument()
    expect(screen.getByText('Deleniti labore reiciendis')).toBeInTheDocument()
    expect(screen.getByText('Laborum enim quasi at modi')).toBeInTheDocument()
    expect(screen.getByText('Ad at tempore')).toBeInTheDocument()

    expect(screen.getByText('Amalia G.')).toBeInTheDocument()
    expect(screen.getByText('Darren K.')).toBeInTheDocument()
    expect(screen.getAllByText('Co-Founder, XYZ Inc.')).toHaveLength(2)
    expect(screen.getAllByRole('blockquote')).toHaveLength(2)
  })
})
