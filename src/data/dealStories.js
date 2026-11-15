import odom from './odomStory.js'
import samsaraStories from './samsaraStories.js'
import industryStories from './industryStories.js'
import transportStories from './transportStories.js'

export const dealStories = Object.fromEntries(
  [odom, ...samsaraStories, ...industryStories, ...transportStories].map(story => [story.slug, story]),
)
