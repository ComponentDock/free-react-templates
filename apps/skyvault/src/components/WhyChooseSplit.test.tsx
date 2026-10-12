import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyChooseSplit } from './WhyChooseSplit'

describe('WhyChooseSplit', () => {
  it('splits the cool-grey band 6/6 with the placeholder portrait on the left', () => {
    render(<WhyChooseSplit />)

    const section = document.getElementById('about')!
    expect(section).toHaveClass('bg-surface-cool', 'scroll-mt-[124px]')

    const photo = section.querySelector('img')!
    expect(photo).toHaveAttribute('src', 'https://picsum.photos/seed/skyvault-choice/800/1100')
    expect(photo).toHaveAttribute('aria-hidden', 'true')
    expect(photo).toHaveClass('absolute', 'bottom-0', 'left-[25px]', 'w-[397px]')
    expect(photo.parentElement).toHaveClass('hidden', 'min-[992px]:block', 'min-[992px]:w-1/2')
  })

  it('carries the left-aligned heading and the weighted copy gap', () => {
    render(<WhyChooseSplit />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Why teams choose Skyvault' })
    expect(heading).toHaveClass('text-[36px]', 'leading-[0.75]')

    const copy = screen.getByText(/Every plan runs on the same NVMe fleet/)
    expect(copy).toHaveClass('mt-[51px]', 'font-medium')
    expect(copy.parentElement).toHaveClass('transition-opacity', 'opacity-100')
    expect(copy.parentElement!.parentElement).toHaveClass(
      'pt-[94px]',
      'pb-[91px]',
      'min-[992px]:w-1/2',
    )
  })

  it('spreads four labelled highlights across the column', () => {
    const { container } = render(<WhyChooseSplit />)

    const list = container.querySelector('ul')!
    expect(list).toHaveClass('mt-[52px]', 'justify-between', 'min-[992px]:flex-nowrap')

    const items = Array.from(list.querySelectorAll('li'))
    expect(items).toHaveLength(4)
    expect(items.map((item) => item.textContent)).toEqual([
      'Reach',
      'Insights',
      'Infrastructure',
      'Reliability',
    ])
    items.forEach((item) => {
      expect(item.querySelector('svg')).toHaveClass('h-[64px]', 'w-[64px]', 'text-plum-mid')
      expect(item.querySelector('span')).toHaveClass('text-[18px]', 'text-ink')
    })
  })
})
