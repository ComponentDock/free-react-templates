import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

function renderRow(props: Parameters<typeof SocialLinks>[0]) {
  return render(
    <ul>
      <SocialLinks {...props} />
    </ul>,
  )
}

describe('SocialLinks', () => {
  it('renders three named, icon-only destinations over the band', () => {
    renderRow({ stuck: false })

    const facebook = screen.getByRole('link', { name: 'Facebook, opens in a new tab' })
    expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/')
    expect(facebook).toHaveAttribute('target', '_blank')
    expect(facebook).toHaveAttribute('rel', 'noreferrer')
    expect(facebook).toHaveClass('px-[5px]', 'text-white/70')

    expect(screen.getByRole('link', { name: 'X, opens in a new tab' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn, opens in a new tab' })).toBeInTheDocument()
  })

  it('follows the pinned bar into ink', () => {
    renderRow({ stuck: true })

    expect(screen.getByRole('link', { name: 'Facebook, opens in a new tab' })).toHaveClass(
      'text-ink',
    )
  })

  it('stacks the same three links inline at ink inside the off-canvas panel', () => {
    renderRow({ stuck: false, variant: 'panel' })

    const link = screen.getByRole('link', { name: 'LinkedIn, opens in a new tab' })
    expect(link).toHaveClass('text-ink', 'py-[10px]')
    expect(link).not.toHaveClass('text-[13px]')
  })
})
