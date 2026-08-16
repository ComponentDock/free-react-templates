import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders the three membership feature cards', () => {
    render(<Features />)
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
    }
  })
})
