import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trust } from './Trust'

describe('Trust', () => {
  it('renders the heading, photo, intro, and the four checklist items', () => {
    const { container } = render(<Trust />)
    expect(screen.getByText('The only ones')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'We Generate Trust' })).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(screen.getByText(/Phasellus vehicula tempus orci vel consequat/)).toBeInTheDocument()
    for (const item of [
      'Mauris dignissim',
      'Nullam lorem sem, viverra a rutrum',
      'Etiam lobortis erat vel ullamcorper',
      'Sed ultrices interdum libero, laoreet',
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    /* Four green check icons. */
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })
})
