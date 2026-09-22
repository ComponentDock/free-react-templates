import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './social-icons'

describe('social-icons', () => {
  it('renders FacebookIcon without crashing', () => {
    const { container } = render(<FacebookIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders TwitterIcon without crashing', () => {
    const { container } = render(<TwitterIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders LinkedinIcon without crashing', () => {
    const { container } = render(<LinkedinIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders InstagramIcon without crashing', () => {
    const { container } = render(<InstagramIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
