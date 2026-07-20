'use client';

import { useState } from "react";
import { createProduct, updateProduct } from "@/lib/api";
import { Product } from "@/app/page";

interface ProductFormProps {
  onClose: () => void;
  productToEdit?: Product;
}

export default function ProductForm({
  onClose,
  productToEdit,
}: ProductFormProps) {
  const isEditing = !!productToEdit;

  const [formData, setFormData] = useState({
    name: productToEdit?.name || "",
    description: productToEdit?.description || "",
    price: productToEdit?.price?.toString() || "",
    stock: productToEdit?.stock?.toString() || "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const payload = {
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        stock: Number(formData.stock),
      };

      if (isEditing && productToEdit) {
        await updateProduct(productToEdit.id, payload);
      } else {
        await createProduct(payload);
      }

      onClose();
      window.location.reload();
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.detail || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-600">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Product Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Description
        </label>

        <textarea
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Price
          </label>

          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
          />
        </div>

      </div>

      <div className="flex justify-end gap-3 pt-3">

        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-amber-300 bg-amber-100 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-amber-200"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-rose-600 px-5 py-2.5 font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : isEditing
            ? "Update Product"
            : "Create Product"}
        </button>

      </div>

    </form>
  );
}