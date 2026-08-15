import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconBoxes } from './IconBoxes'
import { iconBoxes, iconBoxesLabel } from '../data'

describe('IconBoxes', () => {
  it('renders three centered benefit boxes with icon, title and text', () => {
    const { container } = render(<IconBoxes />)
    expect(screen.getByRole('region', { name: iconBoxesLabel })).toBeInTheDocument()
    for (const box of iconBoxes) {
      expect(screen.getByRole('heading', { level: 3, name: box.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(iconBoxes[0]!.text)).toHaveLength(3)
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })
})
