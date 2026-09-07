import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NameStep } from './NameStep'

describe('NameStep', () => {
  it('renders step indicator 1 / 4', () => {
    render(<NameStep />)
    expect(screen.getByText('Step 1 / 4')).toBeInTheDocument()
  })

  it('renders name input field', () => {
    render(<NameStep />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })
})
