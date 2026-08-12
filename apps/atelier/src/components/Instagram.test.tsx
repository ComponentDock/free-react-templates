import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders six Instagram photo tiles with overlay links', () => {
    render(<Instagram />)

    expect(screen.getAllByRole('link', { name: /Instagram post:/ })).toHaveLength(6)
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
