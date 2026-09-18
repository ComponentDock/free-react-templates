import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EquipmentStrip } from './EquipmentStrip'

describe('EquipmentStrip', () => {
  it('renders 4 equipment items', () => {
    render(<EquipmentStrip />)
    expect(screen.getByText('Tooth Whitening')).toBeInTheDocument()
    expect(screen.getByText('Dental Checkup')).toBeInTheDocument()
    expect(screen.getByText('First Aid Kit')).toBeInTheDocument()
    expect(screen.getByText('Dental Tools')).toBeInTheDocument()
  })
})
