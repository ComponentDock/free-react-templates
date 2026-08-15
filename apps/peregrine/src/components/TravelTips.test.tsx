import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { readMoreLabel, tips, tipsText, tipsTitle } from '../data'
import { TravelTips } from './TravelTips'

describe('TravelTips', () => {
  it('renders the heading, paragraph, three numbered tips, and the read-more button', () => {
    render(<TravelTips />)
    expect(screen.getByRole('heading', { level: 2, name: tipsTitle })).toBeInTheDocument()
    expect(screen.getByText(tipsText)).toBeInTheDocument()

    tips.forEach((tip, index) => {
      expect(screen.getByText(`${index + 1}.`)).toBeInTheDocument()
      expect(screen.getByText(tip)).toBeInTheDocument()
    })
    expect(screen.getByRole('link', { name: readMoreLabel })).toHaveAttribute(
      'href',
      '#blog-section',
    )
  })
})
