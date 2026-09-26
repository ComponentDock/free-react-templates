import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders CTA section with heading and button', () => {
    render(<Cta />)
    expect(screen.getByTestId('cta')).toBeInTheDocument()
    expect(screen.getByText('Do You Want To Be A Model?')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
