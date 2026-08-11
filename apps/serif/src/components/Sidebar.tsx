import { CategoryWidget } from './CategoryWidget'
import { NewsletterWidget } from './NewsletterWidget'
import { PopularPostWidget } from './PopularPostWidget'
import { TagCloudWidget } from './TagCloudWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-[30px]">
      <NewsletterWidget />
      <CategoryWidget />
      <PopularPostWidget />
      <TagCloudWidget />
    </aside>
  )
}
