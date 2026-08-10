import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BigAdd } from './BigAdd'
import { bigAddLabel } from '../data'

describe('BigAdd', () => {
  it('renders the full-width ad placeholder', () => {
    render(<BigAdd />)

    expect(screen.getByText(bigAddLabel)).toBeInTheDocument()
  })
})
