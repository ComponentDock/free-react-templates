import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageFooter } from './PageFooter'
import { COMPONENT_DOCK_URL } from '../data/site'

describe('PageFooter', () => {
  it('links the marketplace once, in the page ground', () => {
    const { container } = render(<PageFooter />)

    expect(container.querySelector('footer')).toHaveClass('ot-footer')
    expect(screen.getByText('More templates at', { exact: false })).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', COMPONENT_DOCK_URL)
  })
})
