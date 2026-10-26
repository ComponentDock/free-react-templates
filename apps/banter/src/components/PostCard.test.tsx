import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { POSTS } from '../data'
import { clearClipboard, clearMatchMedia, setClipboard, setMatchMedia } from '../test/navigator'
import { PostCard } from './PostCard'

const [photo, link] = POSTS

const announce = vi.fn()

beforeEach(() => {
  announce.mockClear()
})

afterEach(() => {
  clearClipboard()
  clearMatchMedia()
})

function renderPhoto() {
  return render(<PostCard post={photo} announce={announce} />)
}

function renderLink() {
  return render(<PostCard post={link} announce={announce} />)
}

describe('PostCard — header', () => {
  it('opens with the avatar, name, inline handle and a dated meta line', () => {
    const { container } = renderPhoto()
    const article = container.querySelector('article') as HTMLElement
    const heading = within(article).getByRole('heading', { level: 2 })

    expect(article).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading).toHaveTextContent('Noa Tamura @noatrails')

    const header = article.querySelector('header') as HTMLElement
    expect(header.className).toContain('gap-3')
    expect(header.className).toContain('pl-[18px]')

    const avatar = header.querySelector('span') as HTMLElement
    expect(avatar).toHaveTextContent('NT')
    expect(avatar.className).toContain('size-11')
    expect(avatar.className).toContain('rounded-full')
    expect(avatar.className).toContain('bg-avatar-teal')

    const time = header.querySelector('time') as HTMLElement
    expect(time).toHaveAttribute('datetime', '2026-09-25T08:14')
    expect(time).toHaveTextContent('6 h ago')
    expect(header).toHaveTextContent('Trail Runners Club')
  })

  it('gives the second author the violet disc and the public audience', () => {
    const { container } = renderLink()
    const header = container.querySelector('header') as HTMLElement
    const avatar = header.querySelector('span') as HTMLElement

    expect(avatar).toHaveTextContent('LB')
    expect(avatar.className).toContain('bg-avatar-violet')
    expect(header).toHaveTextContent('Yesterday')
    expect(header).toHaveTextContent('Public')
  })

  it('labels the ⋯ control and leaves it inert', async () => {
    const user = userEvent.setup()
    renderPhoto()

    const more = screen.getByRole('button', { name: "More options for Noa Tamura's post" })
    expect(more.className).toContain('size-[38px]')
    expect(more).not.toHaveAttribute('aria-haspopup')

    await user.click(more)

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })
})

describe('PostCard — text row', () => {
  it('insets the paragraph 18 px at 15 / 22.5 with the hashtag as a link', () => {
    const { container } = renderPhoto()
    const text = container.querySelector('article > p') as HTMLElement

    expect(text.className).toContain('mx-[18px]')
    expect(text.className).toContain('mt-3')
    expect(text.className).toContain('mb-3.5')
    expect(text.className).toContain('text-[15px]')
    expect(text.className).toContain('leading-[1.5]')

    const tag = within(text).getByRole('link', { name: '#trailrunning' })
    expect(tag).toHaveAttribute('href', '#')
    expect(tag.className).toContain('text-link')
    expect(tag.className).toContain('font-semibold')
    expect(tag.className).toContain('no-underline')
  })

  it('renders the link post at the larger 17 / 25.5 with no tag', () => {
    const { container } = renderLink()
    const text = container.querySelector('article > p') as HTMLElement

    expect(text.className).toContain('text-[17px]')
    expect(within(text).queryByRole('link')).not.toBeInTheDocument()
  })
})

describe('PostCard — media rows', () => {
  it('bleeds the photograph to the card edges at 3:2', () => {
    renderPhoto()

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', photo.media.kind === 'photo' ? photo.media.alt : '')
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/banter-1/900/600')
    expect(image.className).toContain('aspect-[3/2]')
    expect(image.className).toContain('w-full')
    expect(image.className).toContain('object-cover')
    expect(image.className).not.toContain('mx-[18px]')
    expect(image.className).not.toContain('rounded')
  })

  it('replaces the photo with a bordered gradient preview on the link post', () => {
    const { container } = renderLink()
    const preview = container.querySelector('a') as HTMLElement
    const tile = preview.querySelector('span') as HTMLElement

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(preview).toHaveAttribute('href', '#')
    expect(preview.className).toContain('rounded-[14px]')
    expect(preview.className).toContain('gap-3.5')
    expect(preview.className).toContain('border-line')
    expect(tile.className).toContain('size-16')
    expect(tile.className).toContain('rounded-xl')
    expect(tile.className).toContain('from-tile-from')
    expect(tile.className).toContain('to-tile-to')
    expect(preview).toHaveTextContent('tiny-toast: accessible notifications in 2 KB')
    expect(preview).toHaveTextContent('code.example.com')
  })
})

