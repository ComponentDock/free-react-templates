import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExamplesIntro } from './ExamplesIntro'

describe('ExamplesIntro', () => {
  it('renders the centred examples intro copy', () => {
    const { container } = render(<ExamplesIntro />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Completed with examples' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/three pre-built pages/)).toBeInTheDocument()
    expect(container.querySelector('.text-center')).not.toBeNull()
  })
})
