import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { variationItems } from '../data'
import { Variation } from './Variation'

describe('Variation', () => {
  it('renders three icon features with headings and paragraphs', () => {
    render(<Variation />)
    for (const item of variationItems) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.text)).toBeInTheDocument()
    }
  })
})
