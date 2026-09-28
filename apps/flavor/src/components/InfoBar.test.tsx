import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InfoBar } from './InfoBar'
import { infoItems } from '../data'

describe('InfoBar', () => {
  it('renders all four info items', () => {
    render(<InfoBar />)
    for (const item of infoItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.detail)).toBeInTheDocument()
    }
  })

  it('renders the correct number of info items', () => {
    render(<InfoBar />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(infoItems.length)
  })
})
