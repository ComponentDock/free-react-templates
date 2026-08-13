import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MapBlock } from './MapBlock'
import { mapLabel } from '../data'

describe('MapBlock', () => {
  it('renders a static map placeholder with a label', () => {
    render(<MapBlock />)
    expect(screen.getByTestId('map')).toBeInTheDocument()
    expect(screen.getByText(mapLabel)).toBeInTheDocument()
  })
})
