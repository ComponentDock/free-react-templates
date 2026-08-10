import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Chip } from './Chip'
import { chipColors } from '../data'

describe('Chip', () => {
  it('renders the label with the category color class', () => {
    render(<Chip label="Travel" category="travel" />)

    const chip = screen.getByText('Travel')
    expect(chip).toBeInTheDocument()
    expect(chip).toHaveClass(chipColors.travel)
  })

  it('appends an optional className', () => {
    render(<Chip label="Nature" category="nature" className="absolute" />)
    expect(screen.getByText('Nature')).toHaveClass('absolute', chipColors.nature)
  })
})
