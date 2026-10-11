import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UnderConstruction } from './UnderConstruction'

describe('UnderConstruction', () => {
  it('renders one full-height centred screen over the photo', () => {
    const { container } = render(<UnderConstruction />)

    const main = screen.getByRole('main')
    expect(main).toHaveClass(
      'min-h-screen',
      'items-center',
      'justify-center',
      'py-[55px]',
      'px-[15px]',
    )
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/incoming-bg-1/1600/1000',
    )
  })

  it('wraps the card at 880px with the translucent background and reference padding', () => {
    render(<UnderConstruction />)

    const card = screen.getByRole('main').firstElementChild
    expect(card).toHaveClass(
      'max-w-[880px]',
      'rounded-card',
      'bg-card',
      'pt-[80px]',
      'min-[576px]:pt-[175px]',
      'pb-[45px]',
    )
  })

  it('stacks card content in the reference order', () => {
    render(<UnderConstruction />)

    const card = screen.getByRole('main').firstElementChild as HTMLElement
    const order = Array.from(card.children).map((child) => child.textContent)

    expect(order[0]).toContain('Incoming')
    expect(order[1]).toContain('Our website is under construction')
    expect(order[2]).toContain('Days')
    expect(order[3]).toContain('Get Notified')
    expect(order[4]).toContain('I promise to never spam')
    expect(order[5]).toContain('Component Dock')
  })

  it('has no navigation or extra sections below the fold', () => {
    render(<UnderConstruction />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryAllByRole('main')).toHaveLength(1)
  })

  it('accepts a className override', () => {
    render(<UnderConstruction className="opacity-50" />)

    expect(screen.getByRole('main')).toHaveClass('opacity-50')
  })
})
