import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders a gold divider band', () => {
    const { container } = render(<Divider />)
    const band = container.querySelector('[aria-hidden="true"]')
    expect(band).toBeInTheDocument()
    expect(band).toHaveClass('bg-brand')
  })
})
