'use client';

import { Product } from "@/app/page";

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
}

export default function ProductCard({
  product,
  onDelete,
  onEdit,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Name */}
      <h2 className="mb-2 text-2xl font-bold text-rose-700">
        {product.name}
      </h2>

      {/* Description */}
      <p className="mb-5 text-gray-600">
        {product.description || "No description available"}
      </p>

      {/* Details */}
      <div className="space-y-3">

        <div className="flex justify-between">
          <span className="font-medium text-gray-500">
            Price
          </span>

          <span className="font-bold text-rose-600">
            ₹{product.price}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-500">
            Stock
          </span>

          <span className="font-bold text-yellow-700">
            {product.stock}
          </span>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        <button
          onClick={() => onEdit(product)}
          className="flex-1 rounded-xl bg-yellow-500 py-2.5 font-semibold text-white transition hover:bg-yellow-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="flex-1 rounded-xl bg-rose-600 py-2.5 font-semibold text-white transition hover:bg-rose-700"
        >
          Delete
        </button>

      </div>

    </div>
  );
}