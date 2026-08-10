import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an accessible icon for every brand', () => {
    render(
      <div>
        <BrandIcon name="twitter" ariaLabel="Twitter" />
        <BrandIcon name="facebook" ariaLabel="Facebook" />
        <BrandIcon name="instagram" ariaLabel="Instagram" />
      </div>,
    )

    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('applies a custom className', () => {
    render(<BrandIcon name="twitter" ariaLabel="Twitter" className="h-6 w-6 text-coral" />)
    expect(screen.getByRole('img', { name: 'Twitter' }).getAttribute('class')).toContain('h-6')
  })
})
