'use client';

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "@/lib/api";
import ProductCard from "./ProductCard";
import { Product } from "@/app/page";

interface ProductListProps {
  onEdit: (product: Product) => void;
}

export default function ProductList({ onEdit }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts();

      setProducts(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      await deleteProduct(id);

      setProducts((prev) =>
        prev.filter((product) => product.id !== id)
      );
    } catch (err) {
      console.error(err);
      setError("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-amber-300 border-t-rose-600"></div>

        <p className="mt-4 text-gray-600">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-300 bg-red-50 p-8 text-center">
        <h2 className="text-xl font-bold text-red-600">
          Oops!
        </h2>

        <p className="mt-2 text-red-500">
          {error}
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-white p-16 text-center shadow-md">

        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">

          <span className="text-4xl">
            📦
          </span>

        </div>

        <h2 className="text-2xl font-bold text-rose-700">
          No Products Yet
        </h2>

        <p className="mt-3 text-gray-500">
          Create your first product to get started.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}