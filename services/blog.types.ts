export type Author = {
  name: string;
  phone: string;
  shortBio: string;
  title: string;
  email: string;
  company: string;
  twitter: string;
  facebook: string;
  github: string;
};

export type ImagePreview = {
  imageUrl: string;
  title: string;
};

export type Tag = {
  fields: {
    name: string
  }
}

export type BlogPost = {
  id: string;
  body: any;
  description: string;
  publishedDate: string;
  slug: string;
  tags: Array<Tag>;
  title: string;
  imagePreview: ImagePreview;
  author?: Author;
  metaTitle: string;
  metaDescription: string;
  metaImage?: any;
};
