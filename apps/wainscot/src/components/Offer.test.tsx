import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { offerBtnLabel, offerText, offerTitle, quoteBtnLabel, stats } from '../data'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders the four stats with values and labels', () => {
    render(<Offer />)
    for (const stat of stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('renders the partner heading and text', () => {
    render(<Offer />)
    expect(screen.getByRole('heading', { name: offerTitle })).toBeInTheDocument()
    expect(screen.getByText(offerText)).toBeInTheDocument()
  })

  it('renders both action buttons', () => {
    render(<Offer />)
    expect(screen.getByRole('link', { name: offerBtnLabel })).toHaveAttribute(
      'href',
      '#projects-section',
    )
    expect(screen.getByRole('link', { name: quoteBtnLabel })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })
})
