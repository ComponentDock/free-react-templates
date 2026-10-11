import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Socials } from './Socials'

describe('Socials', () => {
  it('renders the three branded social links in order', () => {
    const { container } = render(<Socials />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual([
      'Facebook',
      'Twitter',
      'YouTube',
    ])
    expect(links.map((link) => link.getAttribute('href'))).toEqual(['#', '#', '#'])

    expect(screen.getByLabelText('Facebook')).toHaveClass('bg-facebook')
    expect(screen.getByLabelText('Twitter')).toHaveClass('bg-twitter')
    expect(screen.getByLabelText('YouTube')).toHaveClass('bg-youtube')

    // every link carries a 22px inline brand mark
    for (const link of links) {
      expect(link.querySelector('svg')).toHaveClass('size-[22px]')
    }
    expect(container.querySelectorAll('li')).toHaveLength(3)
  })

  it('merges a className override', () => {
    render(<Socials className="pb-2" />)
    expect(screen.getByRole('list')).toHaveClass('pb-2')
  })
})
