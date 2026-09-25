import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards with titles and descriptions', () => {
    render(<Services />)

    const titles = [
      'Vector Illustration',
      'Graphic Design',
      'Responsive Design',
      'Creative Packaging',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/custom vector artwork/i)).toBeInTheDocument()
    expect(screen.getByText(/eye-catching designs/i)).toBeInTheDocument()
  })
})
