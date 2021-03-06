import React from "react";
import { Layout } from "components/layout";
import { BlogApi, BlogPost } from "services";
import { BlogBox } from "components/blog";

type BlogPageProps = {
  entries: Array<BlogPost>;
};

export default class BlogPage extends React.Component<BlogPageProps> {
  static async getInitialProps() {
    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();
    return { entries };
  }

  renderBlogList = (entries) =>
    entries.map((entry, i) => {
      console.log(entry);
      return (
        <BlogBox
          key={i}
          id={entry.id}
          slug={entry.slug}
          imageUrl={entry.imagePreview.imageUrl}
          title={entry.title}
          author={entry.author?.name}
          description={entry.description}
          tags={entry.tags}
        />
      );
    });

  render() {
    const { entries } = this.props;
    return (
      <Layout>
        <h1>Blog</h1>
        {entries.length > 0 && this.renderBlogList(entries)}
        {entries.length == 0 && <div>Loading...</div>}
      </Layout>
    );
  }
}
