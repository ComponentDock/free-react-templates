import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureCards } from './FeatureCards'

describe('FeatureCards', () => {
  it('renders the value-proposition cards', () => {
    render(<FeatureCards />)

    for (const title of ['No1 in Sales!', 'Documentation inside', 'Modern Design']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
