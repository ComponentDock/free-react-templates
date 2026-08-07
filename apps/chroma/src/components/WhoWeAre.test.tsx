import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhoWeAre } from './WhoWeAre'

describe('WhoWeAre', () => {
  it('renders the heading and the four process steps', () => {
    render(<WhoWeAre />)

    expect(screen.getByRole('heading', { level: 2, name: 'Who We Are' })).toBeInTheDocument()

    for (const step of ['Define', 'Design', 'Build', 'Launch']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
  })
})
