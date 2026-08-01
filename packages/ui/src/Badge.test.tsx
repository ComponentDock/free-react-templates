import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '@free-react-templates/ui'

describe('Badge', () => {
  it.each(['default', 'success', 'warning', 'danger'] as const)(
    'renders the %s variant',
    (variant) => {
      render(<Badge variant={variant}>Status</Badge>)
      const badge = screen.getByText('Status')
      expect(badge).toBeInTheDocument()
      expect(badge.className).toContain(
        variant === 'default' ? 'bg-gray-100' : variant === 'success' ? 'bg-emerald-100' : variant === 'warning' ? 'bg-amber-100' : 'bg-red-100',
      )
    },
  )

  it('applies a custom className', () => {
    render(<Badge className="extra">Label</Badge>)
    expect(screen.getByText('Label')).toHaveClass('extra')
  })
})
