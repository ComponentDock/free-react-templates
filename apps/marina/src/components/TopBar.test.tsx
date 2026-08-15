import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { contactBlocks } from '../data'

describe('TopBar', () => {
  it('renders the brand logo with the Marina wordmark', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Marina home' })).toHaveTextContent('Marina')
  })

  it('renders three contact blocks with icon and two lines each', () => {
    render(<TopBar />)
    for (const block of contactBlocks) {
      expect(screen.getByText(block.line1)).toBeInTheDocument()
      expect(screen.getByText(block.line2)).toBeInTheDocument()
    }
    // Four icons: brand logo (Sailboat) + three leading contact line icons
    expect(document.querySelectorAll('svg')).toHaveLength(4)
  })
})
