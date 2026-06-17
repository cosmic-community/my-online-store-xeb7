export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export type InventoryStatus = 'In Stock' | 'Out of Stock' | 'Low Stock' | string;

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    category_image?: CosmicImage;
    icon_emoji?: string;
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    compare_at_price?: number;
    product_images?: CosmicImage[];
    inventory_status?: InventoryStatus;
    stock_quantity?: number;
    brand?: string;
    category?: Category;
    featured?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    rating?: number;
    review_title?: string;
    review_content?: string;
    product?: Product;
    reviewer_avatar?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}