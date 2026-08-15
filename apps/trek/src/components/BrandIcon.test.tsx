import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders a labelled brand svg icon with its path', () => {
    render(<BrandIcon name="facebook" label="Facebook" />)

    const icon = screen.getByRole('img', { name: 'Facebook' })
    expect(icon.tagName).toBe('svg')
    expect(icon.querySelector('path')).toBeInTheDocument()
  })

  it('applies the className to the svg', () => {
    const { container } = render(<BrandIcon name="twitter" label="Twitter" className="h-5 w-5" />)
    expect(container.querySelector('svg')).toHaveAttribute('class', 'h-5 w-5')
  })
})
