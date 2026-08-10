import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { DropletLogo } from './DropletLogo'

describe('DropletLogo', () => {
  it('renders a droplet svg inside the circular mark', () => {
    const { container } = render(<DropletLogo />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('svg path')).toBeInTheDocument()
    expect(container.firstElementChild).toHaveClass('rounded-full')
  })

  it('merges a custom className', () => {
    const { container } = render(<DropletLogo className="h-14 w-14" />)
    expect(container.firstElementChild).toHaveClass('h-14', 'w-14')
  })
})
