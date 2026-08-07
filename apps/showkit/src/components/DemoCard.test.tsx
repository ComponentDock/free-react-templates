import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DemoCard } from './DemoCard'

describe('DemoCard', () => {
  it('renders a titled demo card linking to the demo page', () => {
    render(
      <DemoCard
        title="OnePage - 01"
        image="https://picsum.photos/seed/x/1/2"
        href="https://example.com/demo"
      />,
    )

    const link = screen.getByRole('link', { name: /OnePage - 01/ })
    expect(link).toHaveAttribute('href', 'https://example.com/demo')
    expect(link).toHaveAttribute('target', '_blank')
    expect(screen.getByAltText('OnePage - 01 demo preview')).toBeInTheDocument()
    expect(screen.getByText('OnePage - 01')).toBeInTheDocument()
  })
})
