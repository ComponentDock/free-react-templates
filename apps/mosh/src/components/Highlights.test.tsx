import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Highlights } from './Highlights'

describe('Highlights', () => {
  it('renders at least four numbered highlight items', () => {
    render(<Highlights />)

    for (const title of ['No1 in Sales!', 'Online Marketing', 'Modern Design']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(4)
  })
})
