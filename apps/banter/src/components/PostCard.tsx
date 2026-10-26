import { useId } from 'react'
import { cn } from '@free-react-templates/ui'
import type { AvatarTone, Post } from '../data'
import { useCommentForm } from '../hooks/useCommentForm'
import { usePostActions } from '../hooks/usePostActions'
import { useShare } from '../hooks/useShare'
import { CommentIcon, CodeIcon, HeartIcon, MoreIcon, ShareIcon } from './icons'

const TONE: Record<AvatarTone, string> = {
  teal: 'bg-avatar-teal',
  violet: 'bg-avatar-violet',
}

const CARD =
  'overflow-hidden rounded-[20px] border border-line bg-card text-[15px] leading-[1.5] text-ink shadow-[0_1px_2px_rgb(17_24_39/0.05)]'

const ACTION =
  'inline-flex min-w-0 cursor-pointer items-center justify-center gap-[7px] rounded-[10px] border-0 bg-transparent px-1.5 py-[9px] text-[15px] font-normal transition-colors duration-200 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd] max-[359px]:gap-1 max-[359px]:px-0 max-[359px]:text-[13px]'

const IDLE = 'text-[#374151] hover:bg-hover'

const RING =
  'focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]'

export interface PostCardProps {
  post: Post
  announce: (message: string) => void
}

/**
 * One post: header, paragraph, media row, engagement line and the three-up
 * action bar, with the reply row in flow underneath. Both cards share this one
 * component — the third row is the only thing that differs, selected by the
 * discriminated `media` kind.
 */
