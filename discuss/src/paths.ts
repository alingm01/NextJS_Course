const paths = {
  home() {
    return '/'
  },

  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`
  },

  postCreate: (topicSlug: string) => {
    return `topics/${topicSlug}/posts/new`
  },

  postShow: (topicSlug: string, postID: number) => {
    return `/${topicSlug}/post/${postID}`
  }
}

export default paths;
