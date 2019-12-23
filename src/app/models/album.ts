export interface AlbumResult {
  _meta: _meta;
  result: result[];
}

export interface _meta {
  success: boolean;
  code: number;
  message: string;
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
  rateLimit: RateLimit;
}

export interface RateLimit {
  limit: number;
  remaining: number;
  reset: number;
}

export interface result {
  id: string;
  user_id: string;
  title: string;
  _links: Links;
}

export interface Links {
  self: Edit;
  edit: Edit;
}

export interface Edit {
  href: string;
}
