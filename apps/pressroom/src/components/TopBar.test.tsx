import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { TRENDING_HEADLINE, TRENDING_LABEL, TRENDING_PHONE } from '../data'

describe('TopBar', () => {
  it('renders the trending label, headline and phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(TRENDING_LABEL)).toBeInTheDocument()
    expect(screen.getByText(TRENDING_HEADLINE)).toBeInTheDocument()
    expect(screen.getByText(TRENDING_PHONE)).toBeInTheDocument()
  })

  it('renders the trending label with a red background', () => {
    const { container } = render(<TopBar />)
    const label = container.querySelector('span.bg-brand')
    expect(label).toHaveTextContent(TRENDING_LABEL)
  })
})
