import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('shows the heading and a play button', () => {
    render(<Experience />)

    expect(
      screen.getByRole('heading', { name: 'Experience Our Outstanding Services' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Play/ })).toBeInTheDocument()
  })
})
