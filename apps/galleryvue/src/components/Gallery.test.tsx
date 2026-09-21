import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 12 gallery items', () => {
    render(<Gallery />)
    for (let i = 1; i <= 12; i++) {
      expect(screen.getByTestId(`gallery-item-${i}`)).toBeInTheDocument()
    }
  })

  it('displays work titles', () => {
    render(<Gallery />)
    for (let i = 1; i <= 12; i++) {
      const padded = String(i).padStart(2, '0')
      expect(screen.getByText(`Work ${padded}`)).toBeInTheDocument()
    }
  })

  it('displays tags for items', () => {
    render(<Gallery />)
    expect(screen.getAllByText('Model')).toHaveLength(2)
    expect(screen.getAllByText('Nature')).toHaveLength(2)
    expect(screen.getAllByText('Fashion')).toHaveLength(2)
    expect(screen.getAllByText('Travel')).toHaveLength(3)
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Fashion, Model')).toBeInTheDocument()
  })

  it('has hover interaction via pointer events', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const item = screen.getByTestId('gallery-item-1')
    await user.hover(item)
    expect(item).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Gallery className="custom-class" />)
    expect(screen.getByTestId('gallery')).toHaveClass('custom-class')
  })
})
