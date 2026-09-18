import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DarkCard, DarkCardDivider } from './DarkCard'

describe('DarkCard', () => {
  it('renders children content', () => {
    render(
      <DarkCard>
        <div>Card content</div>
      </DarkCard>,
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders with dark background styling', () => {
    const { container } = render(
      <DarkCard>
        <div>Content</div>
      </DarkCard>,
    )
    const card = container.firstElementChild
    expect(card).toHaveClass('bg-card-dark')
  })

  it('renders with rounded corners', () => {
    const { container } = render(
      <DarkCard>
        <div>Content</div>
      </DarkCard>,
    )
    const card = container.firstElementChild
    expect(card).toHaveClass('rounded-[5px]')
  })

  it('renders the divider component', () => {
    render(<DarkCardDivider />)
    expect(screen.getByTestId('divider')).toBeInTheDocument()
  })

  it('renders the divider as aria-hidden', () => {
    render(<DarkCardDivider />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the divider with hidden class on mobile', () => {
    render(<DarkCardDivider />)
    const divider = screen.getByTestId('divider')
    expect(divider).toHaveClass('hidden')
    expect(divider).toHaveClass('w-px')
    expect(divider).toHaveClass('bg-divider')
  })
})
