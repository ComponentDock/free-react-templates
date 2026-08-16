import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services headline and three cards with Learn More links', () => {
    const { container } = render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /mission-critical priorities/,
    )
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
