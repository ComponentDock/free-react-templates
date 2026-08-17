import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FundRaised } from './FundRaised'
import { fundAmount, fundCaption, fundText1, fundText2, fundTitle } from '../data'

describe('FundRaised', () => {
  it('shows the eco-care headline and two paragraphs', () => {
    render(<FundRaised />)
    expect(screen.getByRole('heading', { name: fundTitle })).toBeInTheDocument()
    expect(screen.getByText(fundText1)).toBeInTheDocument()
    expect(screen.getByText(fundText2)).toBeInTheDocument()
  })

  it('renders the fund-raised block with the green amount and caption', () => {
    render(<FundRaised />)
    expect(screen.getByText(fundAmount)).toHaveClass('text-brand')
    expect(screen.getByText(fundCaption)).toBeInTheDocument()
    const block = screen.getByTestId('fund-raised-block')
    expect(block).toHaveClass('bg-canvas')
  })
})