describe('PostCard — engagement line', () => {
  it('keeps two frozen groups on one wrapping row', () => {
    const { container } = renderPhoto()
    const stats = container.querySelector('article > div') as HTMLElement

    expect(stats.className).toContain('flex-wrap')
    expect(stats.className).toContain('justify-between')
    expect(stats.className).toContain('px-[18px]')
    expect(stats.className).toContain('py-3')
    expect(stats.className).toContain('text-[13.5px]')
    expect(stats).toHaveTextContent('Sam, Priya and others liked this')
    expect(stats).toHaveTextContent('18 comments · 6 shares')
  })

  it('never moves when the post is liked or commented on', async () => {
    const user = userEvent.setup()
    const { container } = renderPhoto()
    const stats = container.querySelector('article > div') as HTMLElement

    await user.click(screen.getByRole('button', { name: 'Like 248' }))
    await user.click(screen.getByRole('button', { name: 'Comment' }))

    expect(stats).toHaveTextContent('Sam, Priya and others liked this')
    expect(stats).toHaveTextContent('18 comments · 6 shares')
  })
})

describe('PostCard — action bar', () => {
  it('is a three-track grid inside a 517 px bar', () => {
    const { container } = renderPhoto()
    const bar = container.querySelector('div.grid-cols-3') as HTMLElement

    expect(bar.className).toContain('mx-2.5')
    expect(bar.className).toContain('gap-1')
    expect(bar.className).toContain('border-t')
    expect(bar.className).toContain('pt-1.5')
    expect(bar.className).toContain('pb-2')
    expect(bar.children).toHaveLength(3)
  })

  it('renders the measured 15 / 400 labels with a 500-weight count', () => {
    renderPhoto()

    const like = screen.getByRole('button', { name: 'Like 248' })
    expect(like.className).toContain('text-[15px]')
    expect(like.className).toContain('font-normal')
    expect(like.className).toContain('gap-[7px]')
    expect(like.className).toContain('rounded-[10px]')
    expect(like.className).toContain('max-[359px]:text-[13px]')
    expect(like.className).toContain('max-[359px]:gap-1')

    const count = within(like).getByText('248')
    expect(count.className).toContain('font-medium')
    expect(count.className).toContain('tabular-nums')

    expect(screen.getByRole('button', { name: 'Comment' }).className).toContain('font-normal')
    expect(screen.getByRole('button', { name: 'Share' }).className).toContain('font-normal')
  })
})

describe('PostCard — like', () => {
  it('goes 248 → 249 → 248 on the photo post', async () => {
    const user = userEvent.setup()
    renderPhoto()

    const like = screen.getByRole('button', { name: 'Like 248' })
    expect(like).toHaveAttribute('aria-pressed', 'false')
    expect(like).toHaveAttribute('data-count', '248')

    await user.click(like)

    const pressed = screen.getByRole('button', { name: 'Like 249' })
    expect(pressed).toHaveAttribute('aria-pressed', 'true')
    expect(pressed).toHaveAttribute('data-count', '249')
    expect(pressed.className).toContain('text-liked')
    expect(pressed.querySelector('svg')).toHaveClass('beat')

    await user.click(pressed)

    const restored = screen.getByRole('button', { name: 'Like 248' })
    expect(restored).toHaveAttribute('aria-pressed', 'false')
    expect(restored).toHaveAttribute('data-count', '248')
    expect(restored.className).toContain('text-[#374151]')
    expect(restored.querySelector('svg')).not.toHaveClass('beat')
  })

  it('starts the link post pressed at 1,204 and formats the decremented count', async () => {
    const user = userEvent.setup()
    renderLink()

    const like = screen.getByRole('button', { name: 'Like 1,204' })
    expect(like).toHaveAttribute('aria-pressed', 'true')
    expect(like).toHaveAttribute('data-count', '1204')

    await user.click(like)

    const unliked = screen.getByRole('button', { name: 'Like 1,203' })
    expect(unliked).toHaveAttribute('aria-pressed', 'false')
    expect(unliked).toHaveAttribute('data-count', '1203')
    expect(unliked).toHaveTextContent('1,203')
  })
})

