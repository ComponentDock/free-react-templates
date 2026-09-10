import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

describe('social-icons', () => {
  it('renders FacebookIcon', () => {
    render(<FacebookIcon className="h-4 w-4" data-testid="fb" />)
    expect(screen.getByTestId('fb')).toBeInTheDocument()
  })

  it('renders TwitterIcon', () => {
    render(<TwitterIcon className="h-4 w-4" data-testid="tw" />)
    expect(screen.getByTestId('tw')).toBeInTheDocument()
  })

  it('renders InstagramIcon', () => {
    render(<InstagramIcon className="h-4 w-4" data-testid="ig" />)
    expect(screen.getByTestId('ig')).toBeInTheDocument()
  })

  it('renders LinkedinIcon', () => {
    render(<LinkedinIcon className="h-4 w-4" data-testid="li" />)
    expect(screen.getByTestId('li')).toBeInTheDocument()
  })

  it('passes aria-hidden to icons', () => {
    render(<FacebookIcon className="h-4 w-4" data-testid="fb" />)
    expect(screen.getByTestId('fb')).toHaveAttribute('aria-hidden', 'true')
  })
})
