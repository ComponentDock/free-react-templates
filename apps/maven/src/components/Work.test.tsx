import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Work } from './Work'

describe('Work', () => {
  it('shows the eyebrow, heading, and three alternating work rows', () => {
    const { container } = render(<Work />)

    expect(screen.getByText('Recent Work')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Creative work for client' }),
    ).toBeInTheDocument()

    const rows = screen.getAllByRole('article')
    expect(rows).toHaveLength(3)
    expect(screen.getAllByText('Mockup design')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Learn More/i })).toHaveLength(3)

    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
