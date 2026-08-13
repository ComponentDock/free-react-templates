import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders three centered feature cards with no section heading', () => {
    render(<Features />)

    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()

    for (const feature of features) {
      expect(screen.getByRole('heading', { name: feature.title })).toBeInTheDocument()
      expect(screen.getByText(feature.text)).toBeInTheDocument()
    }
  })
})