export function PostCard({ post, announce }: PostCardProps) {
  const note = useId()
  const headingId = `${note}-title`
  const formId = `${note}-reply`
  const inputId = `${note}-comment`

  const { liked, count, label, toggle } = usePostActions(post.like.count, post.like.liked)
  const {
    open: isReplyOpen,
    value: reply,
    input: replyInput,
    toggleButton: commentButton,
    postButton: postButtonRef,
    change: changeReply,
    toggle: toggleReply,
    submit: submitReply,
    escape: escapeReply,
  } = useCommentForm(announce)
  const { fallbackUrl, share: sharePost, dismiss: dismissFallback } = useShare(
    post.shareUrl,
    announce,
  )

  return (
    <article aria-labelledby={headingId} className={CARD}>
      <header className="flex items-center gap-3 pt-4 pr-4 pl-[18px]">
        <span
          aria-hidden="true"
          className={cn(
            'grid size-11 shrink-0 place-items-center rounded-full text-[14px] font-bold text-white',
            TONE[post.tone],
          )}
        >
          {post.initials}
        </span>
        <div className="min-w-0 flex-1">
          <h2 id={headingId} className="m-0 text-[15.5px] leading-[1.3] font-bold text-ink">
            {post.name} <span className="font-normal text-muted">{post.handle}</span>
          </h2>
          <p className="m-0 text-[13px] leading-[1.5] text-muted">
            <time dateTime={post.time.dateTime}>{post.time.label}</time> · {post.audience}
          </p>
        </div>
        <button
          type="button"
          aria-label={`More options for ${post.name}'s post`}
          className={cn(
            'grid size-[38px] shrink-0 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-muted transition-colors duration-200 hover:bg-hover',
            RING,
          )}
        >
          <MoreIcon />
        </button>
      </header>

      <p
        className={cn(
          'mx-[18px] mt-3 mb-3.5 text-ink',
          post.big ? 'text-[17px] leading-[1.5]' : 'text-[15px] leading-[1.5]',
        )}
      >
        {post.text}
        {post.tag !== undefined && (
          <>
            {' '}
            <a href="#" className={cn('rounded-sm font-semibold text-link no-underline hover:underline', RING)}>
              {post.tag}
            </a>
          </>
        )}
      </p>

      {post.media.kind === 'photo' ? (
        <img
          src={post.media.src}
          alt={post.media.alt}
          width={900}
          height={600}
          className="block aspect-[3/2] w-full object-cover"
        />
      ) : (
        <a
          href={post.media.href}
          className={cn(
            'mx-[18px] mb-1 flex items-center gap-3.5 rounded-[14px] border border-line p-3 text-ink no-underline transition-colors duration-200 hover:bg-[#f8fafc]',
            RING,
          )}
        >
          <span
            aria-hidden="true"
            className="grid size-16 shrink-0 place-items-center rounded-xl bg-linear-to-br from-tile-from to-tile-to text-white"
          >
            <CodeIcon />
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-[14.5px] font-bold text-ink">
              {post.media.title}
            </strong>
            <span className="block truncate text-[13px] text-muted">{post.media.domain}</span>
          </span>
        </a>
      )}

      <div className="flex flex-wrap justify-between gap-x-3 gap-y-1.5 px-[18px] py-3 text-[13.5px] leading-[1.5] text-muted">
        <span>{post.stats.likedBy}</span>
        <span>{post.stats.counts}</span>
      </div>

      <div className="mx-2.5 grid grid-cols-3 gap-1 border-t border-line pt-1.5 pb-2">
        <button
          type="button"
          aria-pressed={liked}
          data-count={count}
          onClick={toggle}
          className={cn('post-action', ACTION, liked ? 'text-liked' : IDLE)}
        >
          <HeartIcon filled={liked} />
          <span>Like</span>{' '}
          <span className="font-medium tabular-nums">{label}</span>
        </button>
        <button
          ref={commentButton}
          type="button"
          aria-expanded={isReplyOpen}
          aria-controls={formId}
          onClick={toggleReply}
          className={cn(
            'post-action',
            ACTION,
            isReplyOpen ? 'bg-expanded text-link' : IDLE,
          )}
        >
          <CommentIcon />
          <span>Comment</span>
        </button>
        <button
          type="button"
          onClick={() => {
            void sharePost()
          }}
          className={cn('post-action', ACTION, IDLE)}
        >
          <ShareIcon />
          <span>Share</span>
        </button>
      </div>

      <form
        id={formId}
        hidden={!isReplyOpen}
        onSubmit={submitReply}
        onKeyDown={escapeReply}
        className={cn(
          'items-center gap-2.5 px-4 pt-1 pb-4',
          isReplyOpen ? 'flex' : 'hidden',
        )}
      >
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-me text-[10px] font-bold text-white"
        >
          YOU
        </span>
        <label htmlFor={inputId} className="sr-only">
          Write a comment
        </label>
        <input
          ref={replyInput}
          id={inputId}
          type="text"
          autoComplete="off"
          placeholder="Write a comment…"
          value={reply}
          onChange={(event) => changeReply(event.target.value)}
          className="min-w-0 flex-1 rounded-full border border-input-line bg-input px-3.5 py-2.5 text-[15px] text-ink placeholder:text-placeholder focus:bg-white focus:outline-2 focus:outline-offset-1 focus:outline-[#93c5fd]"
        />
        <button
          ref={postButtonRef}
          type="submit"
          className={cn(
            'shrink-0 cursor-pointer rounded-full border-0 bg-link px-4 py-[9px] text-[15px] font-normal text-white transition-colors duration-200 hover:bg-[#1e40af]',
            RING,
          )}
        >
          Post
        </button>
      </form>

      {fallbackUrl !== '' && (
        <div className="mx-[18px] mb-4 flex items-center gap-2 rounded-[10px] bg-expanded p-2">
          <input
            readOnly
            value={fallbackUrl}
            aria-label={`Post link for ${post.name}`}
            onFocus={(event) => event.currentTarget.select()}
            className="min-w-0 flex-1 rounded-md border border-input-line bg-white px-2 py-1 text-[13px] text-ink"
          />
          <button
            type="button"
            onClick={dismissFallback}
            className={cn(
              'shrink-0 cursor-pointer rounded-md border-0 bg-transparent px-2 py-1 text-[13px] font-medium text-link',
              RING,
            )}
          >
            Dismiss
          </button>
        </div>
      )}
    </article>
  )
}
