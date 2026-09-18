import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the main gallery and thumbnail strip', () => {
    render(<Gallery />)
    expect(screen.getByTestId('gallery-main')).toBeInTheDocument()
    expect(screen.getByTestId('gallery-thumbs')).toBeInTheDocument()
  })

  it('renders zoom buttons for each slide', () => {
    render(<Gallery />)
    const zoomButtons = screen.getAllByRole('link', { name: /Zoom Image Title/ })
    expect(zoomButtons.length).toBe(10)
    zoomButtons.forEach((btn) => {
      expect(btn).toHaveAttribute('target', '_blank')
      expect(btn).toHaveAttribute('rel', 'noreferrer')
    })
  })

  it('renders expand/collapse buttons for info panels', () => {
    render(<Gallery />)
    const expandButtons = screen.getAllByRole('button', { name: /Expand info/ })
    expect(expandButtons.length).toBe(10)
  })

  it('shows image titles inside info panels', () => {
    render(<Gallery />)
    expect(screen.getByText('Image Title Here 1')).toBeInTheDocument()
    expect(screen.getByText('Image Title Here 10')).toBeInTheDocument()
  })

  it('expands info panel when expand button is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    const expandBtn = screen.getAllByRole('button', { name: /Expand info/ })[0] as Element
    await user.click(expandBtn)

    expect(screen.getAllByRole('button', { name: /Collapse info/ }).length).toBeGreaterThanOrEqual(
      1,
    )
  })

  it('collapses expanded info panel on second click', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    const expandBtn = screen.getAllByRole('button', { name: /Expand info/ })[0] as Element
    await user.click(expandBtn)
    expect(screen.getAllByRole('button', { name: /Collapse info/ }).length).toBeGreaterThanOrEqual(
      1,
    )

    const collapseBtn = screen.getAllByRole('button', { name: /Collapse info/ })[0] as Element
    await user.click(collapseBtn)
    expect(screen.getAllByRole('button', { name: /Expand info/ }).length).toBe(10)
  })
})