describe('PostCard — comment', () => {
  it('opens the reply row, focuses the input and paints the button blue', async () => {
    const user = userEvent.setup()
    const { container } = renderPhoto()

    const comment = screen.getByRole('button', { name: 'Comment' })
    const form = container.querySelector('form') as HTMLFormElement

    expect(form).toHaveAttribute('hidden')
    expect(comment).toHaveAttribute('aria-expanded', 'false')
    expect(comment).toHaveAttribute('aria-controls', form.id)

    await user.click(comment)

    expect(comment).toHaveAttribute('aria-expanded', 'true')
    expect(form).not.toHaveAttribute('hidden')
    expect(form.className).toContain('flex')
    expect(comment.className).toContain('bg-expanded')
    expect(comment.className).toContain('text-link')
    expect(document.activeElement).toBe(screen.getByLabelText('Write a comment'))
  })

  it('closes from the button and hands focus back', async () => {
    const user = userEvent.setup()
    const { container } = renderPhoto()

    const comment = screen.getByRole('button', { name: 'Comment' })
    await user.click(comment)
    await user.click(comment)

    expect(comment).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('form')).toHaveAttribute('hidden')
    expect(comment.className).toContain('text-[#374151]')
    expect(document.activeElement).toBe(comment)
  })

  it('closes on Escape from the input and refocuses Comment', async () => {
    const user = userEvent.setup()
    const { container } = renderPhoto()

    const comment = screen.getByRole('button', { name: 'Comment' })
    await user.click(comment)
    await user.type(screen.getByLabelText('Write a comment'), 'Nice{Escape}')

    expect(container.querySelector('form')).toHaveAttribute('hidden')
    expect(comment).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(comment)
  })

  it('closes on Escape from Post, which the reference never did', async () => {
    const user = userEvent.setup()
    const { container } = renderPhoto()

    await user.click(screen.getByRole('button', { name: 'Comment' }))
    const post = screen.getByRole('button', { name: 'Post' })
    post.focus()
    expect(document.activeElement).toBe(post)

    await user.keyboard('{Escape}')

    expect(container.querySelector('form')).toHaveAttribute('hidden')
    expect(screen.getByRole('button', { name: 'Comment' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Comment' }))
  })

  it('ignores every other key inside the form', async () => {
    const user = userEvent.setup()
    const { container } = renderPhoto()

    await user.click(screen.getByRole('button', { name: 'Comment' }))
    const input = screen.getByLabelText('Write a comment')
    await user.type(input, 'Hi')
    await user.keyboard('{ArrowLeft}')

    expect(container.querySelector('form')).not.toHaveAttribute('hidden')
    expect(input).toHaveValue('Hi')
  })
})

describe('PostCard — submit', () => {
  it('explains an empty comment instead of staying silent', async () => {
    const user = userEvent.setup()
    renderPhoto()

    await user.click(screen.getByRole('button', { name: 'Comment' }))
    await user.click(screen.getByRole('button', { name: 'Post' }))

    expect(announce).toHaveBeenCalledWith('Write a comment first.')
    expect(document.activeElement).toBe(screen.getByLabelText('Write a comment'))
  })

  it('clears the field, announces and keeps the form open on a valid post', async () => {
    const user = userEvent.setup()
    const { container } = renderPhoto()

    await user.click(screen.getByRole('button', { name: 'Comment' }))
    await user.type(screen.getByLabelText('Write a comment'), 'Same time next week!')
    await user.click(screen.getByRole('button', { name: 'Post' }))

    expect(announce).toHaveBeenCalledWith('Comment posted.')
    expect(screen.getByLabelText('Write a comment')).toHaveValue('')
    expect(container.querySelector('form')).not.toHaveAttribute('hidden')
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Post' }))
  })
})

describe('PostCard — share', () => {
  it('copies the post URL on a fine pointer', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn(async () => {})
    setMatchMedia(false)
    setClipboard(writeText)
    renderPhoto()

    await user.click(screen.getByRole('button', { name: 'Share' }))

    expect(writeText).toHaveBeenCalledWith('https://example.com/posts/48213')
    expect(announce).toHaveBeenCalledWith('Link copied to clipboard.')
  })

  it('surfaces a selectable field when the clipboard is unavailable', async () => {
    const user = userEvent.setup()
    const select = vi.spyOn(HTMLInputElement.prototype, 'select')
    setMatchMedia(false)
    setClipboard(async () => {
      throw new Error('denied')
    })
    renderPhoto()

    await user.click(screen.getByRole('button', { name: 'Share' }))

    expect(announce).toHaveBeenCalledWith('Copy this link: https://example.com/posts/48213')

    const field = screen.getByLabelText('Post link for Noa Tamura')
    expect(field).toHaveValue('https://example.com/posts/48213')

    field.focus()
    expect(select).toHaveBeenCalled()

    await user.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(screen.queryByLabelText('Post link for Noa Tamura')).not.toBeInTheDocument()

    select.mockRestore()
  })
})

describe('PostCard — independence', () => {
  it('keeps each card’s like, form and focus local', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <>
        <PostCard post={photo} announce={announce} />
        <PostCard post={link} announce={announce} />
      </>,
    )
    const [first, second] = Array.from(container.querySelectorAll('article'))

    const likeFirst = within(first as HTMLElement).getByRole('button', { name: 'Like 248' })
    await user.click(likeFirst)
    await user.click(within(first as HTMLElement).getByRole('button', { name: 'Comment' }))

    expect(within(second as HTMLElement).getByRole('button', { name: 'Like 1,204' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(second!.querySelector('form')).toHaveAttribute('hidden')
    expect(second!.querySelector('form')).not.toHaveClass('flex')
  })
})
